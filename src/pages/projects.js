import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import AllProjectsLink from "../components/allProjectsLink"
import archiveLogo from "../assets/logos/red.svg"
import Navbar from "../components/navbar"

import SEO from "../components/seo"

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

    @media only screen and (max-width: 640px) {
      font-family: "Grotesk Regular";
    }
  }
`

const Logo = styled.img`
  width: 7rem;
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
  z-index: 100;
`

const AllProjectsList = styled.ul`
  padding: 2rem 2.5rem;
  font-size: ${props => props.theme.fs_large};
  list-style: none;
  padding: 10rem;
  padding-bottom: 40rem;
  overflow: scroll;
  z-index: 10;

  @media only screen and (max-width: 640px) {
    padding: 2rem;
    font-size: ${props => props.theme.fs_small};
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

  a:hover {
    font-size: 5.2rem;
    font-family: "Grotesk Regular";
  }
`

const BackButton = styled(Link)`
  font-family: "Grotesk Regular";
  text-transform: uppercase;
  font-size: ${props => props.theme.fs_small};
  position: absolute;
  bottom: 2rem;
  right: 2.5rem;
  z-index: 100;
`

class Projects extends Component {
  state = {
    projects: [
      "a Love Below: Live! Vol. 1",
      "Montel Blac",
      "Rise to Ubiquity",
      "Cool Mac Cafe",
      "Micra",
      "Pigalle Tokyo",
      "Vaughan Mills",
      // "KIAH",
      // "Apollo 4000",
    ],
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
                    projectName={project}
                    page="All Projects"
                  >
                    {index + 1 < 10 ? `0${index + 1}/` : `${index + 1}/`}
                    {project}
                  </AllProjectsLink>
                )
              }
            })}
          </AllProjectsList>
          <Logo src={archiveLogo} alt="ar-chive logo" />
          <BackButton to="/">Back</BackButton>
        </Container>
      </Layout>
    )
  }
}

export default Projects
