import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const Profile = () => {
    return (
        <div className="text-lg-center">
            {/* <h2>Profile</h2> */}
            <Container className="text-center">
                <p>
                    Enthusiastic web integrator. Former engineer in agronomy who decided to give his programming dreams a go. <br />
                    I like to create, experiment and evolve. I shifted toward web using MOOCs.
                </p>
            </Container>
        </div>
    )
}

export default Profile