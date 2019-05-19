import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = styled.div`
  height: 100vh;
  z-index: 10000000;

  ul {
    list-style: none;

    li {
      text-transform: lowercase;
      font-family: "Grotesk Regular";
      font-size: 6rem;
    }
  }
`

export default () => (
  <Menu>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link>Instagram</Link>
      </li>
      <li>
        <Link>Shop</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </ul>
  </Menu>
)
