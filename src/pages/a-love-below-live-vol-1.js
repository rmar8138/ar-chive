import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from "@quentin-sommer/react-useragent"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const ALoveBelow = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="a Love Below: Live! Vol. 1">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
              alt="Poster artwork"
            />
          </figure>
        </Fragment>
        <Fragment>
          <div>
            <p>
              <a
                href="https://www.youtube.com/watch?v=cRD46ww3Uv8&t=2329s"
                target="_blank"
                style={{
                  zIndex: "100000",
                  position: "relative",
                  color: "rgba(39, 41, 99)",
                }}
              >
                a Love Below: Live!
              </a>{" "}
              From Coolmac Cafe is the first installment of live beats and
              painting by a Love Below - a platform dedicated to building and
              showcasing artists to local Australian and global communities.
            </p>{" "}
            <p>
              With a diverse range of beat makers and artists involved, the
              challenge was to create a uniform branding that would translate
              the sound scapes and art processes for this event.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <div>
            <p>
              To represent this, ar–chive designed collage inspired shapes with
              free form hand-written typography in addition with the video live
              recap of the event.
            </p>{" "}
            <p>
              This event brought awareness to the Kirribilli community with
              customers of Coolmac Cafe and surrounding pedestrians engaged and
              involved in the process of the artists.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Rowland and Angela painting"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "70rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure
            style={{ justifyContent: "flex-start", paddingLeft: "2.5rem" }}
          >
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Live beat set and painting in process"
              style={{
                width: "30%",
                minWidth: "15rem",
                maxWidth: "35rem",
                marginRight: "1rem",
              }}
            />
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Live beat set and painting in process"
              style={{
                width: "30%",
                minWidth: "15rem",
                maxWidth: "35rem",
                marginLeft: "1rem",
              }}
            />
          </figure>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="a Love Below: Live! Vol. 1">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="Poster artwork"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <div>
            <p>
              <a
                href="https://www.youtube.com/watch?v=cRD46ww3Uv8&t=2329s"
                target="_blank"
                style={{
                  zIndex: "100000",
                  position: "relative",
                  color: "rgba(39, 41, 99)",
                }}
              >
                a Love Below: Live!
              </a>{" "}
              From Coolmac Cafe is the first installment of live beats and
              painting by a Love Below - a platform dedicated to building and
              showcasing artists to local Australian and global communities.
              With a diverse range of beat makers and artists involved, the
              challenge was to create a uniform branding that would translate
              the sound scapes and art processes for this event.
            </p>
            <p>
              With a diverse range of beat makers and artists involved, the
              challenge was to create a uniform branding that would translate
              the sound scapes and art processes for this event.
            </p>
            <p>
              To represent this, ar–chive designed collage inspired shapes with
              free form hand-written typography in addition with the video live
              recap of the event.
            </p>
            <p>
              This event brought awareness to the Kirribilli community with
              customers of Coolmac Cafe and surrounding pedestrians engaged and
              involved in the process of the artists.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Rowland and Angela painting"
              style={{ width: "100%" }}
            />
            {/* <figcaption>Photos by Naylin Aung</figcaption> */}
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Live beat set and painting in process"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Live beat set and painting in process"
              style={{ width: "80%", marginLeft: "auto" }}
            />
          </figure>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default ALoveBelow

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/a-love-below/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/a-love-below/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/a-love-below/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/a-love-below/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
