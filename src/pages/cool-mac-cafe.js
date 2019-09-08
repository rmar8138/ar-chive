import React, { Fragment } from "react"
import styled from "styled-components"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img1 = require(`../assets/images/web/cool-mac-cafe/1.png`)
const img2 = require(`../assets/images/web/cool-mac-cafe/2.png`)
const img3_1 = require(`../assets/images/web/cool-mac-cafe/3-1.png`)
const img3_2 = require(`../assets/images/web/cool-mac-cafe/3-2.png`)
const img4 = require(`../assets/images/web/cool-mac-cafe/4.png`)

const img4_1 = require(`../assets/images/web/cool-mac-cafe/4-1.png`)
const img4_2 = require(`../assets/images/web/cool-mac-cafe/4-2.png`)
const img4_3 = require(`../assets/images/web/cool-mac-cafe/4-3.png`)
const img4_4 = require(`../assets/images/web/cool-mac-cafe/4-4.png`)

const CoolMacCafe = () =>
  isBrowser ? (
    <ProjectPageLayout heading="04/Cool Mac Cafe">
      <Fragment>
        <img
          src={img1}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
        />
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
        <img
          src={img2}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img3_1}
          alt="Cool Mac Cafe"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "40rem" }}
        />
        <img
          src={img3_2}
          alt="Cool Mac Cafe"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "40rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img4}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "45rem" }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="04/Cool Mac Cafe">
      <Fragment>
        <img src={img1} alt="Cool Mac Cafe" />
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
        <img src={img2} alt="Cool Mac Cafe" style={{ width: "100%" }} />
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img3_1}
            alt="Cool Mac Cafe"
            style={{ width: "45%", marginTop: "-15rem" }}
          />
          <img
            src={img3_2}
            alt="Cool Mac Cafe"
            style={{ width: "45%", marginTop: "15rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "35%",
          }}
        >
          <img
            className="img1"
            src={img4_1}
            alt="Cool Mac Cafe"
            style={{ marginBottom: "2rem" }}
          />
          <img className="img2" src={img4_2} alt="Cool Mac Cafe" />
        </figure>
      </Fragment>
      <Fragment>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            className="img3"
            src={img4_3}
            alt="Cool Mac Cafe"
            style={{
              marginBottom: "2rem",
              marginLeft: "2rem",
              alignSelf: "flex-start",
            }}
          />
          <img
            className="img4"
            src={img4_4}
            alt="Cool Mac Cafe"
            style={{ marginRight: "2rem", alignSelf: "flex-end" }}
          />
        </figure>
      </Fragment>
    </MobileProjectPageLayout>
  )

export default CoolMacCafe
