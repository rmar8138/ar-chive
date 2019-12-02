import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const MontelBlac = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Montel Blac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Montel front cover design"
            style={{ maxWidth: "50%", minWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            <span>
              Montel’s self-titled debut EP sonically melds his style of
              off-kilter production, rhythmic vocal chops and samples to create
              a body of work that delivers a short insight into his world.{" "}
            </span>
            <span>
              ar–chive was briefed to give this project its visual anchor.
            </span>
          </p>
        </Fragment>
        <Fragment>
          <p>
            <span>
              We approached this project with the intention to create an artwork
              that fuses the nature of Montel’s dark hitting sound scapes to
              dictate our intuitive mark making approach putting ink onto paper.
            </span>
            <span>
              We experimented with a camera and a light source to sample and
              manipulate the drawing into its finished form.
            </span>
          </p>
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/376778771"
            width="640"
            height="640"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/376778663"
            width="640"
            height="640"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </Fragment>
        <Fragment>
          <p>
            We developed a 9-grid social strategy to accompany each track with
            black and white videos of an environment that gives the sound its
            visual context.
          </p>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Montel Blac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Montel front cover design"
            style={{ maxWidth: "50%", minWidth: "30rem" }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              Montel’s self-titled debut EP sonically melds his style of
              off-kilter production, rhythmic vocal chops and samples to create
              a body of work that delivers a short insight into his world.{" "}
            </p>
            <p>ar–chive was briefed to give this project its visual anchor.</p>
            <p>
              We approached this project with the intention to create an artwork
              that fuses the nature of Montel’s dark hitting sound scapes to
              dictate our intuitive mark making approach putting ink onto paper.
            </p>
            <p>
              We experimented with a camera and a light source to sample and
              manipulate the drawing into its finished form.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/376778771"
            width="640"
            height="640"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </Fragment>
        <Fragment>
          <iframe
            src="https://player.vimeo.com/video/376778663"
            width="640"
            height="640"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </Fragment>
        <Fragment>
          <p>
            We developed a 9-grid social strategy to accompany each track with
            black and white videos of an environment that gives the sound its
            visual context.
          </p>
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
