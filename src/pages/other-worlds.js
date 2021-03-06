import React, { Fragment } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const ImageLink = styled.a`
  width: 65%;
  display: flex;
  justify-content: center;
  z-index: 100000;
`

const MobileImageLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100000;
`

const OtherWorlds = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Other Worlds">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Other Worlds Front Cover"
            style={{
              marginLeft: "40%",
              width: "40%",
              minWidth: "25rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Other Worlds Front and Back Cover"
            style={{
              width: "100%",
              minWidth: "40rem",
              maxWidth: "80rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            ‘Other Worlds’ is the debut album by Ragan Martinez. It is the
            soundtrack to a video game that doesn’t exist. He uses ambient and
            distorted sounds on loop, creating an ominous yet cathartic
            meditative release. The front cover artwork is taken from Wa Sei's
            ‘Mind Travellin’ painting.
          </p>
        </Fragment>
        <Fragment>
          <p>
            Alongside the front cover design, we art directed and created
            individual paintings for each track from the album.
          </p>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=XPEO_mBuKJU"
            target="_blank"
          >
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Main Menu"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=xTnDtb7vn-s"
            target="_blank"
          >
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="By the Jetty"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=fGKyfgy7A2s"
            target="_blank"
          >
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Planetarium"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=6i-fwVmpUs0"
            target="_blank"
          >
            <Img
              fluid={data.img5.childImageSharp.fluid}
              alt="Secret Corridor"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=6XT8REGl4g0"
            target="_blank"
          >
            <Img
              fluid={data.img6.childImageSharp.fluid}
              alt="Holographic Tunnels"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=S3H9iS9AGkk"
            target="_blank"
          >
            <Img
              fluid={data.img7.childImageSharp.fluid}
              alt="Gravity Garden"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=S6iNNYZAPOc"
            target="_blank"
          >
            <Img
              fluid={data.img8.childImageSharp.fluid}
              alt="Neon Room"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=rCSkoxz0wKE"
            target="_blank"
          >
            <Img
              fluid={data.img9.childImageSharp.fluid}
              alt="Abandoned Save Fountain"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=QXkfNjc1WN8"
            target="_blank"
          >
            <Img
              fluid={data.img10.childImageSharp.fluid}
              alt="Church by Fireflies"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
        <Fragment>
          <ImageLink
            href="https://www.youtube.com/watch?v=B94Xmzibvog"
            target="_blank"
          >
            <Img
              fluid={data.img11.childImageSharp.fluid}
              alt="Hidden Credits"
              style={{
                width: "100%",
                minWidth: "40rem",
                maxWidth: "80rem",
              }}
            />
          </ImageLink>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Other Worlds">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Other Worlds Front Cover"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Other Worlds Front and Back Cover"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              ‘Other Worlds’ is the debut album by Ragan Martinez. It is the
              soundtrack to a video game that doesn’t exist. He uses ambient and
              distorted sounds on loop, creating an ominous yet cathartic
              meditative release. The front cover artwork is taken from Wa Sei's
              ‘Mind Travellin’ painting.
            </p>
            <p>
              Alongside the front cover design, we art directed and created
              individual paintings for each track from the album.{" "}
            </p>
          </div>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=XPEO_mBuKJU"
            target="_blank"
          >
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Main Menu"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=xTnDtb7vn-s"
            target="_blank"
          >
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="By the Jetty"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=fGKyfgy7A2s"
            target="_blank"
          >
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Planetarium"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=6i-fwVmpUs0"
            target="_blank"
          >
            <Img
              fluid={data.img5.childImageSharp.fluid}
              alt="Secret Corridor"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=6XT8REGl4g0"
            target="_blank"
          >
            <Img
              fluid={data.img6.childImageSharp.fluid}
              alt="Holographic Tunnels"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=S3H9iS9AGkk"
            target="_blank"
          >
            <Img
              fluid={data.img7.childImageSharp.fluid}
              alt="Gravity Garden"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=S6iNNYZAPOc"
            target="_blank"
          >
            <Img
              fluid={data.img8.childImageSharp.fluid}
              alt="Neon Room"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=rCSkoxz0wKE"
            target="_blank"
          >
            <Img
              fluid={data.img9.childImageSharp.fluid}
              alt="Abandoned Save Fountain"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=QXkfNjc1WN8"
            target="_blank"
          >
            <Img
              fluid={data.img10.childImageSharp.fluid}
              alt="Church by Fireflies"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
        <Fragment>
          <MobileImageLink
            href="https://www.youtube.com/watch?v=B94Xmzibvog"
            target="_blank"
          >
            <Img
              fluid={data.img11.childImageSharp.fluid}
              alt="Hidden Credits"
              style={{
                width: "100%",
              }}
            />
          </MobileImageLink>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default OtherWorlds

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/other-worlds/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/other-worlds/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/other-worlds/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/other-worlds/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/other-worlds/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/other-worlds/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/other-worlds/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/other-worlds/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/other-worlds/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/other-worlds/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/other-worlds/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/other-worlds/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
