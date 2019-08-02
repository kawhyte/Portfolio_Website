import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		{/* <AnchorLink href="https://angry-saha-b0191c.netlify.com/">About Me</AnchorLink> */}
		<AnchorLink href="#projects">Personal Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
