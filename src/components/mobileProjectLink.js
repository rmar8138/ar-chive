import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

const StyledLink = styled(Link)`
  color: ${props => (props.spotlight ? props.theme.darkGrey : "black")};
`

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`

class MobileProjectLink extends Component {
  state = {
    isHovered: false,
  }

  onHover = e => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }))
    this.props.spotlightHover(this.props.index)
  }

  render() {
    const mobileImage = require(`../assets/images/mobile/${this.props.index +
      1}.png`)
    return (
      <li>
        <StyledLink
          to={slugify(this.props.projectName.title, {
            remove: /[*+~.()'"!:@]/g,
            lower: true,
          })}
          onMouseOver={this.onHover}
          onMouseOut={this.onHover}
          spotlight={this.props.spotlight}
        >
          {this.props.children}
        </StyledLink>
        {this.state.isHovered && (
          <Image
            src={mobileImage}
            alt={this.props.projectName}
          />
        )}
      </li>
    )
  }
}

export default MobileProjectLink
