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
				{/* <h4>I spend my time coding, travelling and stargazing. I also write about lessons I've learned on my Software Developer journey</h4> */}
				<h4>Software Engineer | Observational Astronomer | Nintendo Enthusiast</h4>
				{/* { <Button as="a" target="_blank" rel="noopener noreferrer"  href="https://angry-saha-b0191c.netlify.com/">
					Check out my blog
				</Button> } */}
			</Details>
			<Thumbnail>
				<img src={dev} alt="I spend my time coding, travelling and stargazing." />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
