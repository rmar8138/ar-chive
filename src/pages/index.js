import React, { Component } from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"
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
