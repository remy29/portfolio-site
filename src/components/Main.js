import PropTypes from 'prop-types'
import React from 'react'
import profile from '../images/Profile-Pic1.png'
import tadoo from '../images/tadoo-banner.jpg'
import tadooMobile from '../images/mobile-tadoo-banner.jpg'
import matchr from '../images/matchr-banner.jpg'
import matchrMobile from '../images/mobile-matchr-banner.jpg'
import scheduler from '../images/scheduler-banner.jpg'
import schedulerMobile from '../images/mobile-scheduler-banner.jpg'
import jungle from '../images/jungle-banner.jpg'
import landing from '../images/landing.jpg'
import jungleMobile from '../images/mobile-jungle-banner.jpg'
import tweeter from '../images/tweeter-banner.jpg'
import tweeterMobile from '../images/mobile-tweeter-banner.jpg'
import tinyapp from '../images/tinyapp-banner.jpg'
import tinyappMobile from '../images/mobile-tinyapp-banner.jpg'
import pdf from '../images/Resume.pdf'
import FadeIn from 'react-fade-in'
import { createMedia } from '@artsy/fresnel'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
import { FaCss3 } from '@react-icons/all-files/fa/FaCss3'
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'
import { FaBootstrap } from '@react-icons/all-files/fa/FaBootstrap'
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby'
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql'
import { DiRuby } from '@react-icons/all-files/di/DiRuby'
import { SiJquery } from '@react-icons/all-files/si/SiJquery'
import { SiStorybook } from '@react-icons/all-files/si/SiStorybook'
import { SiJest } from '@react-icons/all-files/si/SiJest'
import { SiSass } from '@react-icons/all-files/si/SiSass'

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

  mobileBanner = function() {
    if (window !== undefined) {
      if (window.innerWidth < 736) {
        return tadooMobile
      }
    }
    return tadoo
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
    // weird
    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        sm: 0,
        md: 1025,
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

    const linkedInIcon = function(project) {
      let link

      switch (project) {
        case 'Matchr':
          link = 'https://github.com/remy29/matcher'
          break
        case 'Tadoo':
          link = 'https://github.com/remy29/smart-to-do-list'
          break
        case 'Jungle':
          link = 'https://github.com/remy29/jungle'
          break
        case 'Scheduler':
          link = 'https://github.com/remy29/scheduler'
          break
        case 'Tweeter':
          link = 'https://github.com/remy29/tweeter'
          break
        case 'TinyApp':
          link = 'https://github.com/remy29/tinyapp'
          break
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
        <img src={landing} style={{ display: 'none' }} />

        {/* PORTFOLIO */}

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
            {linkedInIcon('Tadoo')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/smart-to-do-list"
              target="_blank"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={tadooMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={tadoo} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / HTML5 / SCSS / jQuery / jQuery UI /
            PostgreSQL
          </p>
          <h3 className="minor">About</h3>
          <p>
            Automagically sorting to-do list application. Using a custom-built
            algorithm, Tadoo makes a series of API calls and sorts the user’s
            to-dos into one of four categories: to eat, to read, to watch, or to
            buy. It uses PostgreSQL to archive past to-do's, which are
            accessible on an archive page. A smooth user experience is delivered
            using jQuery for animations and transitions.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Matchr</h2>
            {linkedInIcon('Matchr')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/matcher"
              target="_blank"
              rel="noreferrer"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={matchrMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={matchr} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Node.js / Express.js / HTML5 / SCSS / React / React Native /
            Sockets.io / PostgreSQL
          </p>
          <h3 className="minor">About</h3>
          <p>
            Matchr is an app allowing two or more users can connect and begin
            matching restaurants where they may want to eat. After selecting a
            category, a call is made to the yelp API, which returns a list of
            the most popular restaurants in the user’s area for that category.
            On a tinder-style interface, the users then approve or disapproves
            of each restaurant. When a match is found, WebSockets are employed
            to instantly notify all connected users. Past matches with each user
            are then stored in a PostgreSQL database and displayed on a past
            matches page.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Jungle</h2>
            {linkedInIcon('Jungle')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/jungle"
              target="_blank"
              rel="noreferrer"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={jungleMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={jungle} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            Ruby on Rails / bcrypt / Bootstrap / Capybara / Poltergeist / Rspec
            / PostgreSQL / HTML5 / SCSS
          </p>
          <h3 className="minor">About</h3>
          <p>
            Jungle is an e-commerce platform built with Ruby on Rails
            server-side web app framework. Unit testing is handled using Rspec.
            Integration / End-to-end tests are automated using Capybara combined
            with a headless Poletgeist browser. Jungle uses the Stripe API that
            handles payments.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Scheduler</h2>
            {linkedInIcon('Scheduler')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/scheduler"
              target="_blank"
              rel="noreferrer"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={schedulerMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={scheduler} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>
            React / Axios / Express.js / Classnames / Normalize / Storybook /
            PostgreSQL / Jest / Cypress / HTML5 / SCSS
          </p>
          <h3 className="minor">About</h3>
          <p>
            Scheduler is a simple appointment scheduling app built on a React
            frontend and a Node.js backend. Storybook was employed to
            procedurally develop each React component. The app is tested
            extensively using Jest for unit and integration testing. Cypress is
            used for automated end-to-end testing.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">Tweeter</h2>
            {linkedInIcon('Tweeter')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/tweeter"
              target="_blank"
              rel="noreferrer"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={tweeterMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={tweeter} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>Node.js / Express.js / jQuery / PostgreSQL / HTML5 / CSS3</p>
          <h3 className="minor">About</h3>
          <p>
            Tweeter is a simple, single-page Twitter clone. A project using
            HTML, CSS, JS, jQuery, and AJAX on the front-end / Node.js, Express,
            and MongoDB on the back end.
          </p>
          <div className="portfolio-header">
            <h2 className="minor">TinyApp</h2>
            {linkedInIcon('TinyApp')}
          </div>
          <span className="image main">
            <a
              href="https://github.com/remy29/tinyapp"
              target="_blank"
              rel="noreferrer"
            >
              <MediaContextProvider>
                <Media at="sm">
                  <img src={tinyappMobile} alt="" />
                </Media>
                <Media greaterThanOrEqual="md">
                  <img src={tinyapp} alt="" />
                </Media>
              </MediaContextProvider>
            </a>
          </span>
          <h3 className="minor">Stack</h3>
          <p>Node.js / Express.js / Morgan / EJS / bcrypt / HTML5 / CCS3</p>
          <h3 className="minor">About</h3>
          <p>
            TinyApp is a full-stack web application built with Node and Express
            that allows users to shorten long URLs. Works similarly to Bit.ly,
            TinyURL and others.
          </p>
          <div className="about-contact">
            {icons}
            <button type="submit" onClick={() => window.open(pdf, '_blank')}>
              Resume
            </button>
          </div>
          {close}
        </article>

        {/* ABOUT */}

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <h2 className="minor">Profile</h2>
          <span className="image main profile-pic">
            <img className="profile" src={profile} alt="" />
          </span>
          <p className="about-paragraph">
            Hi I'm Arthur,
            <br />
            I'm a web developer knowledgeable in both front and back end
            development with a unique background, and a passion for learning and
            programming. I am detail-oriented, dependable, and write clean, easy to read code.
          </p>
          <p className="about-paragraph">
            Not so long ago I made beer and sake for a living, now I make
            websites and apps. The main thing is that I'm always honing my
            skills, making things, learning things and continually growing.
          </p>
          <p className="about-paragraph">
            I'm located in Vancouver, BC, and am open to permanent and contract
            roles. Please do not hesitate to reach out on the site's contact
            page.
          </p>
          <div className="stack">
          <h2 className="minor">Stack</h2>
          <ul className="stack-list">
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="stack-header">React</h4>
                <FaReact className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="stack-header">HTML5</h4>
                <FaHtml5 className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <h4 className="stack-header">CSS3</h4>
                <FaCss3 className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://nodejs.org/"
                target="_blank"
              >
                <h4 className="stack-header">Node.js</h4>
                <FaNodeJs className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://getbootstrap.com/"
                target="_blank"
              >
                <h4 className="stack-header">Bootstrap</h4>
                <FaBootstrap className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://www.gatsbyjs.com/"
                target="_blank"
              >
                <h4 className="stack-header">Gatsby.js</h4>
                <SiGatsby className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://www.postgresql.org/"
                target="_blank"
              >
                <h4 className="stack-header">PostgreSQL</h4>
                <SiPostgresql className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://www.ruby-lang.org/"
                target="_blank"
              >
                <h4 className="stack-header">Ruby</h4>
                <DiRuby className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://storybook.js.org/"
                target="_blank"
              >
                <h4 className="stack-header">Storybook</h4>
                <SiStorybook className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://jestjs.io/"
                target="_blank"
              >
                <h4 className="stack-header">Jest</h4>
                <SiJest className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://jquery.com/"
                target="_blank"
              >
                <h4 className="stack-header">jQuery</h4>
                <SiJquery className="stack-icon" />
              </a>
            </li>
            <li className="stack-li">
              <a
                className="stack-link"
                href="https://sass-lang.com/"
                target="_blank"
              >
                <h4 className="stack-header">SASS</h4>
                <SiSass className="stack-icon" />
              </a>
            </li>
          </ul>
          <div className="about-contact">
            {icons}
            <button type="submit" onClick={() => window.open(pdf, '_blank')}>
              Resume
            </button>
          </div>
        </div>
          {close}
        </article>

        {/* CONTACT */}

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
