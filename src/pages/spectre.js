import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const Spectre = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="08/Spectre">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Spectre Front Cover"
          style={{
            marginLeft: "40%",
            width: "35%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
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
  ) : (
    <MobileProjectPageLayout heading="08/Spectre">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Spectre Front Cover"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
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
  )

export default Spectre

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/spectre" } }) {
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
