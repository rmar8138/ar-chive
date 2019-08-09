import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import archiveLogo from "../assets/logos/red.svg"

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  a {
    color: black;
  }
`

const Logo = styled.div`
  flex: 0 0 50%;
  align-self: flex-end;

  a {
    display: flex;
  }

  img {
    width: 7rem;
    align-self: flex-end;
  }
`

const Navlist = styled.ul`
  font-size: ${props => props.theme.fs_medium};
  font-family: "Grotesk Light";
  flex: 1;
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const BackButton = styled(Link)`
  font-family: "Grotesk Regular";
  text-transform: uppercase;
  font-size: ${props => props.theme.fs_small};
  position: absolute;
  bottom: 2rem;
  right: 2.5rem;
  z-index: 100;
`

export default props => (
  <Navbar>
    <Logo>
      <Link to="/">
        <img src={archiveLogo} alt="ar-chive logo" />
      </Link>
    </Logo>
    {!props.empty && (
      <Navlist>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <a href="#">instagram</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
      </Navlist>
    )}
  </Navbar>
)