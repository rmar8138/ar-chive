import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import {
  DesktopBreakpoint,
  MobileBreakpoint,
} from "../components/utilities/breakpoints"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const main = require(`../assets/images/web/1.png`)
const img1 = require(`../assets/images/web/a-love-below/1.png`)
const img2 = require(`../assets/images/web/a-love-below/2.png`)
const img3 = require(`../assets/images/web/a-love-below/3.png`)

const ALoveBelow = () =>
  isBrowser ? (
    <ProjectPageLayout heading="01/a Love Below: Live! Vol. 1">
      <Fragment>
        <figure>
          <img src={main} alt="a Love Below: Live! Vol. 1 - 1" />
        </figure>
      </Fragment>
      <Fragment>
        <p>
          Poster for a Love Below: Live! Volume 1, an afternoon of original
          beats and painting created live from Coolmac Cafe in Kirribilli.
          Featuring wa*sei, Angela Tam, Kase Avila, Montel Blac and Apollo 4000.
        </p>
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img1}
            alt="a Love Below: Live! Vol. 1 - 2"
            style={{ width: "60%" }}
          />
          {/* <figcaption>Photos by Naylin Aung</figcaption> */}
        </figure>
      </Fragment>
      <Fragment>
        <figure style={{ justifyContent: "flex-start", paddingLeft: "2.5rem" }}>
          <img
            src={img2}
            alt="a Love Below: Live! Vol. 1 - 3"
            style={{ width: "30%" }}
          />
          <img
            src={img3}
            alt="a Love Below: Live! Vol. 1 - 4"
            style={{ width: "30%" }}
          />
        </figure>
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="01/a Love Below: Live! Vol. 1">
      <Fragment>
        <figure>
          <img src={main} alt="a Love Below: Live! Vol. 1 - 1" />
        </figure>
      </Fragment>
      <Fragment>
        <p>
          Poster for a Love Below: Live! Volume 1, an afternoon of original
          beats and painting created live from Coolmac Cafe in Kirribilli.
          Featuring wa*sei, Angela Tam, Kase Avila, Montel Blac and Apollo 4000.
        </p>
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img1}
            alt="a Love Below: Live! Vol. 1 - 2"
            style={{ width: "100%" }}
          />
          {/* <figcaption>Photos by Naylin Aung</figcaption> */}
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img2}
            alt="a Love Below: Live! Vol. 1 - 3"
            style={{ width: "80%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img
            src={img3}
            alt="a Love Below: Live! Vol. 1 - 4"
            style={{ width: "80%", marginLeft: "auto" }}
          />
        </figure>
      </Fragment>
    </MobileProjectPageLayout>
  )

export default ALoveBelow
