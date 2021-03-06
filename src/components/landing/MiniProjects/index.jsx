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
import styled, { css } from 'styled-components';


export const MiniProjects = () => {
	const StyledButton = styled(Button)`
	font-weight: normal;
	${props =>
	  props.disabled
		? css`color: #666666; background-color: #cccccc; border: 1px solid #999999; cursor:no-drop ;`
		: css`color: white;`
	};
  `;


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
			<h2>Small Projects</h2>
			<Grid >
				{apps.map(({ name, description,image, demo, github, technology, disableDemo, linkStatus }) => (
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
									
									<Button as="a" href={demo} target="_blank" rel="noopener noreferrer" >Demo</Button> 
									
								</div>
								<div>
								<StyledButton disabled={disableDemo} as={linkStatus} href={github} target="_blank" rel="noopener noreferrer"   > test Github</StyledButton> 
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
