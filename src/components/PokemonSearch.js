import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const SearchForm = styled.form`
  display: inline-flex;
  max-width: 250px;
  width: 100%;
`

const SearchField = styled.input`
  background-image: url(/assets/img/search-button.svg);
  background-position: 5px;
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  border-radius: 5px;
  height: 31px;
  margin-right: 1rem;
  padding-left: 2rem;
  width: 100%;
`

const SearchButton = styled.input`
  background-color: #353535;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  padding: 5px 1rem;
`

const PokemonSearch = ({
  className,
  pokemonName: externalPokemonName,
  onSubmit,
  status,
  ...props
}) => {
  const [pokemonName, setPokemonName] = useState(externalPokemonName)

  useEffect(() => {
    setPokemonName(externalPokemonName)
  }, [externalPokemonName])

  const handleNameChange = event => {
    setPokemonName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(pokemonName)
  }

  return (
    <div className={className}>
      <SearchForm onSubmit={handleSubmit}>
        <SearchField
          type="text"
          placeholder="Pokemon name or ID"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <SearchButton
          disabled={!!(status === 'pending' || !pokemonName)}
          type="submit"
          value="GO!"
        />
      </SearchForm>
    </div>
  )
}

PokemonSearch.propTypes = {
  className: PropTypes.string,
  pokemonName: PropTypes.string,
  initialPokemonName: PropTypes.string,
  status: PropTypes.string,
  onSubmit: PropTypes.func
}

export default PokemonSearch
