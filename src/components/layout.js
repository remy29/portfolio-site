import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { property: 'og:image', content: 'https://www.arthur-remy.com/static/landing-c3a7805bea25ea89239ae1e4ee2be5ba.png' },
             /*  { property: 'Arthur Remy - Portfolio Site', content: 'Portfolio' },
              { property: 'Arthur Remy - Portfolio Site', content: 'Portfolio' },
              { property: 'Arthur Remy - Portfolio Site', content: 'Portfolio' }, */
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
