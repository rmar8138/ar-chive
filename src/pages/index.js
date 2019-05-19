import React, { Component } from "react"
import { Link } from "gatsby"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import ProjectLink from "../components/projectLink"
import ArchiveLogoSmall from "../assets/logos/red.svg"

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

    @media only screen and (max-width: 640px) {
      font-family: "Grotesk Regular";
      font-size: 6.5rem;
    }
  }

  li:not(:last-child) {
    margin-right: 2rem;

    @media only screen and (max-width: 640px) {
      margin-right: 0;
    }
  }

  a:hover {
    font-family: "Grotesk Regular";

    @media only screen and (max-width: 640px) {
      font-family: "Orpheus Regular";
      font-size: 6.7rem;
    }
  }
`

const AllProjectsLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.6rem;

  align-self: flex-start;
  margin-top: 1rem;

  @media only screen and (max-width: 640px) {
    font-family: "Grotesk Regular";
  }

  :hover {
    font-size: 1.8rem;

    @media only screen and (max-width: 640px) {
      font-size: 1.6rem;
    }
  }
`

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 5.2rem;
  }
`

class Home extends Component {
  state = {
    projects: [
      {
        title: "a Love Below: Live! Vol. 1",
        spotlight: false,
      },
      {
        title: "Montel Blac",
        spotlight: false,
      },
      {
        title: "Rise to Ubiquity",
        spotlight: false,
      },
      {
        title: "Cool Mac Cafe",
        spotlight: false,
      },
      {
        title: "Micra",
        spotlight: false,
      },
      {
        title: "Pigalle Tokyo",
        spotlight: false,
      },
      {
        title: "Vaughan Mills",
        spotlight: false,
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
          return project
        }
      }),
    }))
  }

  render() {
    return (
      <Layout>
        <Container>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <MediaQuery minDeviceWidth={640}>
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
            <Navbar />
          </MediaQuery>

          <MediaQuery maxDeviceWidth={640}>
            <ProjectsList>
              {this.state.projects.map((project, index) => {
                if (index < this.state.projects.length) {
                  return (
                    <ProjectLink
                      key={index}
                      index={index}
                      projectName={project}
                      device="mobile"
                    >
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </ProjectLink>
                  )
                }
              })}
            </ProjectsList>
            <MobileNav>
              <img src={ArchiveLogoSmall} alt="Archive Studio" />
              <AllProjectsLink to="/projects">All</AllProjectsLink>
            </MobileNav>
          </MediaQuery>
        </Container>
      </Layout>
    )
  }
}

export default Home
