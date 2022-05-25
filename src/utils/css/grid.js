import { css } from 'styled-components/macro'

const grid = css`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 16px;

  @media only screen and (min-width: 500px) {
    grid-column-gap: 24px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    margin: 0 24px;
  }
`

export default grid
