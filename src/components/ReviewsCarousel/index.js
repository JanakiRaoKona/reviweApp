// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrow = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1,
        }
      }
      return {count: 0}
    })
  }

  rightArrow = () => {
    this.setState(prevState => {
      if (prevState.count < 3) {
        return {
          count: prevState.count + 1,
        }
      }
      return {count: 3}
    })
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    console.log(count)
    return (
      <div className="container">
        <div className="profile-container">
          <div>
            <button
              data-testid="leftArrow"
              className="button"
              onClick={this.leftArrow}
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="description">
            <h1 className="reviews">Reviews</h1>
            <img className="image" src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <div>
            <button
              data-testid="rightArrow"
              className="button"
              onClick={this.rightArrow}
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
