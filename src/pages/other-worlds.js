import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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

const OtherWorlds = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="10/Other Worlds">
      <Fragment>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
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
      <Fragment>
        <Img
          fluid={data.allFile.edges[9].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[6].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[10].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[8].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[7].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "70%",
            minWidth: "40rem",
            maxWidth: "80rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
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
    <MobileProjectPageLayout heading="10/Other Worlds">
      <Fragment>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Other Worlds Front Cover"
          style={{
            width: "100%",
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
      <Fragment>
        <Img
          fluid={data.allFile.edges[9].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[6].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[10].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[8].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[7].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default OtherWorlds

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/other-worlds" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
