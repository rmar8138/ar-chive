import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Micra = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="Micra">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Micra brings together multi-instrumentalist, Robbie Cain and
            singer-guitarist, Ivana Kay. <br />
            The Sydney based duo create a wistful, atmospheric sound with
            floating melodies and vulnerable lyrical composition.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            We art directed and designed their covers for two debut singles,
            ‘Child Grows Old’ and ‘Plastic’.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "80%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="Micra">
        <Fragment>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Micra brings together multi-instrumentalist, Robbie Cain and
            singer-guitarist, Ivana Kay. The Sydney based duo create a wistful,
            atmospheric sound with floating melodies and vulnerable lyrical
            composition.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "90%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            We art directed and designed their covers for two debut singles,
            ‘Child Grows Old’ and ‘Plastic’.
          </p>
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
            fluid={data.img1.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "90%", marginRight: "auto" }}
          />
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default Micra

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/micra/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/micra/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/micra/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/micra/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/micra/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/micra/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/micra/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/micra/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/micra/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/micra/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/micra/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/micra/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
