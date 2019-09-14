import React, { Component, Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import slugify from "slugify"
import Layout from "./layout"
import MobileMenu from "./mobileMenu"
import { AllProjectsLink } from "./buttons"
import archiveLogo from "../assets/logos/ar.svg"

import SEO from "../components/seo"

const Container = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectsList = styled.ul`
  font-size: 18vw;
  font-family: "Grotesk Regular";
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  margin-top: 2rem;

  li {
    a {
      width: 100%;
    }
  }

  a:hover {
    font-family: "Grotesk Regular";
  }
`

const ProjectListLink = styled.li`
  z-index: 1;
  color: ${props => (props.spotlight ? props.theme.darkGrey : "black")};
  display: inline-flex;
  text-align: center;
  margin-top: -5px;
  margin-bottom: -5px;
`

const StyledLink = styled(Link)`
  visibility: ${props => (props.clicked ? "visible" : "hidden")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`

const Logo = styled.img`
  width: 5.5rem;
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
`

export class MobileHomePage extends Component {
  state = {
    menuOpen: false,
    projects: [
      {
        title: "a Love Below: Live! Vol. 1",
        clicked: false,
        spotlight: false,
        image: this.props.data.img1.childImageSharp.fluid,
      },
      {
        title: "Montel Blac",
        clicked: false,
        spotlight: false,
        image: this.props.data.img2.childImageSharp.fluid,
      },
      {
        title: "Rise to Ubiquity",
        clicked: false,
        spotlight: false,
        image: this.props.data.img3.childImageSharp.fluid,
      },
      {
        title: "Cool Mac Cafe",
        clicked: false,
        spotlight: false,
        image: this.props.data.img4.childImageSharp.fluid,
      },
      {
        title: "Micra",
        clicked: false,
        spotlight: false,
        image: this.props.data.img5.childImageSharp.fluid,
      },
      {
        title: "Pigalle Tokyo",
        clicked: false,
        spotlight: false,
        image: this.props.data.img6.childImageSharp.fluid,
      },
      {
        title: "Vaughan Mills",
        clicked: false,
        spotlight: false,
        image: this.props.data.img7.childImageSharp.fluid,
      },
      {
        title: "Spectre",
        clicked: false,
        spotlight: false,
        image: this.props.data.img8.childImageSharp.fluid,
      },
      {
        title: "Kirribilli Home",
        clicked: false,
        spotlight: false,
        image: this.props.data.img9.childImageSharp.fluid,
      },
      {
        title: "Other Worlds",
        clicked: false,
        spotlight: false,
        image: this.props.data.img10.childImageSharp.fluid,
      },
    ],
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside = e => {
    // reset state if anything other than li is clicked
    if (e.target.nodeName !== "IMG") {
      this.setState(prevState => ({
        ...prevState,
        projects: prevState.projects.map(project => {
          return {
            ...project,
            clicked: false,
            spotlight: false,
          }
        }),
      }))
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }))
  }

  handleClick = index => {
    this.setState(prevState => ({
      projects: prevState.projects.map((project, projectIndex) => {
        if (index !== projectIndex) {
          return {
            ...project,
            spotlight: true,
            clicked: false,
          }
        } else {
          return {
            ...project,
            spotlight: false,
            clicked: true,
          }
        }
      }),
    }))
  }

  render() {
    return (
      <Layout>
        {this.state.menuOpen ? (
          <MobileMenu toggleMenu={this.toggleMenu} />
        ) : (
          <Container>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

            <ProjectsList>
              {this.state.projects.map((project, index) => {
                if (index < this.state.projects.length) {
                  return (
                    <Fragment>
                      <ProjectListLink
                        onClick={this.handleClick.bind(this, index)}
                        spotlight={this.state.projects[index].spotlight}
                        name="link"
                      >
                        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                      </ProjectListLink>
                    </Fragment>
                  )
                }
              })}
            </ProjectsList>
            {this.state.projects.map((project, index) => (
              <StyledLink
                clicked={this.state.projects[index].clicked}
                to={slugify(this.state.projects[index].title, {
                  remove: /[*+~.()'"!:@]/g,
                  lower: true,
                })}
              >
                <Img fluid={this.state.projects[index].image} />
              </StyledLink>
            ))}
            <Logo src={archiveLogo} alt="ar-chive logo" />
            <AllProjectsLink to="/projects">All</AllProjectsLink>
          </Container>
        )}
      </Layout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(relativePath: { eq: "web/a-love-below/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img2: file(relativePath: { eq: "web/montel-blac/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img3: file(relativePath: { eq: "web/rise-to-ubiquity/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img4: file(relativePath: { eq: "web/cool-mac-cafe/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img5: file(relativePath: { eq: "web/micra/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img6: file(relativePath: { eq: "web/pigalle-tokyo/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img7: file(relativePath: { eq: "web/vaughan-mills/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img8: file(relativePath: { eq: "web/spectre/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img9: file(relativePath: { eq: "web/kirribilli-home/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img10: file(relativePath: { eq: "web/other-worlds/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MobileHomePage data={data} {...props} />}
  />
)
