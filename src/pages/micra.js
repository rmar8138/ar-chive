import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { UserAgent } from '@quentin-sommer/react-useragent'
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"

const Micra = ({ data }) => (
  <Fragment>
    <UserAgent computer>
      <ProjectPageLayout heading="05/Micra">
        <Fragment>
          <p>
            Micra brings together multi-instrumentalist, Robbie Cain and
            singer-guitarist, Ivana Kay. <br />
            The Sydney based duo create a wistful, atmospheric sound with floating
            melodies and vulnerable lyrical composition.
          </p>
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "50%", minWidth: "30rem", maxWidth: "50rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "40%", minWidth: "30rem", maxWidth: "40rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[3].node.childImageSharp.fluid}
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
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "60%", minWidth: "40rem", maxWidth: "60rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[5].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "80%", minWidth: "40rem", maxWidth: "80rem" }}
          />
        </Fragment>
      </ProjectPageLayout>
    </UserAgent>
    <UserAgent mobile>
      <MobileProjectPageLayout heading="05/Micra">
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
            fluid={data.allFile.edges[10].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.allFile.edges[11].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "90%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[3].node.childImageSharp.fluid}
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
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[6].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "100%" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[9].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "-15rem", marginRight: "1rem" }}
          />
          <Img
            fluid={data.allFile.edges[8].node.childImageSharp.fluid}
            alt="Micra"
            style={{ width: "45%", marginTop: "15rem", marginLeft: "1rem" }}
          />
        </Fragment>
        <Fragment>
          <Img
            fluid={data.allFile.edges[7].node.childImageSharp.fluid}
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
    allFile(filter: { relativeDirectory: { eq: "web/micra" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
