import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Spectre = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="08/Spectre">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{
              marginLeft: "40%",
              width: "35%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Spectre Back Cover"
            style={{
              marginLeft: "40%",
              width: "35%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>Description</p>
        </Fragment>
        <Fragment>
          <p>Speak like a child mv</p>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="08/Spectre">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>Description</p>
        </Fragment>
        <Fragment>
          <p>Speak like a child mv</p>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default Spectre

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/spectre/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/spectre/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
