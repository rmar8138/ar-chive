import React, { Component, Fragment } from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BackButton } from "../components/buttons"

/* IMPORTS */

const leftCursor = require("../assets/images/cursors/left.png")
const rightCursor = require("../assets/images/cursors/right.png")

const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  h1 {
    position: relative;
    font-family: "Grotesk Regular";
    font-weight: 300;
    z-index: 100000000;
  }

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    padding-right: 2.5rem;
  }
`

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    width: 60%;
    font-family: "Grotesk Light";
    font-size: ${props => props.theme.fs_medium};
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
    z-index: 1000000;
  }
`

const PageCounter = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 100000000;
`

const ContentContainer = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LeftScrollDiv = styled.div`
  cursor: url(${leftCursor}), pointer;
  height: 100%;
  width: 50%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;
  z-index: 1000;
`

const RightScrollDiv = styled.div`
  cursor: url(${rightCursor}), pointer;
  height: 100%;
  width: 50%;
  position: absolute;
  background-color: transparent;
  right: 0;
  top: 0;
  z-index: 1000;
`

class ProjectPageLayout extends Component {
  state = {
    value: 0,
  }

  componentDidMount() {
    // add event listener to listen for left/right arrow key
    window.addEventListener("keydown", e => this.detectArrowKey(e))
  }

  componentWillUnmount() {
    // remove event listener on unmount
    window.removeEventListener("keydown", this.detectArrowKey)
  }

  changeSlideLeft = e => {
    if (this.state.value > 0) {
      this.setState(prevState => ({ value: prevState.value - 1 }))
    }
  }

  changeSlideRight = e => {
    if (this.state.value + 1 < this.props.children.length) {
      this.setState(prevState => ({ value: prevState.value + 1 }))
    }
  }

  detectArrowKey = e => {
    // change slides if left/right arrow key pressed
    if (e.keyCode === 37) {
      this.changeSlideLeft()
    } else if (e.keyCode === 39) {
      this.changeSlideRight()
    }
  }

  render() {
    return (
      <PageTransition>
        <Layout>
          <Container>
            <SEO
              title={this.props.heading}
              keywords={[`gatsby`, `application`, `react`]}
            />
            <h1>{this.props.heading}</h1>
            <PageCounter>
              <p>
                {this.state.value + 1} of {this.props.children.length}
              </p>
            </PageCounter>
            <ContentContainer>
              {React.Children.map(this.props.children, (child, index) => (
                <Slide
                  index={index}
                  style={{
                    display: this.state.value === index ? "flex" : "none",
                  }}
                >
                  {child}
                </Slide>
              ))}
              <LeftScrollDiv onClick={this.changeSlideLeft} />
              <RightScrollDiv onClick={this.changeSlideRight} />
            </ContentContainer>
            <BackButton to="/">Back</BackButton>
          </Container>
        </Layout>
      </PageTransition>
    )
  }
}

export default ProjectPageLayout
