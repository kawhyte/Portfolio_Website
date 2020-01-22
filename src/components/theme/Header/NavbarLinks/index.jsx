import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    {/* <AnchorLink href="https://dev.to/kawhyte">Blog</AnchorLink> */}
    <AnchorLink href="#projects">Personal Projects</AnchorLink>
    {/* <a href="https://dev.to/kawhyte" className="href">Mini Projects</a> */}
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)

export default NavbarLinks
