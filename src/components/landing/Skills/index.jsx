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
				Software Engineer with strong problem-solving skills and a drive to innovate. 
				Passionate about technology and delivering quality software that is easy to use, maintainable and extensible.
				</p>
				<Button as={AnchorLink} href="#contact">
					Check out my blog posts
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
