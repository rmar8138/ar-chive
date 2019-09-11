import { graphql } from "gatsby"
import React, { Fragment } from "react"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const RiseToUbiquity = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="03/Rise To Ubiquity">
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <p>
          A solo exhibition by Rowland Reyes Martinez, Rise To Ubiquity brought
          light to the unnoticed, the serendipitous encounters and daily
          occurrences within his landscape.
        </p>
      </Fragment>
      <Fragment>
        <p>
          ar-chive curated and produced the exhibition held on 15 February 2019
          at 9 Ryder Street, Darlinghurst in Sydney. We also designed exhibition
          posters, his self titled retrospective publication, catalogue, show
          description flyer and website to accompany the exhibition.
        </p>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[3].node.childImageSharp.fluid}
            style={{ width: "40%", height: "auto" }}
            alt="Rise to Ubiquity"
          />
          <Img
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
            style={{ width: "40%", height: "auto" }}
            alt="Rise to Ubiquity"
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[5].node.childImageSharp.fluid}
            style={{ width: "40%", height: "auto" }}
            alt="Rise to Ubiquity"
          />
          <Img
            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
            style={{ width: "40%", height: "auto" }}
            alt="Rise to Ubiquity"
          />
        </figure>
      </Fragment>
      <Fragment>
        <p>Video Recap</p>
      </Fragment>
      <Fragment>
        <p>Rise to Ubiquity video</p>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "45%" }}
          />
          <Img
            fluid={data.allFile.edges[8].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "30%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[9].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[10].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[11].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </figure>
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="03/Rise To Ubiquity">
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
          />
        </figure>
      </Fragment>
      <Fragment>
        <p>
          A solo exhibition by Rowland Reyes Martinez, Rise To Ubiquity brought
          light to the unnoticed, the serendipitous encounters and daily
          occurrences within his landscape.
        </p>
      </Fragment>
      <Fragment>
        <p>
          ar-chive curated and produced the exhibition held on 15 February 2019
          at 9 Ryder Street, Darlinghurst in Sydney. We also designed exhibition
          posters, his self titled retrospective publication, catalogue, show
          description flyer and website to accompany the exhibition.
        </p>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "100%", marginRight: "0rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "100%", marginRight: "0rem" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Img
            fluid={data.allFile.edges[3].node.childImageSharp.fluid}
            style={{ width: "100%", marginRight: "0rem" }}
            alt="Rise to Ubiquity"
          />
          <Img
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
            style={{ width: "100%", marginRight: "0rem" }}
            alt="Rise to Ubiquity"
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure style={{ display: "flex", flexDirection: "column" }}>
          <Img
            fluid={data.allFile.edges[5].node.childImageSharp.fluid}
            style={{ width: "100%", marginRight: "0rem" }}
            alt="Rise to Ubiquity"
          />
          <Img
            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
            style={{ width: "100%", marginRight: "0rem" }}
            alt="Rise to Ubiquity"
          />
        </figure>
      </Fragment>
      <Fragment>
        <p>Video Recap</p>
      </Fragment>
      <Fragment>
        <p>Rise to Ubiquity video</p>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "80%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[8].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "80%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[9].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "100%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[10].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "100%" }}
          />
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <Img
            fluid={data.allFile.edges[11].node.childImageSharp.fluid}
            alt="Rise to Ubiquity"
            style={{ width: "100%" }}
          />
        </figure>
      </Fragment>
    </MobileProjectPageLayout>
  )

export default RiseToUbiquity

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "web/rise-to-ubiquity" } }) {
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
