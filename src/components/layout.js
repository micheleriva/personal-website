import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #121212;
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
