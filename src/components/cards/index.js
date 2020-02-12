import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, 150px);
  grid-gap: 10px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, 220px);
  }
`

const CardContainer = styled.a`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;

  overflow: hidden;
`

const CardImage = styled.div`
  position: relative;
  width: 100%;

  background: ${props => `url(${props.image})`} no-repeat center center;
  background-size: cover;

  transition: 1s;

  &:hover {
    transform: scale(1.2);

    background-size: cover;
    background-blend-mode: saturation;

    filter: grayscale(100%);
  }
`

const Title = styled.h2`
  position: absolute;
  bottom: -2px;
  left: 18px;

  pointer-events: none;

  color: white;

  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 3px #000;
  letter-spacing: 0.6px;
  line-height: 18px;
`

export default ({ data }) => (
  <Nav>
    {data.map(({ image, url, title }) => (
      <CardContainer href={url} key={title} data-test="card_container">
        <CardImage image={image} data-test="card_image" />
        <Title data-test="card_title">{title}</Title>
      </CardContainer>
    ))}
  </Nav>
)
