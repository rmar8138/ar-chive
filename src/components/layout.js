import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks"

import OrpheusProRegular from "../assets/fonts/OrpheusPro-Regular.woff"
import GroteskRegular from "../assets/fonts/Grotesk-Regular.woff"
import GroteskLight from "../assets/fonts/Grotesk-Light.woff"

const theme = {
  lightGrey: "rgba(233, 233, 234)",
  darkGrey: "rgba(147, 149, 152)",
  fs_small: "1.6rem",
  fs_medium: "2.6rem",
  fs_large: "4.6rem",
}

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 },
])

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Orpheus Pro Regular';
    src: url(${OrpheusProRegular}) format('woff');
  }

  @font-face {
    font-family: 'Grotesk Regular';
    src: url(${GroteskRegular}) format('woff');
  }

  @font-face {
    font-family: 'Grotesk Light';
    src: url(${GroteskLight}) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* border: 1px solid orangered; */
  }

  html {
    background-color: ${props => props.theme.lightGrey};
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;

  }

  body {
    font-family: 'Orpheus Pro Regular';
    min-height: 100%;
    font-size: ${props => props.theme.fs_medium};
  }

  h1 {
    font-size: ${props => props.theme.fs_large}
  }

  a {
    text-decoration: none;
    color: black;
  }

`

const Padding = styled.div`
  height: 100vh;
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <BreakpointProvider>
      <Padding>
        <GlobalStyle />
        {children}
      </Padding>
    </BreakpointProvider>
  </ThemeProvider>
)
