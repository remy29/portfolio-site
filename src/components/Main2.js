import PropTypes from 'prop-types'
import React from 'react'
import pdf from '../images/Resume.pdf'

class Main2 extends React.Component {
  render() {

    const icons = (
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/arthur-remy/"
            target="_blank"
            rel="noreferrer"
            className="icon fa-linkedin"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/remy29"
            className="icon fa-github"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/remy29"
            target="_blank"
            rel="noreferrer"
            className="icon fa-pencil"
          >
            <span className="label">Dev.to</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rainforestsake/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    )

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        
        id="main"
        style={{ display: 'flex' }}
      >
        <article
          id="thanks"
          className={"active timeout thanks"}
          style={{ display: 'none' }}
        >
          <h2 className="major">Thanks</h2>
          <p>Thank You! <br /> Your message has been succesfully submitted. I will get in touch as soon as possible</p>
          <div className="about-contact">
            {icons}
            <button type="submit" onClick={() => window.open(pdf, '_blank')}>
              Resume
            </button>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main2.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main2
