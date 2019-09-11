import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const PigalleTokyo = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "30rem" }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="06/Pigalle Tokyo">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "45%", marginRight: "1.5rem" }}
        />
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "45%", marginLeft: "1.5rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "45%", marginRight: "1.5rem" }}
        />
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Pigalle Tokyo"
          style={{ width: "45%", marginLeft: "1.5rem" }}
        />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default PigalleTokyo

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/pigalle-tokyo" } }) {
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
