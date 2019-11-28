import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const ACCStudioSydneyPopUp = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="ACC Studio Sydney Pop Up">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
              minWidth: "30rem",
              maxWidth: "80rem",
              marginLeft: "auto",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            ACC STUDIO is a company based in Hollywood, California. On October
            5, in collaboration with the creative direction by Vaughan Mills,
            La-Ropa was introduced to the Australian market for the first time.
            ar–chive art directed the space with the design and creation of the
            Koala artworks and digital/print poster collateral.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "40rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "40rem",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "40rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "30rem", maxWidth: "80rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "35rem",
              marginRight: "1rem",
            }}
          />
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "35rem",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "30%",
              minWidth: "15rem",
              maxWidth: "35rem",
              marginLeft: "1rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "30rem", maxWidth: "80rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img17.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
              minWidth: "40rem",
              maxWidth: "100rem",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "60%",
              minWidth: "40rem",
              maxWidth: "80rem",
              marginLeft: "auto",
            }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="ACC Studio Sydney Pop Up">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
              minWidth: "30rem",
              maxWidth: "80rem",
            }}
          />
        </Fragment>
        <Fragment>
          <p>
            ACC STUDIO is a company based in Hollywood, California. On October
            5, in collaboration with the creative direction by Vaughan Mills,
            La-Ropa was introduced to the Australian market for the first time.
            ar–chive art directed the space with the design and creation of the
            Koala artworks and digital/print poster collateral.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "100%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "65%",
              marginRight: "auto",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "65%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "65%",
              marginLeft: "auto",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img13.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img14.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img15.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
            }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img16.childImageSharp.fluid}
            alt="Micra"
            style={{
              width: "80%",
            }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default ACCStudioSydneyPopUp

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/13.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/14.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/15.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/16.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img17: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/17.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
