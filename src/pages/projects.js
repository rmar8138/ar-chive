import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import AllProjectsLink from "../components/allProjectsLink"
import { BackButton } from "../components/buttons"

import SEO from "../components/seo"

/* IMAGES */

const aLoveBelow = require("../assets/images/web/a-love-below/1.png")
const montelBlac = require("../assets/images/web/montel-blac/1.png")
const riseToUbiquity = require("../assets/images/web/rise-to-ubiquity/1.png")
const coolMacCafe = require("../assets/images/web/cool-mac-cafe/1.png")
const micra = require("../assets/images/web/micra/1.png")
const pigalleTokyo = require("../assets/images/web/pigalle-tokyo/1.png")
const vaughanMills = require("../assets/images/web/vaughan-mills/1.png")
const spectre = require("../assets/images/web/spectre/1.png")
const kirribilliHome = require("../assets/images/web/kirribilli-home/1.png")
const otherWorlds = require("../assets/images/web/other-worlds/1.png")

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    z-index: 1;
    position: absolute;
    top: 2rem;
    left: 2.5rem;
    display: inline-block;
    font-weight: 300;
  }
`

const AllProjectsList = styled.ul`
  padding: 2rem 2.5rem;
  font-size: ${props => props.theme.fs_large};
  list-style: none;
  padding: 10rem;
  padding-bottom: 40rem;
  overflow: scroll;
  z-index: 10;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    /* padding: 2rem; */
    font-size: ${props => props.theme.fs_medium};
    margin-left: -6rem;
    margin-top: 3rem;
  }

  li:first-child {
    font-size: ${props => props.theme.fs_small};
    font-family: "Grotesk Regular";
    text-transform: uppercase;
    margin: 4rem 0;
  }

  li:not(:last-child) {
    margin-bottom: 2rem;
  }
`

class Projects extends Component {
  state = {
    projects: [
      {
        title: "a Love Below: Live! Vol. 1",
        spotlight: false,
        hovered: false,
        image: aLoveBelow,
      },
      {
        title: "Montel Blac",
        spotlight: false,
        hovered: false,
        image: montelBlac,
      },
      {
        title: "Rise to Ubiquity",
        spotlight: false,
        hovered: false,
        image: riseToUbiquity,
      },
      {
        title: "Cool Mac Cafe",
        spotlight: false,
        hovered: false,
        image: coolMacCafe,
      },
      {
        title: "Micra",
        spotlight: false,
        hovered: false,
        image: micra,
      },
      {
        title: "Pigalle Tokyo",
        spotlight: false,
        hovered: false,
        image: pigalleTokyo,
      },
      {
        title: "Vaughan Mills",
        spotlight: false,
        hovered: false,
        image: vaughanMills,
      },
      {
        title: "Spectre",
        spotlight: false,
        hovered: false,
        image: spectre,
      },
      {
        title: "Kirribilli Home",
        spotlight: false,
        hovered: false,
        image: kirribilliHome,
      },
      {
        title: "Other Worlds",
        spotlight: false,
        hovered: false,
        image: otherWorlds,
      },
    ],
  }

  spotlightHover = hoveredIndex => {
    // set spotlight to true for every project link besides hovered link
    this.setState(prevState => ({
      projects: prevState.projects.map((project, projectIndex) => {
        if (hoveredIndex !== projectIndex) {
          return {
            ...project,
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
    return (
      <Layout>
        <Container>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1>All Projects</h1>
          <AllProjectsList>
            <li>Featured</li>
            {this.state.projects.map((project, index) => {
              if (index < this.state.projects.length) {
                return (
                  <AllProjectsLink
                    key={index}
                    index={index}
                    image={project.image}
                    projectName={project}
                    spotlight={project.spotlight}
                    spotlightHover={this.spotlightHover}
                    page="All Projects"
                  >
                    {index + 1 < 10 ? `0${index + 1}/` : `${index + 1}/`}
                    {project.title}
                  </AllProjectsLink>
                )
              }
            })}
          </AllProjectsList>
          <BackButton to="/">Back</BackButton>
        </Container>
      </Layout>
    )
  }
}

export default Projects
