import { Link } from "gatsby"
import styled from "styled-components"

export const BackButton = styled(Link)`
  font-family: "Grotesk Regular";
  text-transform: uppercase;
  font-size: ${props => props.theme.fs_small};
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  z-index: 10000000;
  outline: none;
`
export const AllProjectsLink = styled(Link)`
  font-family: "Grotesk Regular";
  text-transform: uppercase;
  font-size: ${props => props.theme.fs_small};
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  z-index: 10000000;
`
