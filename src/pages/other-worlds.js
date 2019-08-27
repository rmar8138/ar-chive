import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const img1 = require("../assets/images/web/other-worlds/1.png")
const img2 = require("../assets/images/web/other-worlds/2.png")
const img3 = require("../assets/images/web/other-worlds/3.png")
const img4 = require("../assets/images/web/other-worlds/4.png")
const img5 = require("../assets/images/web/other-worlds/5.png")
const img6 = require("../assets/images/web/other-worlds/6.png")
const img7 = require("../assets/images/web/other-worlds/7.png")
const img8 = require("../assets/images/web/other-worlds/8.png")
const img9 = require("../assets/images/web/other-worlds/9.png")
const img10 = require("../assets/images/web/other-worlds/10.png")
const img11 = require("../assets/images/web/other-worlds/11.png")

const OtherWorlds = () =>
  isBrowser ? (
    <ProjectPageLayout heading="10/Other Worlds">
      <Fragment>
        <img
          src={img1}
          alt="Other Worlds Front Cover"
          style={{
            marginLeft: "40%",
            width: "35%",
            minWidth: "25rem",
            maxWidth: "40rem",
          }}
        />
      </Fragment>
      <Fragment>
        <p>
          ‘Other Worlds’ is the debut album by Ragan Martinez. He uses ambient
          and distorted sounds on loop, creating an ominous yet carthatic
          meditative release. It is the soundtrack to a video game that doesn’t
          exist. We art directed and designed the cover as well as individual
          paintings for each track of the album.
        </p>
      </Fragment>
      {/* {art.map(song => (
        <Fragment>
          <img
            src={song.img}
            alt={song.alt}
            style={{
              width: "70%",
              minWidth: "40rem",
              maxWidth: "80rem",
            }}
          />
        </Fragment>
      ))} */}
      <Fragment>
        <img
          src={img2}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img3}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img4}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img5}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img6}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img7}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img8}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img9}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img10}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <img
          src={img11}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="10/Other Worlds" />
  )

export default OtherWorlds
