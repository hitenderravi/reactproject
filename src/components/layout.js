/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./Reusable/Footer"
import Navbar from "./Reusable/Navbar"

const Layout=({children})=>(
  <>
  <Navbar />
  {children}
  <Footer superProp="2020"/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
