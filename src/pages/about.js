import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import Layout from "../components/layout"
import MobileMenu from "../components/mobileMenu"
import archiveLogo from "../assets/logos/blue.svg"
import archiveLogoSmall from "../assets/logos/red.svg"

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

  img {
    width: 13rem;

    @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
      width: 9rem;
    }
  }
`

const Contact = styled.div`
  font-family: "Grotesk Regular";

  a:not(:last-child) {
    margin-right: 3rem;
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
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container>
          {this.state.isMenuOpen ? (
            <MobileMenu />
          ) : (
            <Fragment>
              <CopyText>
                <p>
                  <Link to="/">
                    <img src={archiveLogo} alt="ar-chive logo" />
                  </Link>{" "}
                  is an independent creative partnership founded by Angela Tam
                  and Rowland Reyes Martinez where concept driven ideas meet
                  thoughtful design. Grounded in empathy, intention, and an eye
                  for detail, our artistic approach leads us to projects within
                  the spheres of art direction, strategy, design, photography
                  and curation.
                </p>
              </CopyText>
              <MediaQuery minDeviceWidth={640}>
                <Contact>
                  <a href="mailto:a@ar-chive.studio">a@ar-chive.studio</a>
                  <a href="mailto:r@ar-chive.studio">r@ar-chive.studio</a>
                </Contact>
              </MediaQuery>
            </Fragment>
          )}

          <MediaQuery maxDeviceWidth={640}>
            <LogoSmall
              onClick={this.toggleMenu}
              src={archiveLogoSmall}
              alt="Archive Studio"
            />
          </MediaQuery>
        </Container>
      </Layout>
    )
  }
}

export default About
