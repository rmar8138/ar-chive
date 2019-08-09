import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import SEO from "../components/seo"
import { DesktopBreakpoint, MobileBreakpoint } from "./utilities/breakpoints"
import { BrowserView, MobileView } from "react-device-detect"

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

const MobileHeading = styled.div`
  display: flex;

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

const StyledCarousel = styled(Carousel)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  /* z-index: -100000; */
`

const FirstSlide = styled.div`
  height: 100%;
  width: 100%;
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

  p {
    display: inline-block;
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
  }
`

const PageCounter = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 10000;
`

const MobilePageCounter = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 2.5rem;
  z-index: 10000;
`

const ProjectNavbarContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
`

// const LeftScrollDiv = styled.div`
//   height: 100%;
//   width: 50%;
//   position: absolute;
//   background-color: transparent;

//   left: 0;
//   top: 0;
//   z-index: 1000;
// `

// const RightScrollDiv = styled.div`
//   height: 100%;
//   width: 50%;
//   position: absolute;
//   background-color: transparent;
//   right: 0;

//   top: 0;
//   z-index: 1000;
// `

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

  detectArrowKey = e => {
    // change slides if left/right arrow key pressed
    if (e.keyCode === 37) {
      if (this.state.value > 0) {
        this.setState(prevState => ({ value: prevState.value - 1 }))
      }
    } else if (e.keyCode === 39) {
      if (this.state.value + 1 < this.props.children.length) {
        this.setState(prevState => ({ value: prevState.value + 1 }))
      }
    }
  }

  onChange = value => this.setState({ value })

  render() {
    return (
      <Fragment>
        <BrowserView>
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
              <StyledCarousel
                centered
                clickToChange
                value={this.state.value}
                onChange={this.onChange}
              >
                {React.Children.map(this.props.children, (child, index) =>
                  index === 0 ? (
                    <FirstSlide>{child}</FirstSlide>
                  ) : (
                    <Slide>{child}</Slide>
                  )
                )}
              </StyledCarousel>
              <ProjectNavbarContainer>
                <Navbar empty />
              </ProjectNavbarContainer>
            </Container>
          </Layout>
        </BrowserView>

        <MobileView>
          <Layout>
            <Container>
              <SEO
                title={this.props.heading}
                keywords={[`gatsby`, `application`, `react`]}
              />
              <MobileHeading>
                <span>{this.props.heading.split("/")[0]}</span>
                <h1>{this.props.heading.split("/")[1]}</h1>
              </MobileHeading>
              <MobilePageCounter>
                <p>
                  {this.state.value + 1} / {this.props.children.length}
                </p>
              </MobilePageCounter>
              <StyledCarousel
                centered
                clickToChange
                value={this.state.value}
                onChange={this.onChange}
              >
                {React.Children.map(this.props.children, (child, index) =>
                  index === 0 ? (
                    <FirstSlide>{child}</FirstSlide>
                  ) : (
                    <Slide>{child}</Slide>
                  )
                )}
              </StyledCarousel>
              <ProjectNavbarContainer>
                <Navbar empty />
              </ProjectNavbarContainer>
            </Container>
          </Layout>
        </MobileView>
      </Fragment>
    )
  }
}

export default ProjectPageLayout
