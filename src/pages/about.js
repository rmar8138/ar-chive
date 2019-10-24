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
    font-size: 2rem;
  }

  span {
    color: ${props => props.theme.darkBlue};
  }
`

const Contact = styled.div`
  font-family: "Grotesk Regular";

  a:not(:last-child) {
    margin-right: 3rem;
  }

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    position: sticky;
    bottom: 2rem;
    left: 2.5rem;

    a:not(:last-child) {
      margin-bottom: 0.2rem;
    }
  }
`

const LogoSmall = styled.img`
  width: 5.2rem;
  cursor: pointer;
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
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <Container>
            {this.state.isMenuOpen ? (
              <MobileMenu />
            ) : (
              <Fragment>
                <CopyText>
                  <p>
                    <span>ar–chive</span> is a creative partnership by Angela
                    Tam and Rowland Reyes Martinez. It is a collection of our
                    ideas and approach where art and direction intersect. We are
                    multidisciplinary artists with a design-driven process and
                    an eye for detail. Our aim as a studio is to evoke emotion
                    and to spark conversation through any given brief.
                  </p>
                </CopyText>
                <Contact>
                  <a href="mailto:a@ar-chive.studio">a@ar-chive.studio</a>
                  <a href="mailto:r@ar-chive.studio">r@ar-chive.studio</a>
                </Contact>
                <BackButton to="/">Back</BackButton>
              </Fragment>
            )}
          </Container>
        </Layout>
      </PageTransition>
    )
  }
}

export default About
