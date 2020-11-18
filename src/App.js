import './App.css'
import React from 'react'
import Header from './header'
import Profile from './profile'
import LanguagesAndTools from './languagesAndTools'
import Skills from './skills'
import EducationList from './educationList'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Col, Row} from 'react-bootstrap'
import ProfessionalList from './professionalList'
// import NextSVGIcon from './nextSvgIcon'
// import Divider from './divider'

const CV = () => {
    return(
        <div>
            <Row className="header-color py-3">
                <Col>
                    <Header />
                    {/* <Divider /> */}
                    {/* <NextSVGIcon/> */}
                    <Profile />
                    <LanguagesAndTools />
                    <Skills />
                </Col>
            </Row>
            <Row className="px-5 py-4">
                <Col
                    lg={{
                        span:6
                    }}
                    className="order-1 order-lg-1 my-3"
                >
                    <ProfessionalList />
                </Col>
                <Col
                    lg={{
                        span:6
                    }}
                    className="order-2 order-lg-2  my-3"
                >
                    <EducationList />
                    
                </Col>
            </Row>
        </div>
    )
}
    

export default CV