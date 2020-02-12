import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const ProfessionalList = () => {
    const devExperience = [
        {
            id: 1,
            title: "Freelance Web Developer",
            company: "",
            country: "France",
            period: "2019 - ongoing",
            description: `
                Web Freelancer - React - WordPress - Static Website - SEO
            `,
        },
        {
            id: 2,
            title: "COBOL Analyst Developer",
            company: "Adaming Conseil",
            country: "France",
            period: "2018 - 2019",
            description: `
                Product evolution as part of planned actions.
                Development and unit tests.
                Modifications reporting in the development modules et through management tools.
                Correction technical related to user Demands.
                Go live patches.
            `,
        }
    ]
    
    const istomExperience = [
        {
            id: 1,
            title: "Agronomy Engineer",
            company: "IIRR",
            country: "Philippines",
            period: "2016",
            description: `
                Short term impact study for a family farming support project in the Cavite province, Philippines.
                Development of a monitoring tool allowing an improved reporting of the results and a better project management.            
            `,
        },
    ]

    const devRender = () => {
        return (
            <div>
                {devExperience.map(devExperience => (
                    <Container key={devExperience.id} className="experience">
                        <h4>
                            {devExperience.title}
                            {(devExperience.company.length>0)&&(' - ' + devExperience.company)}</h4>
                        <Container>
                            <p>{devExperience.country} - {devExperience.period}</p>
                            <p>{devExperience.description} </p>
                        </Container>
                    </Container>
                ))}
            </div>
        )
    }

    const istomRender = () => {
        return (
            <div>
                {istomExperience.map(istomExperience => (
                    <Container key={istomExperience.id} className="experience">
                        <h4>{istomExperience.title} {(istomExperience.company.length>0)&&(' - ' + istomExperience.company)}</h4>
                        <Container>
                            <p>{istomExperience.country} - {istomExperience.period}</p>
                            <p>{istomExperience.description} </p>
                        </Container>
                    </Container>
                ))}
            </div>
        )
    }

    const reorientation = () => {
        return(
            <div>
                <hr />
                <h5 className="text-center">
                    Programming Reorientation - 2018
                </h5>
                <hr />
            </div>
        )
    }

    return(
        <div className="ProfessionalList">
            <h3>Professional Experiences</h3>
            {(devExperience.length > 0) && devRender()}
            {((istomExperience.length > 0) && (devExperience.length > 0)) && reorientation()}
            {(istomExperience.length > 0) && istomRender()}
        </div>
    )
}

export default ProfessionalList