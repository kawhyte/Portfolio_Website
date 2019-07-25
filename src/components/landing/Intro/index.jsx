import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi there, I’m Kenny!</h1>
				<h4>I spend my time coding, travelling and stargazing.</h4>
				{/* <Button as={AnchorLink} href="#contact">
					Click me
				</Button> */}
			</Details>
			<Thumbnail>
				<img src={dev} alt="I spend my time coding, travelling and stargazing." />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
