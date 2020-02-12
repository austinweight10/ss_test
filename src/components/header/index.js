import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderImg = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 20px 0;

  img {
    width: 85px;
  }
`

const Header = () => (
  <HeaderImg>
    <Link to="/" data-test="logo_link">
      <img src={"/SoleLogo.png"} data-test="logo_img" />
    </Link>
  </HeaderImg>
)

export default Header
