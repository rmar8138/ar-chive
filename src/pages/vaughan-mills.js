import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const VaughanMills = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="07/Vaughan Mills">
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "50%", minWidth: "35rem", maxWidth: "45rem" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Vaughan Mills is a stylist who we have worked closely with across a
          variety of creative projects. The following series of images are from
          recent photoshoots featuring his vintage collection.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "25rem",
            maxWidth: "45rem",
            marginLeft: "20%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "45%",
            minWidth: "40rem",
            maxWidth: "60rem",
            marginLeft: "30%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[14].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "40%", minWidth: "25rem", marginRight: "2rem" }}
        />
        <Img
          fluid={data.allFile.edges[13].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "30%", minWidth: "20rem", marginLeft: "2rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[12].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "40%",
            minWidth: "30rem",
            maxWidth: "50rem",
            marginLeft: "30%",
            marginTop: "10%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[11].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginRight: "2rem",
          }}
        />
        <Img
          fluid={data.allFile.edges[10].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginLeft: "2rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[9].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "35%", minWidth: "30rem", maxWidth: "50rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[8].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[7].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "30%", minWidth: "20rem", marginRight: "2rem" }}
        />
        <Img
          fluid={data.allFile.edges[6].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "20%", minWidth: "13.33rem", marginLeft: "2rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginRight: "2rem",
          }}
        />
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginLeft: "2rem",
          }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="07/Vaughan Mills">
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Vaughan Mills is a stylist who we have worked closely with across a
          variety of creative projects. The following series of images are from
          recent photoshoots featuring his vintage collection.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginLeft: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[14].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[13].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[12].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[11].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginLeft: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[10].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[9].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[8].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[7].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[6].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "80%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "80%" }}
        />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default VaughanMills

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/vaughan-mills" } }) {
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
