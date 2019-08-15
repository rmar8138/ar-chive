import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import ProjectLink from "../components/projectLink"

import SEO from "../components/seo"

/* IMAGES */

const aLoveBelow = require("../assets/images/web/1.png")
const montelBlac = require("../assets/images/web/2.png")
const riseToUbiquity = require("../assets/images/web/3.png")
const coolMacCafe = require("../assets/images/web/4.png")
const micra = require("../assets/images/web/5.png")
const pigalleTokyo = require("../assets/images/web/6.png")
const vaughanMills = require("../assets/images/web/7.png")

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
`

const AllProjectsLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.6rem;

  align-self: flex-start;
  margin-top: 1rem;
`

const Image = styled.img`
  display: ${props => (props.hovered ? "block" : "none")};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  transform: translate(-50%, -50%);
  z-index: -1;
`

export class desktopHomePage extends Component {
  state = {
    projects: [
      {
        title: "a Love Below: Live! Vol. 1",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Montel Blac",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Rise to Ubiquity",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Cool Mac Cafe",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Micra",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Pigalle Tokyo",
        spotlight: false,
        hovered: false,
      },
      {
        title: "Vaughan Mills",
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
    return (
      <Layout>
        <Container>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
            src={aLoveBelow}
            alt="A Love Below"
            top="50%"
            left="50%"
            width="30%"
            hovered={this.state.projects[0].hovered}
          />
          <Image
            src={montelBlac}
            alt="Montel Blac"
            top="50%"
            left="30%"
            width="45%"
            hovered={this.state.projects[1].hovered}
          />
          <Image
            src={riseToUbiquity}
            alt="Rise To Ubiquity"
            top="55%"
            left="65%"
            width="60%"
            hovered={this.state.projects[2].hovered}
          />
          <Image
            src={coolMacCafe}
            alt="Cool Mac Cafe"
            top="55%"
            left="55%"
            width="40%"
            hovered={this.state.projects[3].hovered}
          />
          <Image
            src={micra}
            alt="Micra"
            top="50%"
            left="50%"
            width="50%"
            hovered={this.state.projects[4].hovered}
          />
          <Image
            src={pigalleTokyo}
            alt="Pigalle Tokyo"
            top="50%"
            left="80%"
            width="35%"
            hovered={this.state.projects[5].hovered}
          />
          <Image
            src={vaughanMills}
            alt="Vaughan Mills"
            top="55%"
            left="30%"
            width="35%"
            hovered={this.state.projects[6].hovered}
          />
          <Navbar />
        </Container>
      </Layout>
    )
  }
}

export default desktopHomePage
