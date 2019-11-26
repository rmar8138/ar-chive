import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const PigalleTokyo = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Pigalle Tokyo">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "30rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "30rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "30rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "30rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Pigalle Tokyo">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "45%", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "45%", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "45%", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Pigalle Tokyo"
            style={{ width: "45%", marginLeft: "1rem" }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default PigalleTokyo

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/pigalle-tokyo/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/pigalle-tokyo/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/pigalle-tokyo/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/pigalle-tokyo/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/pigalle-tokyo/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
