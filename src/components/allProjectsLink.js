import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

const StyledLink = styled(Link)`
  color: ${props => (props.spotlight ? props.theme.darkGrey : "black")};
`

const Project = styled.li`
  position: relative;
`

const Hover = styled.div`
  width: 25%;
  position: absolute;
  top: 0;
  right: 6rem;
  display: flex;
  align-items: flex-start;

  img {
    width: 100%;
    z-index: -1;
  }

  span {
    font-size: ${props => props.theme.fs_medium};
    font-family: "Grotesk Regular";
    margin-top: 1rem;
    margin-left: 2rem;
  }
`

class ProjectLink extends Component {
  state = {
    isHovered: false,
  }

  onHover = e => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }))
    this.props.spotlightHover(this.props.index)
  }

  render() {
    const image = this.props.image
    console.log(image)
    return (
      <Project>
        <StyledLink
          to={slugify(this.props.children[1], {
            remove: /[*+~.()'"!:@]/g,
            lower: true,
          })}
          isHovered={this.state.isHovered}
          onMouseOver={this.onHover}
          onMouseOut={this.onHover}
          spotlight={this.props.spotlight}
        >
          {this.props.children}
        </StyledLink>
        {this.state.isHovered && (
          <Hover>
            <img src={image} alt={this.props.projectName} />
          </Hover>
        )}
      </Project>
    )
  }
}

export default ProjectLink
