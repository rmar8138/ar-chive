import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img1 = require(`../assets/images/web/montel-blac/1.png`)
const vid1 = require(`../assets/videos/montel-blac/1.mp4`)
const vid2 = require(`../assets/videos/montel-blac/2.mp4`)

const MontelBlac = () =>
  isBrowser ? (
    <ProjectPageLayout heading="02/Montel Blac">
      <Fragment>
        <img
          src={img1}
          alt="Montel Blac"
          style={{ maxWidth: "50%", minWidth: "30rem" }}
        />
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
          <video loop muted controls="controls">
            <source src={vid1} type="video/mp4" />
          </video>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <video loop muted controls="controls">
            <source src={vid2} type="video/mp4" />
          </video>
        </figure>
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="02/Montel Blac">
      <Fragment>
        <img src={img1} alt="Montel Blac" />
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
    </MobileProjectPageLayout>
  )

export default MontelBlac
