import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "./layout"
import NavBar from "./navbar"
import MobileProjectLink from "./mobileProjectLink"
import MobileMenu from "./mobileMenu"
import archiveLogo from "../assets/logos/ar.svg"

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
  font-size: 18vw;
  font-family: "Grotesk Regular";
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  margin-top: 2rem;
  /* padding-left: 15px;
  padding-right: 15px; */

  li {
    display: inline-flex; /* make li the size of contents */
    text-align: center;
    margin-top: -5px;
    margin-bottom: -5px;

    a {
      width: 100%;
      /* margin-left: -2px;
      margin-right: -2px; */
    }
  }

  a:hover {
    font-family: "Grotesk Regular";
  }
`

const AllProjectsLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.6rem;

  align-self: flex-start;
  margin-top: 1rem;
`

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* position: absolute;
  bottom: 2rem;
  left: 2.5rem; */
  z-index: 100000;

  img {
    width: 7rem;
    cursor: pointer;
  }
`

export class mobileHomePage extends Component {
  state = {
    menuOpen: false,
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

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }))
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
        {this.state.menuOpen ? (
          <MobileMenu toggleMenu={this.toggleMenu} />
        ) : (
          <Container>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

            <ProjectsList>
              {this.state.projects.map((project, index) => {
                if (index < this.state.projects.length) {
                  return (
                    <MobileProjectLink
                      key={index}
                      index={index}
                      projectName={project}
                      device="mobile"
                      spotlight={this.state.projects[index].spotlight}
                      spotlightHover={this.spotlightHover}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </MobileProjectLink>
                  )
                }
              })}
            </ProjectsList>
            <NavBar />
            {/* <MobileNav>
              <img
                src={archiveLogo}
                alt="Archive Studio"
                onClick={this.toggleMenu}
                style={{ width: "7rem" }}
              />
              <AllProjectsLink to="/projects">All</AllProjectsLink>
            </MobileNav> */}
          </Container>
        )}
      </Layout>
    )
  }
}

export default mobileHomePage
