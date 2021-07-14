/* eslint-disable camelcase */
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const getData = async url => {
  const response = await fetch(url)
  if (response.ok) {
    const data = await response.json()

    return data
  } else {
    return Promise.reject(new Error('No pokemon with the name'))
  }
}

const getAbilityDescription = data => {
  return Promise.all(
    data.map(async item => {
      const { name, url } = item.ability
      const abilityData = await getData(url)
      let description

      abilityData.effect_entries.forEach(effectData => {
        if (effectData.language.name === 'en') {
          description = effectData.effect
        }
      })

      return { name, description }
    })
  )
}

const getListByName = arr => {
  return arr.map(data => {
    return data.name
  })
}

const getType = types => {
  return Promise.all(
    types.map(async dataType => {
      const name = dataType.type.name
      const damageRelationData = await getData(dataType.type.url)
      const weaknesses = getListByName(
        damageRelationData.damage_relations.double_damage_from
      )

      return { name, weaknesses }
    })
  )
}

const setEvolutionList = async chain => {
  let list = null
  const image = await getData(`${URL}${chain.species.name}`)
  let evolutionData = {
    name: chain.species.name,
    image: image.sprites.front_default
  }

  if (chain.evolves_to.length > 0) {
    // eslint-disable-next-line space-before-function-paren
    list = await chain.evolves_to.reduce(async (acc, evolve) => {
      return [...(await acc), ...(await setEvolutionList(evolve))]
    }, Promise.resolve([]))
  }

  if (chain.evolution_details.length > 0) {
    const {
      min_level,
      held_item,
      item,
      min_happiness,
      min_affection,
      known_move_type,
      time_of_day,
      trigger,
      known_move
    } = chain.evolution_details[chain.evolution_details.length - 1]

    evolutionData = {
      ...evolutionData,
      description: {
        wayToEvolve: trigger.name,
        ...(min_level && { minLevel: min_level }),
        ...(item && { item: item.name }),
        ...(held_item && { heldItem: held_item.name }),
        ...(time_of_day && { timeDay: time_of_day }),
        ...(min_happiness && { minHappines: min_happiness }),
        ...(min_affection && { minAffection: min_affection }),
        ...(known_move_type && { requiredMoveType: known_move_type.name }),
        ...(known_move && { requiredMove: known_move.name })
      }
    }
  }

  evolutionData = {
    ...evolutionData,
    evolvesTo: list
  }

  return [evolutionData]
}

const getEvolution = async url => {
  const species = await getData(url)
  const evolutionChain = await getData(species.evolution_chain.url)

  if (evolutionChain.chain.evolves_to.length > 0) {
    return setEvolutionList(evolutionChain.chain)
  }

  return null
}

const printResult = async data => {
  const pokedexId = data.id
  const name = data.name
  const image = data.sprites.other['official-artwork'].front_default
  const abilities = await getAbilityDescription(data.abilities)
  const types = await getType(data.types)
  const evolutions = await getEvolution(data.species.url)

  return {
    pokedexId,
    name,
    image,
    types,
    abilities,
    evolutions
  }
}

const fetchPokemons = async name => {
  const formattedName = name.toLowerCase().replace(' ', '-')

  return await getData(`${URL}${formattedName}`)
    .then(data => {
      return printResult(data)
    })
    .catch(error => {
      throw new Error(`${error}: ${name}`)
    })
}

export default fetchPokemons
