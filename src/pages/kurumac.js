import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from "@quentin-sommer/react-useragent"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Kurumac = ({ data }) => (
  <Fragment>
    <UserAgent computer tablet>
      <ProjectPageLayout heading="11/Kurumac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt=""
            style={{
              width: "30%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            Kurumac is a newly opened cafe on Addison Rd in Marrickville serving
            an assortment of Japanese comfort foods. We were approached with the
            brief to highlight ’old and new Japan’. We were in Tokyo at the time
            of the conceptualising stage and what we found was that even after
            visiting this city numerous times, the daily flow and energy still
            spoke to us.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt=""
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
            alt=""
            style={{
              width: "60%",
              minWidth: "40rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
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
            alt=""
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
      <MobileProjectPageLayout heading="11/Kurumac">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt=""
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            Kurumac is a newly opened cafe on Addison Rd in Marrickville serving
            an assortment of Japanese comfort foods. We were approached with the
            brief to highlight ’old and new Japan’. We were in Tokyo at the time
            of the conceptualising stage and what we found was that even after
            visiting this city numerous times, the daily flow and energy still
            spoke to us.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt=""
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
            alt=""
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt=""
            style={{
              width: "20%",
              minWidth: "20rem",
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
            alt=""
            style={{
              width: "100%",
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
  }
`
