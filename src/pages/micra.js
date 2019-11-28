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
            alt="Plastic single cover"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            <span>
              Micra brings together multi-instrumentalist, Robbie Cain and
              singer-guitarist, Ivana Kay. The Sydney based duo create a
              wistful, atmospheric sound with floating melodies and vulnerable
              lyrical composition.
            </span>
            <span>
              ar-chive art directed and photographed press images for Micra’s
              release of their second single ‘Plastic’.
            </span>
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Press photos of Robbie and Ivana"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Press photo of Micra"
            style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Press photo of Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            The first cover we worked on with Micra was their debut single,
            ‘Child Grows Old’. The track invites listeners on a sonic journey
            with a rhythm reminiscent of the nature of life’s serendipitous
            timeline. At the time we were in New York City so it came naturally
            to include elements of the city that influenced our perspective and
            heightened the sense of distortion between expectations and one’s
            experience.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Child Grows Old single cover"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <p>
            After listening to ‘Plastic’ we drew from the delicate vocals and
            the transparency that comes with plastic material. It was essential
            to experiment with the fragility of flowers and their petals and use
            scanning as a visual element to further suggest the sense of
            distortion that is found in the track.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            alt="Process scans of vacuum sealed flowers"
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
            alt="Plastic single cover"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <div>
            <p>
              Micra brings together multi-instrumentalist, Robbie Cain and
              singer-guitarist, Ivana Kay. The Sydney based duo create a
              wistful, atmospheric sound with floating melodies and vulnerable
              lyrical composition. ar-chive art directed and photographed press
              images for Micra’s release of their second single ‘Plastic’.
            </p>
          </div>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            alt="Press photo of Robbie"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img12.childImageSharp.fluid}
            alt="Press photo of Ivana"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Press photo of Micra"
            style={{ width: "90%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Press photo of Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            The first cover we worked on with Micra was their debut single,
            ‘Child Grows Old’. The track invites listeners on a sonic journey
            with a rhythm reminiscent of the nature of life’s serendipitous
            timeline. At the time we were in New York City so it came naturally
            to include elements of the city that influenced our perspective and
            heightened the sense of distortion between expectations and one’s
            experience.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Child Grows Old single cover"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <p>
            After listening to ‘Plastic’ we drew from the delicate vocals and
            the transparency that comes with plastic material. It was essential
            to experiment with the fragility of flowers and their petals and use
            scanning as a visual element to further suggest the sense of
            distortion that is found in the track.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img6.childImageSharp.fluid}
            alt="Process scans of vacuum sealed flowers"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.img7.childImageSharp.fluid}
            alt="Process scans of vacuum sealed flowers"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            alt="Process scans of vacuum sealed flowers"
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
