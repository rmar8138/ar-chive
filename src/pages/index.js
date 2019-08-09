import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Breakpoint from "react-socks"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"
import {
  DesktopBreakpoint,
  MobileBreakpoint,
} from "../components/utilities/breakpoints"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

class Home extends Component {
  render() {
    return isBrowser ? <DesktopHomePage /> : <MobileHomePage />
  }
}

export default Home
