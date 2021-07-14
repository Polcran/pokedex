import PropTypes from 'prop-types'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components/macro'
import useAsync from '../utils/customHooks/useAsync'
import fetchPokemons from '../utils/fetchPokemons'
import PokemonData from './PokemonData'
import PokemonSync from './PokemonSync'

const PokemonImageIdle = styled.img`
  object-fit: cover;
`

const PokemonScreen = ({ pokemonName, currentStatus }) => {
  const { data, status, error, run } = useAsync()

  useEffect(() => {
    if (pokemonName) {
      run(fetchPokemons(pokemonName))
    }
  }, [pokemonName, run])

  useCallback(() => {
    currentStatus(status)
  }, [currentStatus, status])

  if (status === 'idle') {
    return (
      <PokemonImageIdle
        width="100%"
        src="/assets/img/pokemon-idle.jpg"
        alt="Pokemon Idle"
      />
    )
  } else if (status === 'pending') {
    return <PokemonSync />
  } else if (status === 'rejected') {
    throw error
  } else if (status === 'resolved') {
    return <PokemonData pokemon={data} />
  }
}

PokemonScreen.propTypes = {
  pokemonName: PropTypes.string
}

export default PokemonScreen
