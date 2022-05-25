import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

const Name = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`

const EvolutionDescription = styled.div`
  margin-top: 1rem;

  p {
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
  }
`

const TitleWayToEvolve = styled.p`
  color: #ac0000;
  font-size: 1rem;
`

const PokemonEvolutionData = ({ name, image, evolvesTo, description }) => {
  const evolutionDescription = description && (
    <EvolutionDescription>
      <TitleWayToEvolve>{description.wayToEvolve}</TitleWayToEvolve>
      {description.minLevel && <p>{description.minLevel}</p>}
      {description.item && <p>Item: {description.item}</p>}
      {description.heldItem && <p>Held Item: {description.heldItem}</p>}
      {description.timeDay && <p>{description.timeDay}</p>}
      {description.minHappines && (
        <p>Min Happines: {description.minHappines}</p>
      )}
      {description.minAffection && (
        <p>Min Affection: {description.minAffection}</p>
      )}
      {description.requiredMoveType && (
        <p>Require move type: {description.requiredMoveType}</p>
      )}
      {description.requiredMove && (
        <p>Require move type: {description.requiredMove}</p>
      )}
    </EvolutionDescription>
  )
  return (
    <>
      <div>
        {evolutionDescription}
        <img src={image} alt={name} />
        <Name>{name}</Name>
      </div>

      {evolvesTo && evolvesTo.length && (
        <>
          <span></span>
          {evolvesTo.map(item => (
            <PokemonEvolutionData key={item.name} {...item} />
          ))}
        </>
      )}
    </>
  )
}

PokemonEvolutionData.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  evolvesTo: PropTypes.array,
  description: PropTypes.object
}

export default PokemonEvolutionData
