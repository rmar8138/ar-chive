import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { UserAgent } from '@quentin-sommer/react-useragent'
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const ALoveBelow = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="01/a Love Below: Live! Vol. 1">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <p>
            Poster for a Love Below: Live! Volume 1, an afternoon of original
            beats and painting created live from Coolmac Cafe in Kirribilli.
            Featuring wa*sei, Angela Tam, Kase Avila, Montel Blac and Apollo 4000.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 2"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "70rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure style={{ justifyContent: "flex-start", paddingLeft: "2.5rem" }}>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 3"
              style={{ width: "30%", minWidth: "15rem", maxWidth: "35rem", marginRight: "1rem" }}
            />
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 4"
              style={{ width: "30%", minWidth: "15rem", maxWidth: "35rem", marginLeft: "1rem" }}
            />
          </figure>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="01/a Love Below: Live! Vol. 1">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 1"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <p>
            Poster for a Love Below: Live! Volume 1, an afternoon of original
            beats and painting created live from Coolmac Cafe in Kirribilli.
            Featuring wa*sei, Angela Tam, Kase Avila, Montel Blac and Apollo 4000.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 2"
              style={{ width: "100%" }}
            />
            {/* <figcaption>Photos by Naylin Aung</figcaption> */}
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 3"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="a Love Below: Live! Vol. 1 - 4"
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
