import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const vid1 = require(`../assets/videos/montel-blac/1.mp4`)
const vid2 = require(`../assets/videos/montel-blac/2.mp4`)

const MontelBlac = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="02/Montel Blac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Montel Blac EP Cover"
            style={{ maxWidth: "50%", minWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Montel’s self-titled debut EP sonically melds his style of
            off-kilter production, rhythmic vocal chops and samples to create a
            body of work that delivers a short insight into his world. ar–chive
            was briefed to give this project its visual anchor.
          </p>
        </Fragment>
        <Fragment>
          <p>
            We approached this project with the intention to create an artwork
            that fuses the nature of Montel’s dark hitting sound scapes to
            dictate our intuitive mark making approach putting ink onto paper.
            We experimented with a camera and a light source to sample and
            manipulate the drawing into its finished form.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <video loop muted controls="controls">
              <source src={vid1} type="video/mp4" />
            </video>
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <video loop muted controls="controls">
              <source src={vid2} type="video/mp4" />
            </video>
          </figure>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="02/Montel Blac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Montel Blac"
            style={{ maxWidth: "50%", minWidth: "30rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Montel’s self-titled debut EP sonically melds his style of
            off-kilter production, rhythmic vocal chops and samples to create a
            body of work that delivers a short insight into his world. ar–chive
            was briefed to give this project its visual anchor.
          </p>
        </Fragment>
        <Fragment>
          <p>
            We approached this project with the intention to create an artwork
            that fuses the nature of Montel’s dark hitting sound scapes to
            dictate our intuitive mark making approach putting ink onto paper.
            We experimented with a camera and a light source to sample and
            manipulate the drawing into its finished form.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <video loop muted controls="controls">
              <source
                src={vid1}
                type="video/mp4"
                style={{ maxWidth: "50%", minWidth: "20rem" }}
              />
            </video>
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <video loop muted controls="controls">
              <source
                src={vid2}
                type="video/mp4"
                style={{ maxWidth: "50%", minWidth: "20rem" }}
              />
            </video>
          </figure>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default MontelBlac

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/montel-blac/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
