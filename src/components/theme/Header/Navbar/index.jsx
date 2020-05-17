import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <a className="flex" href="https://www.kennywhyte.com/">
        <img
          className="h-16 w-16"
          src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
          alt="Family"
        />
      </a>
      {/* Kenny Whyte */}
    </Link>

    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
