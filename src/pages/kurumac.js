import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from "@quentin-sommer/react-useragent"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Kurumac = ({ data }) => (
  <Fragment>
    <UserAgent computer tablet>
      <ProjectPageLayout heading="Kurumac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Detail of mural"
            style={{
              width: "30%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            <span>
              Kurumac is a cafe on Addison Rd in Marrickville serving Campos
              coffee, an assortment of Japanese comfort food by Jun Okamatsu.
            </span>
            <span>
              We were approached by owners Eugene Leung and Dika Prianata with a
              brief to highlight ‘old and new Japan’.
            </span>
          </p>
        </Fragment>
        <Fragment>
          <p>
            We were in Tokyo at the time of the conceptualising stage and what
            we found was that even after visiting this city numerous times, the
            daily flow and energy still spoke to us.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Mural in situ"
            style={{
              width: "60%",
              minWidth: "40rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            We found beauty in the balance of efficiency and convenience... The
            overwhelming feeling of visiting a Konbini like 100yen Lawson to
            searching for the perfect drink of past trips - the white Kirin
            vending machine with lemon water and then peering into minimal
            signage storefronts - stumbling upon the most comforting bowl of
            Tsukemen.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Process sketch"
            style={{
              width: "50%",
              minWidth: "40rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt="Painting process"
            style={{
              width: "80%",
              minWidth: "40rem",
              maxWidth: "80rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            This translation of simplicity that the Japanese lifestyle uplifts
            would take us on a journey of warm flavours and colours that we know
            and love. And it’s in this exact transparency that is instilled in
            the beauty of Kurumac.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Finished artwork at Kurumac"
            style={{
              width: "80%",
              minWidth: "20rem",
              maxWidth: "100rem",
              marginLeft: "auto",
            }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Kurumac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Detail of mural"
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              Kurumac is a cafe on Addison Rd in Marrickville serving Campos
              coffee, an assortment of Japanese comfort food by Jun Okamatsu.
            </p>
            <p>
              We were approached by owners Eugene Leung and Dika Prianata with a
              brief to highlight ‘old and new Japan’.
            </p>
            <p>
              We were in Tokyo at the time of the conceptualising stage and what
              we found was that even after visiting this city numerous times,
              the daily flow and energy still spoke to us.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Mural in situ"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            We found beauty in the balance of efficiency and convenience... The
            overwhelming feeling of visiting a Konbini like 100yen Lawson to
            searching for the perfect drink of past trips - the white Kirin
            vending machine with lemon water and then peering into minimal
            signage storefronts - stumbling upon the most comforting bowl of
            Tsukemen.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Process sketch"
            style={{
              width: "60%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Painting process"
            style={{
              width: "60%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Painting process"
            style={{
              width: "60%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Painting process"
            style={{
              width: "60%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Painting process"
            style={{
              width: "60%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            This translation of simplicity that the Japanese lifestyle uplifts
            would take us on a journey of warm flavours and colours that we know
            and love. And it’s in this exact transparency that is instilled in
            the beauty of Kurumac.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Finished artwork at Kurumac"
            style={{
              width: "90%",
              minWidth: "20rem",
            }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default Kurumac

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/kurumac/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/kurumac/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/kurumac/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/kurumac/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/kurumac/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/kurumac/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/kurumac/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/kurumac/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/kurumac/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
