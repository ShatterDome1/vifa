/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./css/layout.css"
import Header from "./header"

const Layout = ({ children, currentPageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            english {
              link
              name
            }
            romanian {
              link
              name
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        pageTitle={currentPageTitle}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
