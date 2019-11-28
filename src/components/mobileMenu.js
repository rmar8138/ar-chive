import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BackButton } from "./buttons"
import archiveLogo from "../assets/logos/ar.svg"

const Container = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Menu = styled.div`
  background-color: ${props => props.theme.lightGrey};
  height: 100vh;
  display: flex;
  flex-direction: column;

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
  position: fixed;
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 100000;
`

const Logo = styled.img`
  width: 5.5rem;
  position: fixed;
`

export default props => (
  <Container>
    <Menu>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/ar.chive_/">Instagram</a>
        </li>
      </ul>
      <MobileNav>
        <Logo
          src={archiveLogo}
          alt="ar-chive logo"
          onClick={props.toggleMenu}
        />
        <BackButton onClick={props.toggleMenu}>Close</BackButton>
      </MobileNav>
    </Menu>
  </Container>
)
