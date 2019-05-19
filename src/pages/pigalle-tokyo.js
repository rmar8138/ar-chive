import React, { Component, Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"

const main = require(`../assets/images/web/6.png`)
const img1_1 = require(`../assets/images/web/pigalle-tokyo/1-1.png`)
const img1_2 = require(`../assets/images/web/pigalle-tokyo/1-2.png`)
const img2_1 = require(`../assets/images/web/pigalle-tokyo/2-1.png`)
const img2_2 = require(`../assets/images/web/pigalle-tokyo/2-2.png`)

const PigalleTokyo = () => (
  <ProjectPageLayout heading="06/Pigalle Tokyo">
    <Fragment>
      <img src={main} alt="Pigalle Tokyo" />
    </Fragment>
    <Fragment>
      <img src={img1_1} alt="Pigalle Tokyo" />
      <img src={img1_2} alt="Pigalle Tokyo" />
    </Fragment>
    <Fragment>
      <img src={img2_1} alt="Pigalle Tokyo" />
      <img src={img2_2} alt="Pigalle Tokyo" />
    </Fragment>
  </ProjectPageLayout>
)

export default PigalleTokyo
