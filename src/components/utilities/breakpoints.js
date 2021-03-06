import styled from "styled-components"

export const DesktopBreakpoint = styled.div`
  @media only screen and (max-width: 779px) {
    display: none;
  }

  @media only screen and (orientation: landscape) {
    display: none;
  }
`

export const MobileBreakpoint = styled.div`
  @media only screen and (min-width: 780px) {
    display: none;
  }

  @media only screen and (orientation: landscape) {
    display: block;
  }
`
