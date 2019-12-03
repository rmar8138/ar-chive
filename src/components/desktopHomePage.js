import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import ProjectLink from "../components/projectLink"

import SEO from "../components/seo"

const Container = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectsList = styled.ul`
  font-size: 4.6rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  li {
    display: flex;
    justify-items: stretch;
    align-items: stretch;
  }

  li:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    /* padding: 2rem; */
    font-size: 3.6rem;
  }
`

const AllProjectsLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.6rem;

  align-self: flex-start;
  margin-top: 1rem;

  &:hover {
    border-bottom: 1px solid black;
  }
`

const Image = styled(Img)`
  display: ${props => (props.hovered ? "block" : "none")};
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  transform: translate(-50%, -50%);
  z-index: -1;
`

export class DesktopHomePage extends Component {
  state = {
    projects: [
      {
        title: "ACC Studio Sydney Pop Up",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Kurumac",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Other Worlds",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Spectre",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Kirribilli Home",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Cool Mac Cafe",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Rise To Ubiquity",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Vaughan Mills",
        spotlight: false,
        hovered: false,
      },
      {
        title: "a Love Below: Live! Vol. 1",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Montel",
        spotlight: false,
        hovered: false,
      },
    ],
  }

  spotlightHover = hoveredIndex => {
    // set spotlight to true for every project link besides hovered link
    this.setState(prevState => ({
      projects: prevState.projects.map((project, projectIndex) => {
        if (hoveredIndex !== projectIndex) {
          return {
            title: project.title,
            spotlight: !prevState.projects[projectIndex].spotlight,
          }
        } else {
          return {
            ...project,
            hovered: !prevState.projects[projectIndex].hovered,
          }
        }
      }),
    }))
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <Container>
          <SEO title="Home" keywords={[`ar-chive`, `design`, `sydney`]} />
          <ProjectsList id="list">
            {this.state.projects.map((project, index) => {
              if (index < this.state.projects.length) {
                return (
                  <ProjectLink
                    key={index}
                    index={index}
                    projectName={project.title}
                    device="web"
                    spotlight={this.state.projects[index].spotlight}
                    spotlightHover={this.spotlightHover}
                  >
                    {index + 1 < 10 ? `0${index + 1}/` : `${index + 1}/`}
                    {project.title}
                  </ProjectLink>
                )
              }
            })}
            <AllProjectsLink to="/projects">All Projects</AllProjectsLink>
          </ProjectsList>
          <Image
            style={{ position: "absolute" }}
            fluid={data.img1.childImageSharp.fluid}
            alt="ACC Studio Sydney Pop Up"
            top="50%"
            left="60%"
            width="70%"
            hovered={this.state.projects[0].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img9.childImageSharp.fluid}
            alt="A Love Below"
            top="50%"
            left="50%"
            width="30%"
            hovered={this.state.projects[8].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img10.childImageSharp.fluid}
            alt="Montel Blac"
            top="50%"
            left="30%"
            width="45%"
            hovered={this.state.projects[9].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img7.childImageSharp.fluid}
            alt="Rise To Ubiquity"
            top="55%"
            left="65%"
            width="60%"
            hovered={this.state.projects[6].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img6.childImageSharp.fluid}
            alt="Cool Mac Cafe"
            top="55%"
            left="55%"
            width="40%"
            hovered={this.state.projects[5].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img8.childImageSharp.fluid}
            alt="Vaughan Mills"
            top="55%"
            left="30%"
            width="35%"
            hovered={this.state.projects[7].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img4.childImageSharp.fluid}
            alt="Spectre"
            top="50%"
            left="80%"
            width="35%"
            hovered={this.state.projects[3].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img5.childImageSharp.fluid}
            alt="Kirribilli Home"
            top="50%"
            left="25%"
            width="30%"
            hovered={this.state.projects[4].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img3.childImageSharp.fluid}
            alt="Other Worlds"
            top="50%"
            left="70%"
            width="40%"
            hovered={this.state.projects[2].hovered}
          />
          <Image
            style={{ position: "absolute" }}
            fluid={data.img2.childImageSharp.fluid}
            alt="Kurumac"
            top="50%"
            left="20%"
            width="30%"
            hovered={this.state.projects[1].hovered}
          />
          <Navbar />
        </Container>
      </Layout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(relativePath: { eq: "web/acc-studio-sydney-pop-up/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img2: file(relativePath: { eq: "web/kurumac/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img3: file(relativePath: { eq: "web/other-worlds/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img4: file(relativePath: { eq: "web/spectre/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img5: file(relativePath: { eq: "web/kirribilli-home/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img6: file(relativePath: { eq: "web/cool-mac-cafe/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img7: file(relativePath: { eq: "web/rise-to-ubiquity/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img8: file(relativePath: { eq: "web/vaughan-mills/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img9: file(relativePath: { eq: "web/a-love-below/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img10: file(relativePath: { eq: "web/montel/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <DesktopHomePage data={data} {...props} />}
  />
)
