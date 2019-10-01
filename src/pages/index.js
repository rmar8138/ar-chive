import React, { Component, Fragment } from "react"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"
import { isBrowser, isMobile } from "react-device-detect"

class Home extends Component {
  // renderContent = () => {
  //   if (isMobile) {
  //     return <MobileHomePage />
  //   }
  //   return <DesktopHomePage />
  // }

  // render() {
  //   // return isBrowser ? <DesktopHomePage /> : <MobileHomePage />
  //   return this.renderContent()
  // }
  render() {
    return <MobileHomePage />
  }
}

export default Home
