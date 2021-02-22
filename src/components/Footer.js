import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Arthur Remy - Portfolio. Hosted on: <a href="https://www.netlify.com/" target="_blank">Netlify</a>. Built with: <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
