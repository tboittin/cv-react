import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const EducationList = () => {
    const courses = [
        {
            id: 1,
            title: "Udemy - Complete Next.js with React & Node",
            status: "ongoing",
            projects: [
                {
                    id: 1,
                    title: "Movie DB",
                    description: "Movie DB description.",
                },
            ]
        },
        {
            id: 2,
            title: "CodeCademy - React course",
            status: "complete",
            projects: [
                {
                    id: 1,
                    title: "ravenous",
                    description: "ravenous description.",
                },
                {
                    id: 2,
                    title: "jammming",
                    description: "jammming description.",
                },
            ]
        },
        {
            id: 3,
            title: "CodeCademy - Web Development Path",
            status: "",
            projects: [
                {
                    id: 1,
                    title: "Colmar Academy",
                    description: "A flexbox website featuring the non existent Colmar Academy.",
                },
                {
                    id: 2,
                    title: "Excursion",
                    description: "A promotional page for a fictional app called Excursion.",
                },
            ]
        },
        {
            id: 4,
            title: "OpenClassroom - Create a modern and professional website with WordPress 5",
            status: "",
            projects: [
                {
                    id: 1,
                    title: "FitActive",
                    description: `It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.`,
                },
            ]
        },
    ]

    const coursesRender = () => {
        return (
            courses.map(course => (
                <Container key={course.id} className="course">
                    <h4>
                        {course.title}
                    </h4>
                    <h5>
                        {(course.status.length>0) && (course.status)}
                    </h5>
                    {course.projects.map(project => (
                        <Container key={project.id} className="project">
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                        </Container>
                    ))}
                </Container>
            ))
        )
    }

    return(
        <div className="EducationList">
            <h3>Education & Projects</h3>
            {(courses.length>0) && (coursesRender())}
        </div>
    )
}

export default EducationList