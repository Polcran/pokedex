import React from 'react'
import styled from 'styled-components/macro'
import './App.css'
import PokedexCase from './components/PokedexCase'

const PokedexWrapper = styled.main`
  background-color: #d1d1d1;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <PokedexWrapper>
      <PokedexCase />
    </PokedexWrapper>
  )
}

export default App
