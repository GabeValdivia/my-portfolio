/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"

import Header from "./header"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body{
    font-family: 'Open Sans', sans-serif;
  }
`


const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <MainMenu />
    {children}
  </div>
)


export default Layout
