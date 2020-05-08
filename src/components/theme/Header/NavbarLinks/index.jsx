import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    {/* <AnchorLink href="https://dev.to/kawhyte">Blog</AnchorLink> */}
    {/* <AnchorLink href="#projects">Personal Projects</AnchorLink> */}
    {/* <a href="https://dev.to/kawhyte" className="href">#100DaysOfCode</a> */}
    <a href="https://dev.to/kawhyte" className="href">Blog</a>
    <a href="https://codepen.io/kawhyte" className="href">Code Pen</a>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)

export default NavbarLinks
