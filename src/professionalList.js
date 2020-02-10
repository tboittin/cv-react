import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const ProfessionalList = () => {
    const experience = [
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
    
    const companyRender = (company) => {
        if (experience != "") {
            return (" - " + company)
        }
    }

    const professionRender = () => {
        return (
            experience.map(experience => (
                <Container key={experience.id} className="experience">
                    <h4>{experience.title} {companyRender(experience.company)}</h4>
                    <Container>
                        <p>{experience.period}</p>
                        <p>{experience.description} </p>
                    </Container>
                </Container>
            ))
        )
    }

    return(
        <div className="ProfessionalList">
            <h3>Professional Experiences</h3>
            {professionRender()}
        </div>
    )
}

export default ProfessionalList