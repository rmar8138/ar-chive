import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LeftArrow = require("../assets/images/cursors/left.svg")

const Text = styled.div`
  text-align: center;
  color: ${props => props.theme.darkBlue};

  span {
    font-family: "Orpheus Pro Regular";
    font-size: ${props => props.theme.fs_medium};
    font-weight: 100;
    vertical-align: super;
    margin-right: 1rem;
  }

  h1 {
    font-family: "Grotesk Regular";
  }

  img {
    width: 20%;
    margin-top: 3rem;
  }
`

class Home extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Text>
            <h1>
              <span>404</span>Page Not Found
            </h1>
            <Link to="/">
              <img src={LeftArrow} alt="Left Arrow" />
            </Link>
          </Text>
        </Container>
      </Layout>
    )
  }
}

export default Home
