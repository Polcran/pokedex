import PropTypes from 'prop-types'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styled from 'styled-components/macro'

const ErrorWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
`
const ErrorTitle = styled.h2`
  color: #ac0000;
  margin: 0;
  padding: 1rem 0;
`
const ErrorMessage = styled.pre`
  display: block;
  margin: 0;
  padding: 0 1rem;
  white-space: inherit;
  word-break: break-word;
`

const ErrorImage = styled.img`
  height: auto;
  margin: 1rem;
  width: 60%;
`

const ErrorButton = styled.button`
  background-color: #353535;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 1rem;
`

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorWrapper role="alert">
      <ErrorTitle>There was an error:</ErrorTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <ErrorImage
        src="/assets/img/sad-pikachu.png"
        alt="Sad Pikachu"
        width="280"
        height="293"
      />
      <ErrorButton onClick={resetErrorBoundary}>Try again</ErrorButton>
    </ErrorWrapper>
  )
}

function PokemonErrorBoundary(props) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func
}

export default PokemonErrorBoundary
