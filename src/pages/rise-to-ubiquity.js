import { graphql } from "gatsby"
import React, { Fragment } from "react"
import Img from "gatsby-image"
import { UserAgent } from "@quentin-sommer/react-useragent"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const RiseToUbiquity = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="03/Rise To Ubiquity">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <p>
            A solo exhibition by Rowland Reyes Martinez, Rise To Ubiquity was an
            exploration of the photographic experience. ar-chive curated and
            produced the exhibition held on 15 February 2019 at 9 Ryder Street,
            Darlinghurst in Sydney. We also designed a publication, catalogue,
            show description flyer and website to accompany the exhibition.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img4.childImageSharp.fluid}
              style={{ width: "40%", height: "auto", marginRight: "1rem" }}
              alt="Rise to Ubiquity"
            />
            <Img
              fluid={data.img5.childImageSharp.fluid}
              style={{ width: "40%", height: "auto", marginLeft: "1rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img6.childImageSharp.fluid}
              style={{ width: "40%", height: "auto", marginRight: "1rem" }}
              alt="Rise to Ubiquity"
            />
            <Img
              fluid={data.img7.childImageSharp.fluid}
              style={{ width: "40%", height: "auto", marginLeft: "1rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Img
              fluid={data.img8.childImageSharp.fluid}
              style={{ width: "25%", height: "auto", marginRight: "2rem" }}
              alt="Rise to Ubiquity"
            />
            <Img
              fluid={data.img9.childImageSharp.fluid}
              style={{ width: "25%", height: "auto", marginRight: "2rem" }}
              alt="Rise to Ubiquity"
            />
            <Img
              fluid={data.img10.childImageSharp.fluid}
              style={{ width: "25%", height: "auto" }}
              alt="Rise to Ubiquity"
            />
          </div>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            alt="Rise to Ubiquity"
          />
        </Fragment>
        <Fragment>
          <p>Video Recap</p>
        </Fragment>
        <Fragment>
          <p>Rise to Ubiquity video</p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img12.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "45%", marginRight: "1rem" }}
            />
            <Img
              fluid={data.img13.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "30%", marginLeft: "1rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img14.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img15.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img16.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "60%", minWidth: "40rem", maxWidth: "80rem" }}
            />
          </figure>
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="03/Rise To Ubiquity">
        <Fragment>
          <figure>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <p>
            A solo exhibition by Rowland Reyes Martinez, Rise To Ubiquity was an
            exploration of the photographic experience. ar-chive curated and
            produced the exhibition held on 15 February 2019 at 9 Ryder Street,
            Darlinghurst in Sydney. We also designed a publication, catalogue,
            show description flyer and website to accompany the exhibition.
          </p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%", marginRight: "0rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%", marginRight: "0rem" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img4.childImageSharp.fluid}
              style={{ width: "100%", marginRight: "0rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img5.childImageSharp.fluid}
              style={{ width: "100%", marginRight: "0rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img6.childImageSharp.fluid}
              style={{ width: "100%", marginRight: "0rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img7.childImageSharp.fluid}
              style={{ width: "100%", marginRight: "0rem" }}
              alt="Rise to Ubiquity"
            />
          </figure>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img8.childImageSharp.fluid}
            style={{ width: "80%", marginRight: "auto" }}
            alt="Rise to Ubiquity"
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img9.childImageSharp.fluid}
            style={{ width: "80%", marginRight: "auto" }}
            alt="Rise to Ubiquity"
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img10.childImageSharp.fluid}
            style={{ width: "80%", marginRight: "auto" }}
            alt="Rise to Ubiquity"
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.img11.childImageSharp.fluid}
            style={{ width: "80%", marginLeft: "auto" }}
            alt="Rise to Ubiquity"
          />
        </Fragment>
        <Fragment>
          <p>Video Recap</p>
        </Fragment>
        <Fragment>
          <p>Rise to Ubiquity video</p>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img12.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img13.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "80%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img14.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img15.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%" }}
            />
          </figure>
        </Fragment>
        <Fragment>
          <figure>
            <Img
              fluid={data.img16.childImageSharp.fluid}
              alt="Rise to Ubiquity"
              style={{ width: "100%" }}
            />
          </figure>
        </Fragment>
      </MobileProjectPageLayout>
    </UserAgent>
  </Fragment>
)

export default RiseToUbiquity

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "web/rise-to-ubiquity/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "web/rise-to-ubiquity/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "web/rise-to-ubiquity/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "web/rise-to-ubiquity/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "web/rise-to-ubiquity/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "web/rise-to-ubiquity/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "web/rise-to-ubiquity/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "web/rise-to-ubiquity/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "web/rise-to-ubiquity/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "web/rise-to-ubiquity/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "web/rise-to-ubiquity/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "web/rise-to-ubiquity/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "web/rise-to-ubiquity/13.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14: file(relativePath: { eq: "web/rise-to-ubiquity/14.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "web/rise-to-ubiquity/15.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16: file(relativePath: { eq: "web/rise-to-ubiquity/16.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
