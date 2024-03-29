import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import Layout from "../components/layout"
import MobileMenu from "../components/mobileMenu"
import { HomeButton } from "../components/buttons"

import SEO from "../components/seo"

const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10rem;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    padding-right: 2.5rem;
  }
`

const CopyText = styled.div`
  font-size: 3.5rem;
  letter-spacing: 0.6px;
  line-height: 1.4;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    font-size: ${props => props.theme.fs_medium};
  }

  span {
    color: ${props => props.theme.darkBlue};
  }
`

const Copyright = styled.div`
  font-family: "Grotesk Regular";
  font-size: ${props => props.theme.fs_small};
  position: fixed;
  bottom: 2rem;
  left: 2.5rem;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    font-size: 1rem;
    width: 80%;
  }
`

class About extends Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
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
          <SEO title="Home" keywords={[`ar-chive`, `design`, `sydney`]} />

          <Container>
            {this.state.isMenuOpen ? (
              <MobileMenu />
            ) : (
              <Fragment>
                <CopyText>
                  <p>
                    <span>ar–chive</span> is a creative partnership bringing
                    together the minds of Angela Tam and Rowland Reyes Martinez.
                    It is a collection of our ideas and approach where art and
                    direction intersect. We are multidisciplinary artists with a
                    design-driven process and an eye for detail. Our aim as a
                    studio is to evoke emotion and to spark conversation through
                    any given brief.
                  </p>
                </CopyText>
                <Copyright>
                  <p>Design by ar–chive. Coded by Ragan Martinez</p>
                  <p>
                    &copy; ar–chive {new Date().getFullYear()}. All Rights
                    Reserved
                  </p>
                </Copyright>
                <HomeButton to="/">Back</HomeButton>
              </Fragment>
            )}
          </Container>
        </Layout>
      </PageTransition>
    )
  }
}

export default About
