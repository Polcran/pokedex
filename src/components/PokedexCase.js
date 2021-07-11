import React from 'react'
import styled from 'styled-components'
import { grid } from '../utils/css/css'
import PokemonSearch from './PokemonSearch'

const PokedexWrapper = styled.section`
  ${grid}

  background-color: #a30000;
  border-radius: 10px;
  grid-template-rows: 40px [title] auto 24px [search] auto 24px [screen] auto 40px;
  padding: 0 16px;
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
    max-height: 40px;
  }
`

const PokemonSearchField = styled(PokemonSearch)`
  align-items: center;
  display: flex;
  grid-column: 1/-1;
  grid-row: search;
  justify-content: space-evenly;
  justify-self: center;
  max-width: 330px;
`

const PokemonScreen = styled.div`
  background-color: #fff;
  border: 1rem solid #3a3a3a;
  grid-column: 1/-1;
  grid-row: screen;
  min-height: 300px;

  @media only screen and (min-width: 600px) {
    grid-column: 2/12;
  }
`

const PokedexCase = () => {
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
      <PokemonSearchField />
      <PokemonScreen></PokemonScreen>
    </PokedexWrapper>
  )
}

export default PokedexCase
