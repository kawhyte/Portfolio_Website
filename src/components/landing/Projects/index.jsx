import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'Common'

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
			<Grid>
				{edges.map(({ node }) => (
					<Item
						// key={node.id}
						// as="a"
						// href={node.url}
						// target="_blank"
						// rel="noopener noreferrer"
					>
						<Card>
							<Content>
							{/* <img src={starIcon} alt="stars" /> */}
								<h4>{node.name}</h4>
								<p>{node.description}</p>
								
						{/* <div > 
    <img src={`https://robohash.org/$test?set=set2`} alt='Ticket'></img>

    <div>
        <h2>kenny</h2>
        <p>kebnny</p>
    </div>
</div> */}
							</Content>
							<Stats>
								<div>
									{/* <img src={starIcon} alt="stars" /> */}
									{/* <span>{node.stargazers.totalCount}</span> */}
									<a href={node.homepageUrl} target="_blank" rel="noopener noreferrer"> Live Demo  |  | </a>
									
									
								</div>
								<div>
									{/* <img src={forkIcon} alt="forks" /> */}
									<a href={node.url}>View on Github</a>
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
