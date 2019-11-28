import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from "@quentin-sommer/react-useragent"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const KirribilliHome = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Kirribilli Home">
        <Fragment>
          <div style={{ display: "flex", width: "100%", marginRight: "auto" }}>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Living room piece and detail"
              style={{
                width: "50%",
                marginRight: "2rem",
              }}
            />
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Living room piece and detail"
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
              fluid={data.img4.childImageSharp.fluid}
              alt="Details of living room piece"
              style={{
                width: "30%",
                minWidth: "20rem",
                maxWidth: "45rem",
                marginRight: "2rem",
              }}
            />
            <Img
              fluid={data.img5.childImageSharp.fluid}
              alt="Details of living room piece"
              style={{ width: "30%", minWidth: "20rem", maxWidth: "45rem" }}
            />
          </div>
        </Fragment>
        <Fragment>
          <p>
            Following from our mural at Cool Mac Cafe, one of their local
            customers approached us to create two bespoke artworks for their
            home. With the process and aesthetic drawing from our previous work,
            we explored Kirribilli again taking note of ephemeral shadow lines
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
              fluid={data.img6.childImageSharp.fluid}
              alt="Photographs of surrounding Kirribilli architecture used in the artwork"
              style={{
                width: "25%",
                minWidth: "13rem",
                maxWidth: "30rem",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.img7.childImageSharp.fluid}
              alt="Photographs of surrounding Kirribilli architecture used in the artwork"
              style={{
                width: "25%",
                minWidth: "13rem",
                maxWidth: "30rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.img8.childImageSharp.fluid}
              alt="Photographs of surrounding Kirribilli architecture used in the artwork"
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
            fluid={data.img9.childImageSharp.fluid}
            alt="Stairwell piece and detail"
            style={{ width: "30%", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt="Stairwell piece and detail"
            style={{ width: "35%", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <div style={{ display: "flex", marginRight: "auto", width: "100%" }}>
            <Img
              fluid={data.img11.childImageSharp.fluid}
              alt="Details of stairwell piece"
              style={{
                width: "35%",
                maxWidth: "40rem",
                alignSelf: "flex-start",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.img12.childImageSharp.fluid}
              alt="Details of stairwell piece"
              style={{ width: "35%", maxWidth: "40rem", marginLeft: "1rem" }}
            />
          </div>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Kirribilli House">
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Living room piece and detail"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Living room piece and detail"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Details of living room piece"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Details of living room piece"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Following from our mural at Cool Mac Cafe, one of their local
            customers approached us to create two bespoke artworks for their
            home. With the process and aesthetic drawing from our previous work,
            we explored Kirribilli again taking note of ephemeral shadow lines
            against concrete existing structures.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Photographs of surrounding Kirribilli architecture used in the artwork"
            style={{ width: "60%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Photographs of surrounding Kirribilli architecture used in the artwork"
            style={{ width: "60%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Photographs of surrounding Kirribilli architecture used in the artwork"
            style={{ width: "60%", marginLeft: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt="Stairwell piece and detail"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt="Stairwell piece and detail"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            alt="Details of stairwell piece"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Details of stairwell piece"
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
    img2: file(relativePath: { eq: "web/kirribilli-home/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/kirribilli-home/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/kirribilli-home/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/kirribilli-home/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/kirribilli-home/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/kirribilli-home/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/kirribilli-home/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/kirribilli-home/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/kirribilli-home/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/kirribilli-home/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/kirribilli-home/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
