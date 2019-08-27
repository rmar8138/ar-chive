import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img2 = require(`../assets/images/web/kirribilli-home/2.png`)
const img3 = require(`../assets/images/web/kirribilli-home/3.png`)
const img4 = require(`../assets/images/web/kirribilli-home/4.png`)
const img5 = require(`../assets/images/web/kirribilli-home/5.png`)
const img6 = require(`../assets/images/web/kirribilli-home/6.png`)
const img7 = require(`../assets/images/web/kirribilli-home/7.png`)
const img8 = require(`../assets/images/web/kirribilli-home/8.png`)
const img9 = require(`../assets/images/web/kirribilli-home/9.png`)
const img10 = require(`../assets/images/web/kirribilli-home/10.png`)
const img11 = require(`../assets/images/web/kirribilli-home/11.png`)
const img12 = require(`../assets/images/web/kirribilli-home/12.png`)

const KirribilliHome = () =>
  isBrowser ? (
    <ProjectPageLayout heading="09/Kirribilli Home">
      <Fragment>
        <div style={{ marginRight: "auto" }}>
          <img
            src={img2}
            alt=""
            style={{ height: "30vw", minHeight: "20rem", maxHeight: "50rem" }}
          />
          <img
            src={img3}
            alt=""
            style={{ height: "30vw", minHeight: "20rem", maxHeight: "50rem" }}
          />
        </div>
      </Fragment>
      <Fragment>
        <div style={{ marginLeft: "10rem" }}>
          <img
            src={img4}
            alt=""
            style={{ width: "40%", minWidth: "15rem", maxWidth: "40rem" }}
          />
          <img
            src={img5}
            alt=""
            style={{ width: "40%", minWidth: "15rem", maxWidth: "40rem" }}
          />
        </div>
      </Fragment>
      <Fragment>
        <p>
          Following from our mural at Cool Mac Cafe, one of their local
          customers approached us to create two bespoke artworks for their home.
          With the process and aesthetic drawing from our previous work, we
          explored Kirribilli again taking note of ephemeral shadow lines
          against concrete existing structures.
        </p>
      </Fragment>
      <Fragment>
        <img
          src={img6}
          alt=""
          style={{ width: "25%", minWidth: "13rem", maxWidth: "30rem" }}
        />
        <img
          src={img7}
          alt=""
          style={{ width: "25%", minWidth: "13rem", maxWidth: "30rem" }}
        />
        <img
          src={img8}
          alt=""
          style={{ width: "25%", minWidth: "13rem", maxWidth: "30rem" }}
        />
      </Fragment>
      <Fragment>
        <img src={img9} alt="" style={{ width: "30%" }} />
        <img src={img10} alt="" style={{ width: "35%" }} />
      </Fragment>
      <Fragment>
        <div style={{ display: "flex", marginRight: "auto" }}>
          <img
            src={img11}
            alt=""
            style={{
              width: "35%",
              maxWidth: "40rem",
              marginTop: "",
              alignSelf: "flex-start",
            }}
          />
          <img src={img12} alt="" style={{ width: "35%", maxWidth: "40rem" }} />
        </div>
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="09/Kirribilli House">
      <Fragment />
    </MobileProjectPageLayout>
  )

export default KirribilliHome
