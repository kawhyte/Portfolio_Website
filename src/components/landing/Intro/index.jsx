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
				<h1>Hi There, I’m Kenny!</h1>
				<h4>Software Developer | Amateur Astronomer | Weightlifter</h4>
				<Button as={AnchorLink} href="#contact">
					Click me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Kenny and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
