import React, { Fragment } from "react"
import styled from "styled-components"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const main = require(`../assets/images/web/4.png`)
const img1 = require(`../assets/images/web/cool-mac-cafe/1.png`)
const img2_1 = require(`../assets/images/web/cool-mac-cafe/2-1.png`)
const img2_2 = require(`../assets/images/web/cool-mac-cafe/2-2.png`)
const img3 = require(`../assets/images/web/cool-mac-cafe/3.png`)
const img3_1 = require(`../assets/images/web/cool-mac-cafe/3-1.png`)
const img3_2 = require(`../assets/images/web/cool-mac-cafe/3-2.png`)
const img3_3 = require(`../assets/images/web/cool-mac-cafe/3-3.png`)
const img3_4 = require(`../assets/images/web/cool-mac-cafe/3-4.png`)

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 19.15% 5.38% 25.36% 3.83% 25.36% 1.75% 19.15%;
  /* grid-template-rows: 6.21% 9.57% 9.57% 6.21% 9.57% 9.57%; */
  /* grid-template-rows: 6.21% 9.57% 9.57% 6.21% 9.57% 9.57%; */

  .img1 {
    grid-column: 1 / span 1;
    grid-row: 3 / span 3;
  }

  .img2 {
    grid-column: 3 / span 1;
    grid-row: 5 / span 2;
  }

  .img3 {
    grid-column: 5 / span 1;
    grid-row: 2 / span 2;
  }

  .img4 {
    grid-column: 7 / span 1;
    grid-row: 1 / span 3;
  }
`

const CoolMacCafe = () =>
  isBrowser ? (
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
        <img src={img1} alt="Cool Mac Cafe" style={{ width: "70%" }} />
      </Fragment>
      <Fragment>
        <img src={img2_1} alt="Cool Mac Cafe" style={{ width: "30%" }} />
        <img src={img2_2} alt="Cool Mac Cafe" style={{ width: "30%" }} />
      </Fragment>
      <Fragment>
        <img src={img3} alt="Cool Mac Cafe" style={{ width: "70%" }} />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="04/Cool Mac Cafe">
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
        <img src={img1} alt="Cool Mac Cafe" style={{ width: "100%" }} />
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img2_1}
            alt="Cool Mac Cafe"
            style={{ width: "45%", marginTop: "-15rem" }}
          />
          <img
            src={img2_2}
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
            src={img3_1}
            alt="Cool Mac Cafe"
            style={{ marginBottom: "2rem" }}
          />
          <img className="img2" src={img3_2} alt="Cool Mac Cafe" />
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
            src={img3_3}
            alt="Cool Mac Cafe"
            style={{
              marginBottom: "2rem",
              marginLeft: "2rem",
              alignSelf: "flex-start",
            }}
          />
          <img
            className="img4"
            src={img3_4}
            alt="Cool Mac Cafe"
            style={{ marginRight: "2rem", alignSelf: "flex-end" }}
          />
        </figure>
      </Fragment>
    </MobileProjectPageLayout>
  )

export default CoolMacCafe
