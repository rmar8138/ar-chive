import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Spectre = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Spectre">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{
              marginLeft: "40%",
              width: "50%",
              minWidth: "30rem",
              maxWidth: "50rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Spectre Back Cover"
            style={{
              marginLeft: "40%",
              width: "50%",
              minWidth: "30rem",
              maxWidth: "50rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            Through all of life’s trials and tribulations, triumphs and
            betrayals we find ourselves moving continent to continent, catching
            glimpses of the humble story led by APOLLO4OOO.
          </p>
        </Fragment>
        <Fragment>
          <p>
            <span>
              ‘Spectre’ is the debut release by APOLLO4OOO, an 8-track EP with a
              groove and energy that keeps you moving and flowing to a diverse
              range of lyrical and vocal compositions.
            </span>
            <span>
              ar–chive pieced together the elements that would give this project
              a lens and platform to be visually realised.
            </span>
          </p>
        </Fragment>
        <Fragment>
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/2JHXbGxWVzM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Spectre">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Spectre Front Cover"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              Through all of life’s trials and tribulations, triumphs and
              betrayals we find ourselves moving continent to continent,
              catching glimpses of the humble story led by APOLLO4OOO.
            </p>
            <p>
              ‘Spectre’ is the debut release by APOLLO4OOO, an 8-track EP with a
              groove and energy that keeps you moving and flowing to a diverse
              range of lyrical and vocal compositions.
            </p>
            <p>
              ar–chive pieced together the elements that would give this project
              a lens and platform to be visually realised.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2JHXbGxWVzM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default Spectre

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/spectre/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/spectre/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
