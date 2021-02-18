import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main2 extends React.Component {
  render() {
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
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Your message has been succesfully submitted, thanks!!</p>
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
