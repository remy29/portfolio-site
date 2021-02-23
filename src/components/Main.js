import PropTypes from 'prop-types'
import React from 'react'
import profile from '../images/Profile-Pic.png'
import tadoo from '../images/tadoo-banner.jpg'
import tadooMobile from '../images/mobile-tadoo-banner.jpg'
import matchr from '../images/matchr-banner.jpg'
import scheduler from '../images/scheduler-banner.jpg'
import jungle from '../images/jungle-banner.jpg'
import tweeter from '../images/tweeter-banner.jpg'
import tinyapp from '../images/tinyapp-banner.jpg'
import pdf from '../images/Resume.pdf'
import FadeIn from 'react-fade-in'
import { createMedia } from "@artsy/fresnel"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      warningEmail: false,
      warningName: false,
      warningMessage: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.warningMessage = this.warningMessage.bind(this)
    this.warningMessageFade = this.warningMessageFade.bind(this)
  }

  mobileBanner = function () {
    if (window !== undefined) {
      if (window.innerWidth < 736) {
        return tadooMobile
      } 
    }
    return tadoo;
  }

  warningMessageFade = function(type) {}

  warningMessage = function(type) {
    if (this.state.warningMessage && type === 'message') {
      setTimeout(() => {
        this.setState({ warningMessage: false })
      }, 5000)
      return (
        <FadeIn>
          <h6 className="contact-error">
            Please Write a Message Before Sending
          </h6>
        </FadeIn>
      )
    }
    if (this.state.warningEmail && type === 'email') {
      setTimeout(() => {
        this.setState({ warningEmail: false })
      }, 5000)
      return (
        <FadeIn>
          <h6 className="contact-error">Please Enter Your Email Address</h6>
        </FadeIn>
      )
    }
    if (this.state.warningName && type === 'name') {
      setTimeout(() => {
        this.setState({ warningName: false })
      }, 5000)
      return (
        <FadeIn>
          <h6 className="contact-error">Please Enter Your Name</h6>
        </FadeIn>
      )
    }
  }

  handleSubmit = function(e) {
    if (!e.target.message.value) {
      e.preventDefault()
      this.setState({ warningMessage: true })
    }

    if (!e.target.email.value) {
      e.preventDefault()
      this.setState({ warningEmail: true })
    }

    if (!e.target.name.value) {
      e.preventDefault()
      this.setState({ warningName: true })
    }
  }

  render() {

    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        sm: 0,
        md: 480,
        lg: 736,
        xl: 980,
      },
    })

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    const linkedInIcon = function (project) {

      let link; 

      switch (project) {
        case "Matchr": 
          link = "https://github.com/remy29/matcher";
          break;
        case "Tadoo":
          link = "https://github.com/remy29/smart-to-do-list";
          break;
        case "Jungle":
          link = "https://github.com/remy29/jungle";
          break;
        case "Scheduler":
          link = "https://github.com/remy29/scheduler";
          break;
        case "Tweeter":
          link = "https://github.com/remy29/tweeter";
          break;
        case "TinyApp":
          link = "https://github.com/remy29/tinyapp";
          break;
      }

      return (
        <ul className="icons">
          <li>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="icon fa-github"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
        </ul>
      )
    }

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

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="portfolio"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <div className="portfolio-header">
            <h2 className="minor">Tadoo</h2>
            {linkedInIcon("Tadoo")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/smart-to-do-list" target="_blank">
              <MediaContextProvider>
                <Media at="sm">
                  <img src={tadooMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="lg">
                  <img src={tadoo} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / HTML5 / SCSS / jQuery / jQuery UI / PostgreSQL 
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Matchr</h2>
            {linkedInIcon("Matchr")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/matcher" target="_blank">
              <img src={matchr} alt="" />
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / HTML5 / SCSS / React / React Native / Sockets.io / PostgreSQL 
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Jungle</h2>
            {linkedInIcon("Jungle")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/jungle" target="_blank">
              <img src={jungle} alt="" />
            </a>  
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Ruby on Rails / bcrypt / Bootstrap / Capybara / Poltergeist / Rspec / PostgreSQL
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Scheduler</h2>
            {linkedInIcon("Scheduler")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/scheduler" target="_blank">
              <img src={scheduler} alt="" />
            </a>  
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            React / Axios / Express.js / Classnames / Normalize / Storybook / PostgreSQL
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Tweeter</h2>
            {linkedInIcon("Tweeter")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/tweeter" target="_blank">
              <img src={tweeter} alt="" />
            </a>   
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / jQuery / PostgreSQL
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">TinyApp</h2>
            {linkedInIcon("TinyApp")}
          </div>
          <span className="image main">
            <a href="https://github.com/remy29/tinyapp" target="_blank">
              <img src={tinyapp} alt="" />
            </a>   
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / Morgan / EJS / bcrypt
          </p>
          <h3 className="minor">About</h3>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div className="about-contact">
            {icons}
            <button type="submit" onClick={() => window.open(pdf, '_blank')}>
              Resume
            </button>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main profile-pic">
            <img className="profile"src={profile} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          <div className="about-contact">
            {icons}
            <button type="submit" onClick={() => window.open(pdf, '_blank')}>
              Resume
            </button>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            action="/submit/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <div className="warning-div">{this.warningMessage('name')}</div>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <div className="warning-div">{this.warningMessage('email')}</div>
            </div>
            <div id="message-field" className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div className="warning-div">{this.warningMessage('message')}</div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {icons}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
