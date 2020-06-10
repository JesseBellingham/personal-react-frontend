import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Console from '../components/Console'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        
          <div className="panel-inner" style={{ padding: "8em 1em" }}>
              <p className='hello-world'>
                  Hello World!
              </p>
              <h1 className="name-header">
                  My name is Jesse
              </h1>
              <h2 style={{ textAlign: "center", color: "grey", marginBottom: "3em" }} >
                  I build web applications.
              </h2>
              <Console />
          </div>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
