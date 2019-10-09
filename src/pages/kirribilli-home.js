import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from '@quentin-sommer/react-useragent'
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const KirribilliHome = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="09/Kirribilli Home">
        <Fragment>
          <div style={{ display: "flex", width: "100%", marginRight: "auto" }}>
            <Img
              fluid={data.allFile.edges[11].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "50%",
                marginRight: "2rem",
              }}
            />
            <Img
              fluid={data.allFile.edges[4].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "25%",
              }}
            />
          </div>
        </Fragment>
        <Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Img
              fluid={data.allFile.edges[3].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "30%",
                minWidth: "20rem",
                maxWidth: "45rem",
                marginRight: "2rem",
              }}
            />
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt=""
              style={{ width: "30%", minWidth: "20rem", maxWidth: "45rem" }}
            />
          </div>
        </Fragment>
        <Fragment>
          <p>
            Following from our mural at Cool Mac Cafe, one of their local
            customers approached us to create two bespoke artworks for their home.
            With the process and aesthetic drawing from our previous work, we
            explored Kirribilli again taking note of ephemeral shadow lines
            against concrete existing structures.
          </p>
        </Fragment>
        <Fragment>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "25%",
                minWidth: "13rem",
                maxWidth: "30rem",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.allFile.edges[8].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "25%",
                minWidth: "13rem",
                maxWidth: "30rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.allFile.edges[7].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "25%",
                minWidth: "13rem",
                maxWidth: "30rem",
                marginLeft: "1rem",
              }}
            />
          </div>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[10].node.childImageSharp.fluid}
            alt=""
            style={{ width: "30%", marginRight: "1rem" }}
          />
          <Img
            fluid={data.allFile.edges[9].node.childImageSharp.fluid}
            alt=""
            style={{ width: "35%", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <div style={{ display: "flex", marginRight: "auto", width: "100%" }}>
            <Img
              fluid={data.allFile.edges[2].node.childImageSharp.fluid}
              alt=""
              style={{
                width: "35%",
                maxWidth: "40rem",
                alignSelf: "flex-start",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.allFile.edges[5].node.childImageSharp.fluid}
              alt=""
              style={{ width: "35%", maxWidth: "40rem", marginLeft: "1rem" }}
            />
          </div>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="09/Kirribilli House">
        <Fragment>
          <Img
            fluid={data.allFile.edges[11].node.childImageSharp.fluid}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
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
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt=""
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Following from our mural at Cool Mac Cafe, one of their local
            customers approached us to create two bespoke artworks for their home.
            With the process and aesthetic drawing from our previous work, we
            explored Kirribilli again taking note of ephemeral shadow lines
            against concrete existing structures.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            alt=""
            style={{ width: "60%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[8].node.childImageSharp.fluid}
            alt=""
            style={{ width: "60%", marginLeft: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
            alt=""
            style={{ width: "60%", marginLeft: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[10].node.childImageSharp.fluid}
            alt=""
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[9].node.childImageSharp.fluid}
            alt=""
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt=""
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[5].node.childImageSharp.fluid}
            alt=""
            style={{ width: "100%" }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default KirribilliHome

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/kirribilli-home" } }) {
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
