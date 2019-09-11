import { Link } from "gatsby"
import styled from "styled-components"

export const BackButton = styled(Link)`
  font-family: "Grotesk Regular";
  text-transform: uppercase;
  font-size: ${props => props.theme.fs_small};
  position: absolute;
  bottom: 2rem;
  right: 2.5rem;
  z-index: 10000000;
`
export const AllProjectsLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.6rem;

  align-self: flex-start;
  margin-top: 1rem;
`
