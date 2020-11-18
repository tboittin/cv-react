import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Reorientation from "./reorientation";

import './educationList.css';

const EducationList = () => {
  const courses = [
    {
      id: 1,
      title: "Udemy - Complete Next.js with React & Node",
      period: '2019',
      link: 'https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/',
      status: "ongoing",
      projects: [
        {
          id: 2,
          title: "Portfolio Website",
          description:
            "A Server Side Rendered Website database with CRUD operations and auth0 authentification. Front-End made with Next.js, backend with Express.js. Front-end app hosted on vercel,back-end on heroku and database on mongoDb.",
        },
        {
          id: 1,
          title: "Movie DB",
          description:
            "A Server Side Rendered Movie database with CRUD operations",
        },
      ],
    },
    // {
    //     id: 2,
    //     title: "CodeCademy - React course",
    //     status: "complete",
    //     projects: [
    //         {
    //             id: 1,
    //             title: "ravenous",
    //             description: "A clone of Yelp. A CodeCademy course project using the Yelp API. HTTP requests and OAuth.",
    //         },
    //         {
    //             id: 2,
    //             title: "jammming",
    //             description: "A project which enable Spotify users to create a playlist by accessing the Spotify library and save it to their account.",
    //         },
    //     ]
    // },
    // {
    //     id: 3,
    //     title: "CodeCademy - Web Development Path",
    //     status: "",
    //     projects: [
    //         {
    //             id: 1,
    //             title: "Colmar Academy",
    //             description: "A flexbox website featuring the non existent Colmar Academy.",
    //         },
    //         {
    //             id: 2,
    //             title: "Excursion",
    //             description: "A promotional page for a fictional app called Excursion.",
    //         },
    //     ]
    // },
    // {
    //     id: 4,
    //     title: "OpenClassroom - Create a modern and professional website with WordPress 5",
    //     status: "",
    //     projects: [
    //         {
    //             id: 1,
    //             title: "FitActive",
    //             description: `It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.`,
    //         },
    //     ]
    // },
  ];

  const istom = {
    title: "ISTOM - Master of International Agro-Development",
    period: "2011-2016",
    link: "http://www.istom.com/1.cfm?p=618-our-school-istom",
    description:
      "Design, Implementation, Management of Agro-Economic Development Projects in developing countries.",
  };

  const coursesRender = () => {
    return courses.map((course) => (
      <Container key={course.id} className="course">
        <h4><a href={course.link}>{course.title}</a> - {course.period}</h4>
        {/* <h5>
                        {(course.status.length>0) && (course.status)}
                    </h5> */}
        {course.projects.map((project) => (
          <Container key={project.id} className="project">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
          </Container>
        ))}
      </Container>
    ));
  };

  const istomRender = () => {
    return (
      <Container>
        <h4>
          <a href={istom.link}>{istom.title}</a> - {istom.period}
        </h4>
        <Container className="project">
          <p>{istom.description}</p>
        </Container>
      </Container>
    );
  };

  return (
    <div className="EducationList">
      <h3>Education & Projects</h3>
      {courses.length > 0 && coursesRender()}
      <Reorientation />
      {istomRender()}
    </div>
  );
};

export default EducationList;
