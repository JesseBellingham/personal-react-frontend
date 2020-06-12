import React, { Component } from "react"
import ConsoleLine from "../ConsoleLine"

class Console extends Component {
  static displayName = Console.name

  render() {
    return (
      <div className="console"
        style={{
          borderTop: "10px solid #ccc",
          borderBottom: "10px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <ConsoleLine lineTitle="jesse.origin" lineDescription="New Zealand"/>
        <ConsoleLine lineTitle="jesse.currentLocation" lineDescription="Melbourne, Australia" />
        <ConsoleLine
          lineTitle="jesse.education"
          lineDescription="Bachelor of Information Technology (Software Development)"
        />
        <ConsoleLine
          lineTitle="jesse.skills"
          lineDescription="['.Net Core', 'React.js', 'jQuery', 'PostgreSQL']"
        />
        <ConsoleLine
          lineTitle="jesse.interests"
          lineDescription="['coding', 'gaming', 'live music', 'snowboarding', 'powerlifting']"
        />
        <ConsoleLine
          lineTitle="jesse.email"
          lineDescription="hello@jessebellingham.com"
          lineLink="mailto:hello@jessebellingham.com"
        />
      </div>
    )
  }
}

export default Console
