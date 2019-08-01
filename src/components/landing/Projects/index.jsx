import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'Common'
import apps from './apps.json'
import 'tachyons';
import { enabled } from 'ansi-colors';


export const Projects = () => {
	const {
		github: {
			repositoryOwner: {
				repositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
		{
			github {
				repositoryOwner(login: "kawhyte") {
					repositories(
						first: 6
						orderBy: { field: STARGAZERS, direction: DESC}
					
					) {
						edges {
							node {
								id
								homepageUrl
								name
								url
								description
								stargazers {
									totalCount
								}
								forkCount
							}
						}
					}
				}
			}
		}
	`)
	return (
		<Wrapper as={Container} id="projects">
			<h2>Personal Projects</h2>
			<Grid >
				{apps.map(({ name, description,image, demo, github, technology }) => (
					<Item 
						// key={node.id}
						// as="a"
						// href={node.url}
						// target="_blank"
						// rel="noopener noreferrer"
					>
						<Card  >
							<Content>
							<img src= {image} alt="main_photo" />
								<p><span class="highlight">{name}</span>&nbsp;- {description}</p>
								<p><span class="highlight">Technology Used:</span>&nbsp;{technology}</p>
							</Content>
							<Stats >
								<div >
								
									{/* <img src={starIcon} alt="stars" /> */}
									{/* <span>{node.stargazers.totalCount}</span> */}
									<Button as="a" href={demo} target="_blank" rel="noopener noreferrer">Demo</Button> 
									
								</div>
								<div>
								<Button as="a" href={github} target="_blank" rel="noopener noreferrer" value ="show">Github</Button> 
									{/* <img src={forkIcon} alt="forks" /> */}
							
									{/* <span>{node.forkCount}</span> */}
								</div>
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
