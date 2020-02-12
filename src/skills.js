import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './skills.css'
import { Container } from 'react-bootstrap'
// import MapSkills from './mapSkills'


const Skills = () => {
    const skills = [
        {
            id: '1',
            name: 'Autodidact'
        },
        // {
        //     id: '2',
        //     name: 'Teamwork'
        // },
        {
            id: '3',
            name: 'French & English'
        },
    ]
    return(
        <div className="skills">
            {/* <h3>Skills</h3> */}
            <Container>
                <ul className="pl-0 text-center d-flex flex-wrap justify-content-around">
                    {skills.map(skill => (
                        <li key={skill.id} className="m-1 badge-pill badge-secondary">{skill.name}</li>
                    ))}
                </ul>
            {/* <MapSkills skills={skills} /> */}
            </Container>
        </div>
    )
}

Skills.propTypes = {
    skills: PropTypes.array,
}


export default Skills