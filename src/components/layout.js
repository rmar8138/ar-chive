import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks"
import "../css/global-styles.css"

const theme = {
  lightGrey: "rgba(233, 233, 234)",
  darkGrey: "rgba(147, 149, 152)",
  darkBlue: "rgba(39, 41, 99)",
  fs_small: "1.6rem",
  fs_medium: "2.6rem",
  fs_large: "4.6rem",
  bp_mobile: "780px",
}

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 },
])

const GlobalStyle = createGlobalStyle`

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
    height: 100%;
    font-size: ${props => props.theme.fs_medium};
    overflow: hidden;
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
  <PageTransition
    transitionStyles={{
      entering: { opacity: "0" },
      entered: { opacity: "1" },
      exiting: { opacity: "1" },
      exited: { opacity: "0" },
    }}
    transitionTime={350}
  >
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <Padding>
          <GlobalStyle />
          {children}
        </Padding>
      </BreakpointProvider>
    </ThemeProvider>
  </PageTransition>
)
