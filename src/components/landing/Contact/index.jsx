import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
		<h2>Contact</h2>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="Software Engineer | Observational Astronomer | Nintendo Enthusiast" />
		</Thumbnail>
	</Wrapper>
)
