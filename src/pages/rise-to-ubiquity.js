import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"

const main = require(`../assets/images/web/3.png`)
const img1 = require(`../assets/images/web/rise-to-ubiquity/1.png`)
const img2 = require(`../assets/images/web/rise-to-ubiquity/2.png`)
const img3_1 = require(`../assets/images/web/rise-to-ubiquity/3-1.png`)
const img3_2 = require(`../assets/images/web/rise-to-ubiquity/3-2.png`)
const img4_1 = require(`../assets/images/web/rise-to-ubiquity/4-1.png`)
const img4_2 = require(`../assets/images/web/rise-to-ubiquity/4-2.png`)
const img5_1 = require(`../assets/images/web/rise-to-ubiquity/5-1.png`)
const img5_2 = require(`../assets/images/web/rise-to-ubiquity/5-2.png`)
const img6 = require(`../assets/images/web/rise-to-ubiquity/6.png`)
const img7 = require(`../assets/images/web/rise-to-ubiquity/7.png`)
const img8 = require(`../assets/images/web/rise-to-ubiquity/8.png`)

const RiseToUbiquity = () => (
  <ProjectPageLayout heading="03/Rise To Ubiquity">
    <Fragment>
      <figure>
        <img src={main} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <p>
        A solo exhibition by Rowland Reyes Martinez, Rise To Ubiquity brought
        light to the unnoticed, the serendipitous encounters and daily
        occurrences within his landscape.
      </p>
    </Fragment>
    <Fragment>
      <p>
        ar-chive curated and produced the exhibition held on 15 February 2019 at
        9 Ryder Street, Darlinghurst in Sydney. We also designed exhibition
        posters, his self titled retrospective publication, catalogue, show
        description flyer and website to accompany the exhibition.
      </p>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img1} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img2} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img
          style={{ width: "40%", height: "auto" }}
          src={img3_1}
          alt="Rise to Ubiquity"
        />
        <img
          style={{ width: "40%", height: "auto" }}
          src={img3_2}
          alt="Rise to Ubiquity"
        />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img
          style={{ width: "40%", height: "auto" }}
          src={img4_1}
          alt="Rise to Ubiquity"
        />
        <img
          style={{ width: "40%", height: "auto" }}
          src={img4_2}
          alt="Rise to Ubiquity"
        />
      </figure>
    </Fragment>
    <Fragment>
      <p>Video Recap</p>
    </Fragment>
    <Fragment>
      <p>Rise to Ubiquity video</p>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img5_1} alt="Rise to Ubiquity" />
        <img src={img5_2} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img6} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img7} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
    <Fragment>
      <figure>
        <img src={img8} alt="Rise to Ubiquity" />
      </figure>
    </Fragment>
  </ProjectPageLayout>
)

export default RiseToUbiquity
