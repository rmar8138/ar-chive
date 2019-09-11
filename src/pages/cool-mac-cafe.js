import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const CoolMacCafe = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="04/Cool Mac Cafe">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and Japanese
          inspired dishes for locals and tourists alike. We were commissioned to
          created a permanent mural for their six metre feature wall that would
          brighten up the space.
        </p>
      </Fragment>
      <Fragment>
        <p>
          We wanted to produce a collaged piece that would resonate with the
          locals and therefore drew from the structural features of Kirribilli,
          highlighting the often overlooked details.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[8].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "40rem" }}
        />
        <Img
          fluid={data.allFile.edges[7].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "30%", minWidth: "20rem", maxWidth: "40rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "70%", minWidth: "45rem" }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="04/Cool Mac Cafe">
      <Fragment>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and Japanese
          inspired dishes for locals and tourists alike. We were commissioned to
          created a permanent mural for their six metre feature wall that would
          brighten up the space.
        </p>
      </Fragment>
      <Fragment>
        <p>
          We wanted to produce a collaged piece that would resonate with the
          locals and therefore drew from the structural features of Kirribilli,
          highlighting the often overlooked details.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Cool Mac Cafe"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[8].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "45%", marginTop: "-15rem" }}
          />
          <Img
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "45%", marginTop: "15rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "35%",
          }}
        >
          <Img
            className="img1"
            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ marginBottom: "2rem" }}
          />
          <Img
            className="img2"
            fluid={data.allFile.edges[5].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Img
            className="img3"
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{
              marginBottom: "2rem",
              marginLeft: "2rem",
              alignSelf: "flex-start",
            }}
          />
          <Img
            className="img4"
            fluid={data.allFile.edges[3].node.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ marginRight: "2rem", alignSelf: "flex-end" }}
          />
        </figure>
      </Fragment>
    </MobileProjectPageLayout>
  )

export default CoolMacCafe

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/cool-mac-cafe" } }) {
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
