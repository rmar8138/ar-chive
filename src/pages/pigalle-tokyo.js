import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const main = require(`../assets/images/web/6.png`)
const img1_1 = require(`../assets/images/web/pigalle-tokyo/1-1.png`)
const img1_2 = require(`../assets/images/web/pigalle-tokyo/1-2.png`)
const img2_1 = require(`../assets/images/web/pigalle-tokyo/2-1.png`)
const img2_2 = require(`../assets/images/web/pigalle-tokyo/2-2.png`)

const PigalleTokyo = () =>
  isBrowser ? (
    <ProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <img src={main} alt="Pigalle Tokyo" />
      </Fragment>
      <Fragment>
        <img src={img1_1} alt="Pigalle Tokyo" style={{ width: "30%" }} />
        <img src={img1_2} alt="Pigalle Tokyo" style={{ width: "30%" }} />
      </Fragment>
      <Fragment>
        <img src={img2_1} alt="Pigalle Tokyo" style={{ width: "30%" }} />
        <img src={img2_2} alt="Pigalle Tokyo" style={{ width: "30%" }} />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <img
          src={main}
          alt="Pigalle Tokyo"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <img src={img1_1} alt="Pigalle Tokyo" style={{ width: "45%" }} />
        <img src={img1_2} alt="Pigalle Tokyo" style={{ width: "45%" }} />
      </Fragment>
      <Fragment>
        <img src={img2_1} alt="Pigalle Tokyo" style={{ width: "45%" }} />
        <img src={img2_2} alt="Pigalle Tokyo" style={{ width: "45%" }} />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default PigalleTokyo
