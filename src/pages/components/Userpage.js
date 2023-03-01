import React from 'react'
import UserNav from './UserNav'

import { Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Userpage() {
  return (
    <div>

        <UserNav />

        <div className='container'>
            <div className='Row'>
                <div className='col-lg-3 col-6'>
                    <div>
                        <Tabs
                        defaultActiveKey="home"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Home">
                            Home
                        </Tab>
                        <Tab eventKey="services" title="Services">
                            Services
                        </Tab>
                        <Tab eventKey="stylists" title="Stylists">
                            Stylists
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Profile
                        </Tab>
                        <Tab eventKey="contactus" title="Contact Us">
                            Contact Us
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            
                        </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userpage