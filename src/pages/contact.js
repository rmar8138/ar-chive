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
  align-self: flex-start;
  width: 70%;

  p {
    margin-bottom: 2rem;
  }

  span {
    color: ${props => props.theme.darkBlue};
  }

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    font-size: ${props => props.theme.fs_medium};
    width: 100%;
  }
`

const ClientList = styled.div`
  display: block;
  font-size: 2rem;
  font-family: "Grotesk Light";
  line-height: 1.3;
  align-self: flex-end;
  width: 50%;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    display: none;
  }
`

const Email = styled.div`
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

class Contact extends Component {
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
            <Fragment>
              <CopyText>
                <p>
                  <span>ar–chive</span> gravitate towards working with
                  like-minded individuals and businesses.
                </p>
                <p>
                  Our practice spans across consultation, direction, graphic
                  design, murals, illustration, photography and videography.
                </p>
              </CopyText>
              <ClientList>
                <p>
                  Together, we’ve worked with: Hype DC, Andpeople, Adidas AU,
                  ACC Studio, Footlocker, Above The Clouds, Miss Bish, Acclaim,
                  Stylerunner, Honour Sydney, Cottee Parker Architects, Pigalle,
                  Vaughan Mills, APOLLO4OOO, Ragan Martinez, Montel Blac,
                  Coolmac Cafe, Kurumac Cafe, Micra, Midnight Swim, Cake Wines,
                  Sauti Systems and a Love Below.
                </p>
              </ClientList>
              <Email>
                <a href="mailto:a@ar-chive.studio">a@ar-chive.studio</a>
                <a href="mailto:r@ar-chive.studio">r@ar-chive.studio</a>
              </Email>
              <BackButton to="/">Back</BackButton>
            </Fragment>
          </Container>
        </Layout>
      </PageTransition>
    )
  }
}

export default Contact
