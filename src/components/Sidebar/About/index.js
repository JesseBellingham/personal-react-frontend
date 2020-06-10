import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A full stack software developer with a passion for clean, readable code.
          <div className="emoji">
            💻&nbsp;Coding<br />
            🎮&nbsp;Video games<br />
            🎸&nbsp;Live music<br />
            🏂&nbsp;Snowboarding
          </div>
        </div>
      </div>
    )
  }
}

export default About