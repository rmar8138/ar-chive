import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import { BackButton } from "./buttons"
import SEO from "../components/seo"

const Container = styled.div`
  height: 100vh;
  overflow: scroll;

  h1 {
    position: relative;
    font-family: "Grotesk Regular";
    font-weight: 300;
    z-index: 100000000;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const MobileHeading = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  display: flex;
  z-index: 100000000;

  span {
    font-size: 2.5rem;
    align-items: flex-start;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }

  h1 {
    display: inline-block;
    font-family: "Orpheus Pro Regular";
  }
`

const FirstSlide = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }

  p {
    display: inline-block;
    width: 60%;
    font-family: "Grotesk Light";
    font-size: 2rem;
    line-height: 1.4;

    @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
      width: 100%;
      padding: 2.5rem;
    }
  }

  figure {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    position: absolute;
    bottom: -5%;
    right: 0;
  }

  img:not(:last-child) {
    margin-right: 2rem;
  }
`

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  &:last-child {
    margin-bottom: 6rem;
  }

  p {
    display: inline-block;
    width: 60%;
    font-family: "Grotesk Light";
    font-size: 2rem;
    line-height: 1.4;

    @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
      width: 100%;
      padding: 2.5rem;
    }
  }

  figure {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    font-size: ${props => props.theme.fs_small};
    position: absolute;
    bottom: -10%;
    right: 0;
    transform: translate(-100%, -100%);
  }

  img:not(:last-child) {
    margin-right: 2rem;
  }

  video {
    height: 70vh;
    max-width: 100%;
  }

  iframe {
    z-index: 1000000;
  }
`

class MobileProjectPageLayout extends Component {
  goBack = () => window.history.back()

  onChange = value => this.setState({ value })

  render() {
    return (
      <Fragment>
        <Layout>
          <Container>
            <SEO
              title={this.props.heading}
              keywords={[`gatsby`, `application`, `react`]}
            />
            <MobileHeading>
              <h1>{this.props.heading}</h1>
            </MobileHeading>
            <Content>
              <Fade bottom opposite fraction={0.5} distance="30px" cascade>
                {React.Children.map(this.props.children, (child, index) =>
                  index === 0 ? (
                    <FirstSlide>{child}</FirstSlide>
                  ) : (
                    <Slide>{child}</Slide>
                  )
                )}
              </Fade>
            </Content>
            <BackButton onClick={this.goBack}>Back</BackButton>
          </Container>
        </Layout>
      </Fragment>
    )
  }
}

export default MobileProjectPageLayout
