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
            <span>
              Situated in the northern part of the Sydney CBD, Cool Mac Cafe
              resides in the neighbouring streets of Kirribilli. They have
              cultivated a following, attracting residents to their Japanese
              inspired menu and coffee experience.{" "}
            </span>
            <span>
              We were approached to create a permanent mural for their six metre
              feature wall with the brief to brighten up the cafe space.{" "}
            </span>
          </p>
        </Fragment>
        <Fragment>
          <p>
            With Kirribilli’s strong architectural history and the owner,
            Eugene’s background in Kirribilli, we felt the need to highlight
            unique surrounding structures that we resonate with to then produce
            a collaged mural for the local customers. As we drew from minimal
            frames of these buildings, the completed wall became an invitation
            to locals to see their familiar area with a new found curiosity and
            delight.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Detail of mural"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "40rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Detail of mural"
            style={{
              width: "30%",
              minWidth: "20rem",
              maxWidth: "40rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img9.childImageSharp.fluid}
              alt="Process images"
              style={{ width: "70%", minWidth: "40rem", zIndex: "1000" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Process images"
            style={{ width: "70%", minWidth: "40rem", maxWidth: "70rem" }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Cool Mac Cafe">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Full mural"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              Situated in the northern part of the Sydney CBD, Cool Mac Cafe
              resides in the neighbouring streets of Kirribilli. They have
              cultivated a following, attracting residents to their Japanese
              inspired menu and coffee experience.{" "}
            </p>
            <p>
              We were approached to create a permanent mural for their six metre
              feature wall with the brief to brighten up the cafe space.{" "}
            </p>
            <p>
              With Kirribilli’s strong architectural history and the owner,
              Eugene’s background in Kirribilli, we felt the need to highlight
              unique surrounding structures that we resonate with to then
              produce a collaged mural for the local customers. As we drew from
              minimal frames of these buildings, the completed wall became an
              invitation to locals to see their familiar area with a new found
              curiosity and delight.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Detail of mural"
              style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
            />
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Detail of mural"
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
              alt="Process images"
              style={{
                width: "40%",
                marginBottom: "2rem",
                alignSelf: "center",
              }}
            />
            <Img
              className="img2"
              fluid={data.img6.childImageSharp.fluid}
              alt="Process images"
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
              alt="Process images"
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
              alt="Process images"
              style={{
                width: "40%",
                marginLeft: "2rem",
                alignSelf: "flex-end",
              }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Full mural"
            style={{ width: "100%" }}
          />
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
