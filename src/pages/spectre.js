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
              width: "50%",
              minWidth: "30rem",
              maxWidth: "50rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Spectre Back Cover"
            style={{
              marginLeft: "40%",
              width: "50%",
              minWidth: "30rem",
              maxWidth: "50rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>Description</p>
        </Fragment>
        <Fragment>
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/2JHXbGxWVzM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
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
          <iframe
            style={{ marginBottom: "6rem" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2JHXbGxWVzM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
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
