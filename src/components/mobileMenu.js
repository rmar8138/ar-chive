import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ArchiveLogoSmall from "../assets/logos/red.svg"

const Container = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Menu = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: absolute;
  background-color: ${props => props.theme.lightGrey};
  top: 0;
  left: 0;

  ul {
    list-style: none;

    li {
      text-transform: lowercase;
      font-family: "Grotesk Regular";
      font-size: 6rem;
    }
  }
`

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 100000;

  img {
    width: 7rem;
    cursor: pointer;
  }
`

export default props => (
  <Container>
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
      <MobileNav>
        <img
          src={ArchiveLogoSmall}
          alt="Archive Studio"
          onClick={props.toggleMenu}
        />
      </MobileNav>
    </Menu>
  </Container>
)
