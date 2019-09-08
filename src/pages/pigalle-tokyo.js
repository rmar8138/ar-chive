import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img1 = require(`../assets/images/web/pigalle-tokyo/1.png`)
const img2_1 = require(`../assets/images/web/pigalle-tokyo/2-1.png`)
const img2_2 = require(`../assets/images/web/pigalle-tokyo/2-2.png`)
const img3_1 = require(`../assets/images/web/pigalle-tokyo/3-1.png`)
const img3_2 = require(`../assets/images/web/pigalle-tokyo/3-2.png`)

const PigalleTokyo = () =>
  isBrowser ? (
    <ProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <img
          src={img1}
          alt="Pigalle Tokyo"
          style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img2_2}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
        <img
          src={img2_2}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img3_1}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
        <img
          src={img3_2}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <img
          src={img1}
          alt="Pigalle Tokyo"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <img src={img2_1} alt="Pigalle Tokyo" style={{ width: "45%" }} />
        <img src={img2_2} alt="Pigalle Tokyo" style={{ width: "45%" }} />
      </Fragment>
      <Fragment>
        <img src={img3_1} alt="Pigalle Tokyo" style={{ width: "45%" }} />
        <img src={img3_2} alt="Pigalle Tokyo" style={{ width: "45%" }} />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default PigalleTokyo
