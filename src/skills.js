import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

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
                <ul className="pl-0 text-center">
                    {skills.map(skill => (
                        <li key={skill.id}>{skill.name}</li>
                    ))}
                </ul>
            </Container>
            <style jsx>
                {`
                ul {
                    list-style: none;
                }
                @media (min-width: 1200px){
                    ul {
                        justify-content: space-between;
                    }
                }`}
            </style>
        </div>
    )
}

export default Skills