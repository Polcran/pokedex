import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const GlobalsStyle = createGlobalStyle`
  p, span, input {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: capitalize;
  }

  h1, h2, h3, h4, h5, .heading {
    font-family: 'Sniglet', cursive;
    letter-spacing: .5px;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <GlobalsStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
