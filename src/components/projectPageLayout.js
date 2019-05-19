import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import SEO from "../components/seo"

const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: "Grotesk Regular";
    font-weight: 300;
  }

  @media only screen and (max-width: 640px) {
    padding-right: 2.5rem;
  }
`

const StyledCarousel = styled(Carousel)`
  position: relative;
  margin-bottom: 2rem;

  p {
    display: inline-block;
    width: 60%;
    font-family: "Grotesk Light";
    font-size: ${props => props.theme.fs_medium};
    line-height: 1.4;
  }

  video {
    height: 100%;
    width: auto;
  }

  /* figcaption {
    font-size: 1.6rem;
    font-family: "Grotesk Light";
  } */
`

const Slide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  figure {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 100%;
    width: auto;
  }

  img:not(:last-child) {
    margin-right: 2rem;
  }
`

const PageCounter = styled.div`
  margin-left: auto;
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
            {React.Children.map(this.props.children, child => (
              <Slide>{child}</Slide>
            ))}
          </StyledCarousel>
          {/* <Dots
            value={this.state.value}
            onChange={this.onChange}
            number={this.props.children.length}
          /> */}
          <Navbar empty />
        </Container>
      </Layout>
    )
  }
}

export default ProjectPageLayout
