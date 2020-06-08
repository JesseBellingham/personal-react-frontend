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
            subtitle='Working within the UK Payroll team, I have worked on features and platform improvements'
          />
          <ExperienceUnit
            logo={acurusLogo}
            colour='#d10033'
            title='Acurus'
            link='https://www.acurus.com.au/'
            timeperiod='May 2018 - Nov 2019'
            subtitle='Learnt the ins and outs of product development and
              built various features including a completely new product.'
          />
          <ExperienceUnit
            logo={quantumItLogo}
            title='Quantum IT'
            link='https://www.quantumit.com.au/'
            timeperiod='Nov 2016 - May 2017'
            subtitle='Built real time GPS tracking on the iOS app,
              all consumer facing web modules and external APIs in
              this early stage startup.'
          />
        </div>
        <div className='row'>
          <ExperienceUnit
            logo={idpLogo}
            title="IDP Education"
            link='https://www.idp.com/'
            timeperiod='Nov 2016 - Feb 2017'
            subtitle='Some stuff'
          />          
          <ExperienceUnit
            logo={intutoLogo}
            title="Intuto"
            link='https://www.intuto.com/'
            timeperiod='Sept 2015 - Oct 2016'
            subtitle='Some stuff'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
