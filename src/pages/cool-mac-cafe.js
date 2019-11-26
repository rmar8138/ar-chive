import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from "@quentin-sommer/react-useragent"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const CoolMacCafe = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Cool Mac Cafe">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and
            Japanese inspired dishes for locals and tourists alike. We were
            commissioned to created a permanent mural for their six metre
            feature wall that would brighten up the space.
          </p>
        </Fragment>
        <Fragment>
          <p>
            We wanted to produce a collaged piece that would resonate with the
            locals and therefore drew from the structural features of
            Kirribilli, highlighting the often overlooked details.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "40rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "40rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "70%", minWidth: "45rem" }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Cool Mac Cafe">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and
            Japanese inspired dishes for locals and tourists alike. We were
            commissioned to created a permanent mural for their six metre
            feature wall that would brighten up the space.
          </p>
        </Fragment>
        <Fragment>
          <p>
            We wanted to produce a collaged piece that would resonate with the
            locals and therefore drew from the structural features of
            Kirribilli, highlighting the often overlooked details.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
            />
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "-1rem",
            }}
          >
            <Img
              fluid={data.img5.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{
                width: "40%",
                marginBottom: "2rem",
                alignSelf: "center",
              }}
            />
            <Img
              className="img2"
              fluid={data.img6.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{ width: "60%", alignSelf: "flex-end" }}
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
              fluid={data.img7.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{
                marginBottom: "2rem",
                marginRight: "2rem",
                alignSelf: "flex-start",
                width: "60%",
              }}
            />
            <Img
              className="img4"
              fluid={data.img8.childImageSharp.fluid}
              alt="Cool Mac Cafe"
              style={{
                width: "40%",
                marginLeft: "2rem",
                alignSelf: "flex-end",
              }}
            />
          </figure>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default CoolMacCafe

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/cool-mac-cafe/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/cool-mac-cafe/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/cool-mac-cafe/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/cool-mac-cafe/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/cool-mac-cafe/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/cool-mac-cafe/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/cool-mac-cafe/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/cool-mac-cafe/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/cool-mac-cafe/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
