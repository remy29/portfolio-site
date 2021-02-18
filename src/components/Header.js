import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'
import pdf from '../images/Resume.pdf'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} className="icon rainforest-logo"></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Arthur Remy</h1>
        <p>Full Stack Web Developer Located in Vancouver, BC</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
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
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
        <li>
            <button 
              type="submit"
              onClick={() => window.open(pdf, "_blank")}
            >
              Resume
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
