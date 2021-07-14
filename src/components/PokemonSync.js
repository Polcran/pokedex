import React from 'react'
import styled from 'styled-components/macro'
import svgSync from '../icons/sync-button.svg'

const Image = styled.img`
  width: 100%;
`

const PokemonSync = () => {
  return <Image src={svgSync} alt="" />
}

export default PokemonSync
