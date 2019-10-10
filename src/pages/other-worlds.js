import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const OtherWorlds = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="10/Other Worlds">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
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
            meditative release. It is the soundtrack to a video game that
            doesn’t exist. We art directed and designed the cover as well as
            individual paintings for each track of the album.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
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
            fluid={data.img3.childImageSharp.fluid}
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
            fluid={data.img4.childImageSharp.fluid}
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
            fluid={data.img5.childImageSharp.fluid}
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
            fluid={data.img6.childImageSharp.fluid}
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
            fluid={data.img7.childImageSharp.fluid}
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
            fluid={data.img8.childImageSharp.fluid}
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
            fluid={data.img9.childImageSharp.fluid}
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
            fluid={data.img10.childImageSharp.fluid}
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
            fluid={data.img11.childImageSharp.fluid}
            alt=""
            style={{
              width: "70%",
              minWidth: "40rem",
              maxWidth: "80rem",
            }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="10/Other Worlds">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
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
            meditative release. It is the soundtrack to a video game that
            doesn’t exist. We art directed and designed the cover as well as
            individual paintings for each track of the album.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default OtherWorlds

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/other-worlds/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/other-worlds/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/other-worlds/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/other-worlds/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/other-worlds/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/other-worlds/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/other-worlds/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/other-worlds/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/other-worlds/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/other-worlds/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/other-worlds/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
