import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100vh;
  overflow: scroll;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const MobileHeading = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;
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
`

const ProjectNavbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2rem 2.5rem;
`

class MobileProjectPageLayout extends Component {
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
            <Content>
              {React.Children.map(this.props.children, (child, index) =>
                index === 0 ? (
                  <FirstSlide>{child}</FirstSlide>
                ) : (
                  <Slide>{child}</Slide>
                )
              )}
            </Content>
            <ProjectNavbarContainer>
              <Navbar empty />
            </ProjectNavbarContainer>
          </Container>
        </Layout>
      </Fragment>
    )
  }
}

export default MobileProjectPageLayout