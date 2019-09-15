import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"
import { AllProjectsLink } from "./buttons"
import archiveLogo from "../assets/logos/ar.svg"

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

    @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
      width: 5.5rem;
    }
  }
`

const Navlist = styled.ul`
  font-size: ${props => props.theme.fs_medium};
  font-family: "Grotesk Light";
  flex: 1;
  list-style: none;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${props => props.theme.bp_mobile}) {
    font-size: ${props => props.theme.fs_small};
  }
`

export default () => (
  <Navbar>
    <Logo>
      <img src={archiveLogo} alt="ar-chive logo" />
    </Logo>
    {isBrowser ? (
      <Navlist>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <a href="/">instagram</a>
        </li>
        <li>
          <a href="/">shop</a>
        </li>
      </Navlist>
    ) : (
      <AllProjectsLink to="/projects">All</AllProjectsLink>
    )}
  </Navbar>
)
