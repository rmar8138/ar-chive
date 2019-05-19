import React, { Component, Fragment } from "react"
import styled from "styled-components"
import ProjectPageLayout from "../components/projectPageLayout"

const main = require(`../assets/images/web/4.png`)
const img1 = require(`../assets/images/web/cool-mac-cafe/1.png`)
const img2_1 = require(`../assets/images/web/cool-mac-cafe/2-1.png`)
const img2_2 = require(`../assets/images/web/cool-mac-cafe/2-2.png`)
const img3_1 = require(`../assets/images/web/cool-mac-cafe/3-1.png`)
const img3_2 = require(`../assets/images/web/cool-mac-cafe/3-2.png`)
const img3_3 = require(`../assets/images/web/cool-mac-cafe/3-3.png`)
const img3_4 = require(`../assets/images/web/cool-mac-cafe/3-4.png`)

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

const CoolMacCafe = () => (
  <ProjectPageLayout heading="04/Cool Mac Cafe">
    <Fragment>
      <img src={main} alt="Cool Mac Cafe" />
    </Fragment>
    <Fragment>
      <p>
        Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and Japanese
        inspired dishes for locals and tourists alike. We were commissioned to
        created a permanent mural for their six metre feature wall that would
        brighten up the space.
      </p>
    </Fragment>
    <Fragment>
      <p>
        We wanted to produce a collaged piece that would resonate with the
        locals and therefore drew from the structural features of Kirribilli,
        highlighting the often overlooked details.
      </p>
    </Fragment>
    <Fragment>
      <img src={img1} alt="Cool Mac Cafe" />
    </Fragment>
    <Fragment>
      <img src={img2_1} alt="Cool Mac Cafe" />
      <img src={img2_2} alt="Cool Mac Cafe" />
    </Fragment>
    <Fragment>
      <Grid>
        <img
         
          src={img3_1}
          alt="Cool Mac Cafe"
        />
        <img src={img3_2} alt="Cool Mac Cafe" />
        <img src={img3_3} alt="Cool Mac Cafe" />
        <img src={img3_4} alt="Cool Mac Cafe" />
      </Grid>
    </Fragment>
  </ProjectPageLayout>
)

export default CoolMacCafe
