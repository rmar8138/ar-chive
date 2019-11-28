import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import Layout from "../components/layout"
import MobileMenu from "../components/mobileMenu"
import { BackButton } from "../components/buttons"

import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    z-index: 1;
    position: absolute;
    top: 2rem;
    left: 2.5rem;
    display: inline-block;
    font-weight: 300;
  }
`

const ClientList = styled.ul`
  padding: 10rem 2.5rem 4rem 2.5rem;
  list-style: none;
  font-family: "Grotesk Light";
  overflow: scroll;
  z-index: 100000;

  li {
    margin-bottom: 1rem;
  }
`

class Clients extends Component {
  state = {
    isMenuOpen: false,
    clients: [
      "Hype DC",
      "And People",
      "ACC Studio",
      "Above the Clouds",
      "Miss Bish",
      "Acclaim Magazine",
      "Stylerunner",
      "Cottee Parker JPR Architects",
      "Pigalle Tokyo",
      "Sauti Systems",
      "a Love Below",
      "Ragan Martinez",
      "Micra",
      "Cake Wines",
      "Kurumac",
      "Cool Mac Cafe",
    ],
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    const { clients } = this.state
    return (
      <PageTransition
        transitionStyles={{
          entering: { opacity: "0" },
          entered: { opacity: "1" },
          exiting: { opacity: "0" },
        }}
        transitionTime={500}
      >
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <Container>
            <p>Together, we’ve worked with:</p>
            <ClientList>
              {clients
                .sort((a, b) => {
                  // ignore casing
                  let nameA = a.toLowerCase()
                  let nameB = b.toLowerCase()

                  if (nameA < nameB) {
                    return -1
                  } else if (nameA > nameB) {
                    return 1
                  } else {
                    return 0
                  }
                })
                .map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
            </ClientList>
            <BackButton to="/">Back</BackButton>
          </Container>
        </Layout>
      </PageTransition>
    )
  }
}

export default Clients
