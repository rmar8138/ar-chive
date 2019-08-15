import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

const StyledLink = styled(Link)`
  color: ${props => (props.spotlight ? props.theme.darkGrey : "black")};
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
    return (
      <li>
        <StyledLink
          to={slugify(this.props.children[1], {
            remove: /[*+~.()'"!:@]/g,
            lower: true,
          })}
          onMouseOver={this.onHover}
          onMouseOut={this.onHover}
          spotlight={this.props.spotlight}
        >
          {this.props.children}
        </StyledLink>
      </li>
    )
  }
}

export default ProjectLink
