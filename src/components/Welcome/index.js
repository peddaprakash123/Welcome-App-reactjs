import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onChange}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome