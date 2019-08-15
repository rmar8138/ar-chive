import React, { Fragment } from "react"
import styled from "styled-components"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img1 = require(`../assets/images/web/micra/1.png`)
const img1_1 = require(`../assets/images/web/micra/1-1.png`)
const img1_2 = require(`../assets/images/web/micra/1-2.png`)
const img2 = require(`../assets/images/web/micra/2.png`)
const img3 = require(`../assets/images/web/micra/3.png`)
const img4 = require(`../assets/images/web/micra/4.png`)
const img5 = require(`../assets/images/web/micra/5.png`)
const img6 = require(`../assets/images/web/micra/6.png`)
const img6_1 = require(`../assets/images/web/micra/6-1.png`)
const img6_2 = require(`../assets/images/web/micra/6-2.png`)
const img6_3 = require(`../assets/images/web/micra/6-3.png`)

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1fr, 100px);
`

const Micra = () =>
  isBrowser ? (
    <ProjectPageLayout heading="05/Micra">
      <Fragment>
        <p>
          Micra brings together multi-instrumentalist, Robbie Cain and
          singer-guitarist, Ivana Kay. <br />
          The Sydney based duo create a wistful, atmospheric sound with floating
          melodies and vulnerable lyrical composition.
        </p>
      </Fragment>
      <Fragment>
        <img src={img1} alt="Micra" style={{ width: "50%" }} />
      </Fragment>
      <Fragment>
        <img src={img2} alt="Micra" style={{ width: "40%" }} />
      </Fragment>
      <Fragment>
        <img src={img3} alt="Micra" style={{ width: "60%" }} />
      </Fragment>
      <Fragment>
        <p>
          We art directed and designed their covers for two debut singles,
          ‘Child Grows Old’ and ‘Plastic’.
        </p>
      </Fragment>
      <Fragment>
        <img src={img4} alt="Micra" />
      </Fragment>
      <Fragment>
        <img src={img5} alt="Micra" />
      </Fragment>
      <Fragment>
        <img src={img6} alt="Micra" style={{ width: "80%" }} />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="05/Micra">
      <Fragment>
        <p>
          Micra brings together multi-instrumentalist, Robbie Cain and
          singer-guitarist, Ivana Kay. The Sydney based duo create a wistful,
          atmospheric sound with floating melodies and vulnerable lyrical
          composition.
        </p>
      </Fragment>
      <Fragment>
        <img
          src={img1_1}
          alt="Micra"
          style={{ width: "45%", marginTop: "-15rem" }}
        />
        <img
          src={img1_2}
          alt="Micra"
          style={{ width: "45%", marginTop: "15rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img2}
          alt="Micra"
          style={{ width: "90%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <img src={img3} alt="Micra" style={{ width: "100%" }} />
      </Fragment>
      <Fragment>
        <p>
          We art directed and designed their covers for two debut singles,
          ‘Child Grows Old’ and ‘Plastic’.
        </p>
      </Fragment>
      <Fragment>
        <img src={img4} alt="Micra" style={{ width: "100%" }} />
      </Fragment>
      <Fragment>
        <img src={img5} alt="Micra" style={{ width: "100%" }} />
      </Fragment>
      <Fragment>
        <img
          src={img6_1}
          alt="Micra"
          style={{ width: "45%", marginTop: "-15rem" }}
        />
        <img
          src={img6_2}
          alt="Micra"
          style={{ width: "45%", marginTop: "15rem" }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img6_3}
          alt="Micra"
          style={{ width: "90%", marginRight: "auto" }}
        />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default Micra
