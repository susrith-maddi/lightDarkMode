// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: true}
  back = () => {
    this.setState(ps => ({dark: !ps.dark}))
  }
  backgorund = () => {
    return this.state.dark ? 'dark-mode' : 'light-mode'
  }
  render() {
    const hi = this.backgorund()
    const buttontext = this.state.dark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={hi}>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.back}>
          {buttontext}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
