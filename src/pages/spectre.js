import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const main = require(`../assets/images/web/spectre/1.png`)
const img1 = require(`../assets/images/web/spectre/2.png`)

const Spectre = () =>
  isBrowser ? (
    <ProjectPageLayout heading="08/Spectre">
      <Fragment>
        <img
          src={main}
          alt="Spectre Front Cover"
          style={{
            marginLeft: "40%",
            width: "35%",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img1}
          alt="Spectre Front Cover"
          style={{
            marginLeft: "40%",
            width: "35%",
          }}
        />
      </Fragment>
      <Fragment>
        <p>Description</p>
      </Fragment>
      <Fragment>
        <p>Speak like a child mv</p>
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="02/Montel Blac">
      <Fragment>
        <img src={main} alt="Montel Blac" />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default Spectre
