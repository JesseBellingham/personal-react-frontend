import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import './style.scss'

import xeroLogo from '../../assets/images/experience/xero-logo.png'
import acurusLogo from '../../assets/images/experience/acurus-logo.png'
import quantumItLogo from '../../assets/images/experience/quantumit-logo.png'
import idpLogo from '../../assets/images/experience/idp-logo.png'
import intutoLogo from '../../assets/images/experience/intuto-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row experience-top-row">
          <ExperienceUnit
            logo={xeroLogo}
            title='Xero'
            link='https://www.xero.com'
            timeperiod='Nov 2019 - present'
            subtitle='Working within the UK Payroll team, I am contributing towards features and platform improvements.'
          />
          <ExperienceUnit
            logo={acurusLogo}
            colour='#d10033'
            title='Acurus'
            link='https://www.acurus.com.au/'
            timeperiod='May 2018 - Nov 2019'
            subtitle='I was a key player in the initial development of the ANEX Customer Management Portal.'
          />
          <ExperienceUnit
            logo={quantumItLogo}
            title='Quantum IT'
            link='https://www.quantumit.com.au/'
            timeperiod='Nov 2016 - May 2017'
            subtitle='I contributed features and bugfix on the InPlace student placement software.'
          />
        </div>
        <div className='row'>
          <ExperienceUnit
            logo={idpLogo}
            title="IDP Education"
            link='https://www.idp.com/'
            timeperiod='Nov 2016 - Feb 2017'
            subtitle='I was contracted to assist with performance improvements in the IELTS test booking software.'
          />          
          <ExperienceUnit
            logo={intutoLogo}
            title="Intuto"
            link='https://www.intuto.com/'
            timeperiod='Sept 2015 - Oct 2016'
            subtitle='I was hired straight out of my tertiary studies, and contributed features and bugfixes to the Intuto LMS.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
