import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Kenny Whyte</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Original
          template done by{' '}
          <a
            href="https://smakosh.com/?ref=portfolio-dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Smakosh
          </a>{' '}
          | Business vector created by freepik -{' '}
          <a href="https://www.freepik.com/free-photos-vectors/business">
            www.freepik.com
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${icon}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
