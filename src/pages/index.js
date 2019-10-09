import React, { Component, Fragment } from "react"
import { UserAgent } from '@quentin-sommer/react-useragent'
import DesktopHomePage from "../components/desktopHomePage"
import MobileHomePage from "../components/mobileHomePage"

class Home extends Component {
  
  render() {
    return (
      <Fragment>
        <UserAgent computer>
          <DesktopHomePage />
        </UserAgent>
        <UserAgent mobile>
          <MobileHomePage />
        </UserAgent>
      </Fragment>
    )
  }
}

export default Home
