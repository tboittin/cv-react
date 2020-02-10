import './App.css'
import React from 'react'
import Header from './header'
import Profile from './profile'
import LanguagesAndTools from './languagesAndTools'
import Skills from './skills'
import EducationList from './educationList'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Col, Row} from 'react-bootstrap'
import ProfessionalList from './professionalList'
// import NextSVGIcon from './nextSvgIcon'
// import Divider from './divider'

const CV = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Header />
                        {/* <Divider /> */}
                        {/* <NextSVGIcon/> */}
                        <Profile />
                        <LanguagesAndTools />
                        <Skills />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col
                        lg={{
                            span:6
                        }}
                        className="order-2 order-lg-1"
                    >
                        <ProfessionalList />
                    </Col>
                    <Col
                        lg={{
                            span:6
                        }}
                        className="order-1 order-lg-2"
                    >
                        <EducationList />
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
    

export default CV