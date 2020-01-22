import React from 'react'
import { Layout, SEO } from 'Common'
import { Header } from 'Theme'
import { Intro, Skills, Contact, MiniProjects, Projects} from 'Components/landing'
import 'tachyons'
import { apps } from '../components/landing/Projects/apps'

export default () => (
	<Layout>
		<Header></Header>
		<SEO />
  
		{/* <Intro /> */}
		<MiniProjects />
	
		<Contact />
	</Layout>
)
