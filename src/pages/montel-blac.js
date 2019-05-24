import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"

const main = require(`../assets/images/web/2.png`)
const vid1 = require(`../assets/videos/montel-blac/1.mp4`)
const vid2 = require(`../assets/videos/montel-blac/2.mp4`)

const MontelBlac = () => (
  <ProjectPageLayout heading="02/Montel Blac">
    <Fragment>
      <img src={main} alt="Montel Blac" />
    </Fragment>
    <Fragment>
      <p>
        Montel Blac is a beatmaker and producer from Sydney. ar-chive worked
        with Montel to create the identity of his self titled EP. Our goal was
        to succinctly showcase both the sound and visual design in a way that
        heightens Montel’s unearthly sound and off-kilter production style.
      </p>
    </Fragment>
    <Fragment>
      <figure>
        <video autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <video autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
      </figure>
    </Fragment>
  </ProjectPageLayout>
)

export default MontelBlac
