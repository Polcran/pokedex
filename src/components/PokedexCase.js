import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { grid } from '../utils/css/css'
import PokemonErrorBoundary from './PokemonErrorBoundary'
import PokemonScreen from './PokemonScreen'
import PokemonSearch from './PokemonSearch'

const PokedexWrapper = styled.section`
  ${grid}

  background-color: #a30000;
  border-radius: 10px;
  grid-template-rows: 40px [title] auto 24px [search] auto 24px [screen] auto 40px;
  max-width: 380px;

  @media only screen and (min-width: 500px) {
    margin: 0 auto;
    max-width: 550px;
  }
`
const PookemonTitle = styled.div`
  grid-column: 1/-1;
  grid-row: title;
  position: relative;

  h1 {
    color: #353535;
    font-size: 1.4rem;
    font-weight: 700;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
  }

  img {
    display: block;
    margin: 0 auto;
    max-height: 40px;
  }
`

const PokemonSearchField = styled(PokemonSearch)`
  align-items: center;
  display: flex;
  grid-column: 1/-1;
  grid-row: search;
  justify-content: space-evenly;
`

const PokemonScreenUI = styled.div`
  background-color: #fff;
  border: 0.5rem solid #3a3a3a;
  display: flex;
  grid-column: 1/-1;
  grid-row: screen;
  margin: 0 16px;
  max-height: 60vh;
  min-height: 60vh;
  overflow: auto;

  @media only screen and (min-width: 500px) {
    grid-column: 2/12;
    max-height: 540px;
    min-height: 540px;
  }
`

const PokedexCase = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [status, setStatus] = useState('idle')

  const handlePokemonName = name => {
    setPokemonName(name)
  }

  return (
    <PokedexWrapper>
      <PookemonTitle>
        <img
          src="/assets/img/pokeball-banner.svg"
          alt="Pokemon banner"
          aria-hidden="true"
        />
        <h1>Pokedex</h1>
      </PookemonTitle>
      <PokemonSearchField
        pokemonName={pokemonName}
        onSubmit={handlePokemonName}
        status={status}
      />
      <PokemonScreenUI>
        <PokemonErrorBoundary onReset={() => setPokemonName('')}>
          <PokemonScreen
            pokemonName={pokemonName}
            currentStatus={status => setStatus(status)}
          />
        </PokemonErrorBoundary>
      </PokemonScreenUI>
    </PokedexWrapper>
  )
}

export default PokedexCase
