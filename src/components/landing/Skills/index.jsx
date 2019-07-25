import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Hi there, I’m Kenny! I spend my time coding, travelling and stargazing." />
			</Thumbnail>
			<Details>
				<h1>About</h1>
				<p>
				Currently, I am focused on developing web applications with C#, .NET Core, Node.js, and React. 
				I am a Software Developer by day and an amateur astronomer by night.
				I have a background in Graphic Design which is used to significantly improve the customer's experience. 
				</p>
				<Button as={AnchorLink} href="#contact">
					Check out my blog posts
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
