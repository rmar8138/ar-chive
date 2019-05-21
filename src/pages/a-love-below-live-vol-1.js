import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"

const main = require(`../assets/images/web/1.png`)
const img1 = require(`../assets/images/web/a-love-below/1.png`)
const img2 = require(`../assets/images/web/a-love-below/2.png`)
const img3 = require(`../assets/images/web/a-love-below/3.png`)

const ALoveBelow = () => (
  <ProjectPageLayout heading="01/a Love Below: Live! Vol. 1">
    <Fragment>
      <figure>
        <img src={main} alt="a Love Below: Live! Vol. 1 - 1" />
      </figure>
    </Fragment>
    <Fragment>
      <p>
        Poster for a Love Below: Live! Volume 1, an afternoon of original beats
        and painting created live from Coolmac Cafe in Kirribilli. Featuring
        wa*sei, Angela Tam, Kase Avila, Montel Blac and Apollo 4000.
      </p>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img1} alt="a Love Below: Live! Vol. 1 - 2" />
        {/* <figcaption>Photos by Naylin Aung</figcaption> */}
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <div style={{ height: "100%", width: "auto", marginRight: "auto" }}>
          <img src={img2} alt="a Love Below: Live! Vol. 1 - 3" />
          <img src={img3} alt="a Love Below: Live! Vol. 1 - 4" />
        </div>
      </figure>
    </Fragment>
  </ProjectPageLayout>
)

export default ALoveBelow
