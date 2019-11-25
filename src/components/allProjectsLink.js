import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"
import { UserAgent } from "@quentin-sommer/react-useragent"

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

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    right: unset;
    width: 100%;
  }
`

class ProjectLink extends Component {
  state = {
    isHovered: false,
  }

  onHover = e => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }))
    this.props.spotlightHover(this.props.title)
  }

  render() {
    const image = this.props.image
    console.log(image)
    return (
      <Project>
        <StyledLink
          to={slugify(this.props.children, {
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
          <UserAgent computer>
            <Hover>
              <img src={image} alt={this.props.projectName} />
            </Hover>
          </UserAgent>
        )}
      </Project>
    )
  }
}

export default ProjectLink
