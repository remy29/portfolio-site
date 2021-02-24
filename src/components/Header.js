import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} className="icon rainforest-logo"></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Arthur Remy</h1>
        <p>Full Stack Web Developer Located in Vancouver, BC</p>
        <p>Site Under Construction</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button className="about-me-button"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button className="portfolio-button"
            onClick={() => {
              props.onOpenArticle('portfolio')
            }}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
