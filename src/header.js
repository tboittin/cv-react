import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import PersonnalInfo from './personnalInfo'
import './header.css'

const Header = () => {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col 
                        xs={{
                            span: 12,
                        }}
                        lg={{
                            span:"auto",
                        }}
                        className="text-center"
                    >
                        <h1 className="title">Thomas Boittin</h1>
                    </Col>
                    <Col
                        xs={{
                            span: "auto",
                        }}
                        lg={{
                            span:"auto"
                        }}

                        className="text-center text-lg-right"
                    >
                        <PersonnalInfo />
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header