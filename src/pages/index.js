import React, { Component, Fragment } from "react"
import Breakpoint from "react-socks"
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Breakpoint m up>
          <DesktopHomePage />
        </Breakpoint>

        <Breakpoint s only>
          <MobileHomePage />
        </Breakpoint>
      </Fragment>
    )
  }
}

export default Home
