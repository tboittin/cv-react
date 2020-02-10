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
                    description: "Movie DB description. enean mattis ut turpis quis tincidunt. Mauris a nisi et diam tincidunt pulvinar. Nullam nec erat in tellus finibus mattis sit amet eu nulla.",
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
                    description: "ravenous description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut laoreet nibh. Suspendisse scelerisque semper commodo. Cras cursus arcu id ultricies lobortis.",
                },
                {
                    id: 2,
                    title: "jammming",
                    description: "jammming description Aenean massa felis, pharetra vitae molestie vitae, luctus eu lorem. Etiam pharetra dui id dolor porttitor tempus. Donec efficitur blandit pretium.",
                }
            ]

        }
    ]

    const courseRender = () => {
        return (
            courses.map(course => (
                <Container key={course.id} className="course">
                    <h4>{course.title} - {course.status}</h4>
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
            {courseRender()}
        </div>
    )
}

export default EducationList