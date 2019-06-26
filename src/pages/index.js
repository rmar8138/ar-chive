import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Breakpoint from "react-socks"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"
import {
  DesktopBreakpoint,
  MobileBreakpoint,
} from "../components/utilities/breakpoints"

class Home extends Component {
  render() {
    return (
      <Fragment>
        <DesktopBreakpoint>
          <DesktopHomePage />
        </DesktopBreakpoint>
        <MobileBreakpoint>
          <MobileHomePage />
        </MobileBreakpoint>
      </Fragment>
    )
  }
}

export default Home
