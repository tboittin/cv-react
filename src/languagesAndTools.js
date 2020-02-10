import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const LanguagesAndTools = () => {
    const toolsList = [
        {
            id: '1',
            icon: <FontAwesomeIcon icon={faReact}/>,
            name: 'React.js',
        },
        {
            id: '2',
            icon: '',
            name: 'Next.js',
        },
        {
            id: '3',
            name: 'React-BootStrap',
        },
        {
            id: '4',
            name: 'Git',
        },
        {
            id: '5',
            name: 'WordPress',
        },
        {
            id: '6',
            name: 'HTML & CSS',
        },
    ]

    return (
        <div className="languagesAndTools">
            {/* <h3>Languages and Tools</h3> */}
            <Container>
                <ul className="pl-0 text-center">
                    {toolsList.map(tool => (
                        <li key={tool.id}>
                            {tool.icon} {tool.name}
                        </li>
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

export default LanguagesAndTools