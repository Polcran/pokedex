import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { grid } from '../utils/css/css'
import PokemonEvolutionData from './PokemonEvolutionData'

const MainWrapper = styled.div`
  ${grid}

  grid-template-rows: [id] auto [name] auto [image] auto [types] auto;
  width: 100%;

  > * {
    grid-column: 1/-1;
  }
`

const PokedexName = styled.h2`
  color: #363636;
  text-align: center;
  text-transform: capitalize;

  span {
    color: #7c7c7c;
    font-size: 1rem;
    margin-right: 0.3rem;
  }
`

const PokemonImage = styled.img`
  border: 2px solid #cecece;
  border-radius: 40px;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 220px;
  width: 100%;

  @media only screen and (min-width: 500px) {
    max-width: 280px;
  }
`

const PokemonTypes = styled.div`
  align-items: center;
  display: flex;
  padding-bottom: 1rem;
`

const PokemonType = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 40%;
  flex-flow: column nowrap;

  span {
    text-transform: capitalize;
  }
`
const Arrow = styled.span`
  font-size: 2rem;
  margin: 0 0.5rem;
`

const PokemonWeakness = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 50%;
  flex-flow: column nowrap;

  img {
    width: 40px;
  }

  span {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`

const PokemonEvolutionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;

  span::before {
    content: '\u2193';
    display: block;
  }

  > div,
  > span {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
  }

  &.eevee {
    flex-flow: row wrap;
    justify-content: space-evenly;

    > div:first-child,
    > span {
      flex: 1 0 100%;
    }

    > div:nth-child(n + 2) {
      flex: 0 0 40%;
    }
  }

  @media only screen and (min-width: 500px) {
    flex-flow: row wrap;
    justify-content: space-evenly;

    span::before {
      content: '\u2192';
    }

    > div {
      align-self: flex-end;
    }

    &.eevee {
      > span::before {
        content: '\u2193';
      }

      > div:nth-child(n + 2) {
        flex: 0 0 40%;
      }
    }
  }
`

const PokemonData = ({ pokemon }) => {
  return (
    <MainWrapper>
      <PokedexName>
        <span>{`Nº${pokemon.pokedexId} `}</span>
        {pokemon.name}
      </PokedexName>

      <PokemonImage src={pokemon.image} alt="" width="252" height="252" />

      <h3>Type</h3>
      {pokemon.types.map((type, index) => {
        return (
          <PokemonTypes
            key={`${type.name}${pokemon.pokedexId}${index}`}
            className={`type-${index}`}
          >
            <PokemonType>
              <img
                src={`/assets/img/types/${type.name}.svg`}
                alt={`Type ${type.name}`}
              />
              <span>{type.name}</span>
            </PokemonType>
            <Arrow aria-hidden="true">↭</Arrow>
            <PokemonWeakness>
              <span className="heading">Weak against</span>
              <div>
                {type.weaknesses.map((weakness, index) => {
                  return (
                    <img
                      key={`${weakness}${pokemon.pokedexId}${index}`}
                      src={`/assets/img/types/${weakness}.svg`}
                      alt={`Type ${type.name}`}
                    />
                  )
                })}
              </div>
            </PokemonWeakness>
          </PokemonTypes>
        )
      })}

      {pokemon.evolutions && (
        <>
          <h3>Evolutions</h3>
          <PokemonEvolutionWrapper className={pokemon.evolutions[0].name}>
            <PokemonEvolutionData {...pokemon.evolutions[0]} />
          </PokemonEvolutionWrapper>
        </>
      )}
    </MainWrapper>
  )
}

PokemonData.propTypes = {
  pokemon: PropTypes.object
}

export default PokemonData
