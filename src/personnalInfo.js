import React from 'react'
import './personnalInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const PersonnalInfo = () => {
    const infos = {
        profession: 'Web Developer',
        age: 25,
        website: 'https://tboittin.github.io/',
        mail: 'tboittin@gmail.com',
        mailto: 'mailto:tboittin@gmail.com',
        phone: '+33 6 23 39 79 78',
        phoneCall: 'tel:+33623397978',
        linkedIn: 'https://www.linkedin.com/in/thomasboittin/'
    }

    return (
        <div>
            <Container>
                <ul className="text-center">
                    <li className="mb-2" >{infos.profession} - {infos.age} years old</li>
                </ul>
                <ul className="d-flex justify-content-around">
                    <li className="d-inline"><a href={infos.website}  target="_blank">
                        <FontAwesomeIcon
                            icon={faLaptopCode}
                            size="2x"
                        />
                        <span className="d-none">: Website Here</span>
                    </a></li>
                    <li className="d-inline"><a href={infos.mailto}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size="2x"
                        />
                        <span className="d-none">: {infos.mail}</span>
                    </a></li>
                    <li className="d-inline"><a href={infos.phoneCall}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            size="2x"
                        />
                        <span className="d-none">: {infos.phone}</span>
                    </a></li>
                </ul>
            </Container>
        </div>
    )
}

export default PersonnalInfo