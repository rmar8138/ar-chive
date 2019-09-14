import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import { isBrowser } from "react-device-detect"

const VaughanMills = ({ data }) =>
  isBrowser ? (
    <ProjectPageLayout heading="07/Vaughan Mills">
      <Fragment>
        <Img
          fluid={data.img1.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "50%", minWidth: "35rem", maxWidth: "45rem" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Vaughan Mills is a stylist who we have worked closely with across a
          variety of creative projects. The following series of images are from
          recent photoshoots featuring his vintage collection.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img2.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "25rem",
            maxWidth: "45rem",
            marginLeft: "20%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img3.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img4.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "45%",
            minWidth: "40rem",
            maxWidth: "60rem",
            marginLeft: "30%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img5.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "40%", minWidth: "25rem", marginRight: "2rem" }}
        />
        <Img
          fluid={data.img6.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "30%", minWidth: "20rem", marginLeft: "2rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img7.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "40%",
            minWidth: "30rem",
            maxWidth: "50rem",
            marginLeft: "30%",
            marginTop: "10%",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img8.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginRight: "2rem",
          }}
        />
        <Img
          fluid={data.img9.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginLeft: "2rem",
          }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img10.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "35%", minWidth: "30rem", maxWidth: "50rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img11.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img12.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "30%", minWidth: "20rem", marginRight: "2rem" }}
        />
        <Img
          fluid={data.img13.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "20%", minWidth: "13.33rem", marginLeft: "2rem" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img14.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginRight: "2rem",
          }}
        />
        <Img
          fluid={data.img15.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{
            width: "30%",
            minWidth: "20rem",
            maxWidth: "30rem",
            marginLeft: "2rem",
          }}
        />
      </Fragment>
    </ProjectPageLayout>
  ) : (
    <MobileProjectPageLayout heading="07/Vaughan Mills">
      <Fragment>
        <Img
          fluid={data.img1.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <p>
          Vaughan Mills is a stylist who we have worked closely with across a
          variety of creative projects. The following series of images are from
          recent photoshoots featuring his vintage collection.
        </p>
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img2.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginLeft: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img3.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img4.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img5.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img6.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img7.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img8.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginLeft: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img9.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img10.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img11.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img12.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "100%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img13.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "80%" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img14.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "85%", marginRight: "auto" }}
        />
      </Fragment>
      <Fragment>
        <Img
          fluid={data.img15.childImageSharp.fluid}
          alt="Vaughan Mills"
          style={{ width: "80%" }}
        />
      </Fragment>
    </MobileProjectPageLayout>
  )

export default VaughanMills

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/vaughan-mills/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/vaughan-mills/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/vaughan-mills/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/vaughan-mills/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/vaughan-mills/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/vaughan-mills/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/vaughan-mills/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/vaughan-mills/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/vaughan-mills/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/vaughan-mills/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/vaughan-mills/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/vaughan-mills/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "web/vaughan-mills/13.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14: file(relativePath: { eq: "web/vaughan-mills/14.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "web/vaughan-mills/15.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
