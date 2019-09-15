import React, { Component } from "react"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"
import { isBrowser } from "react-device-detect"

class Home extends Component {
  render() {
    return isBrowser ? <DesktopHomePage /> : <MobileHomePage />
  }
}

export default Home
