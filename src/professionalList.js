import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Reorientation from "./reorientation";

import "./professionalList.css";

const ProfessionalList = () => {
  const devExperience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "",
      country: "France",
      period: "2019 - ongoing",
      description: `
                Web Freelancer: React.js - Next.js - Node.js - Socket.io
            `,
      subprojects: [
        {
          title: "Qui Sont-iels ?",
          partner: "Spielact Festival",
          partnerLink: "https://www.spielact.ch/",
          period: "2020",
          link: "https://qsie-client.vercel.app/",
          description:
            "A game to discuss around gender and orientation stereotypes. Made with React.js & node.js using socket.io for players interactions.",
        },
        {
          title: "Trust Over Time",
          partner: "EPFL+Ecal Lab",
          partnerLink:
            "https://www.ecal.ch/en/1473/ecal/epfl-ecal-lab/descriptif",
          period: "2020",
          link:
            "http://dhcenter-unil-epfl.com/en/2020/05/28/online-survey-trust-over-time-project/",
          description:
            "An online survey about fake news perceptions. Using React.js for layout and javascript to monitor user data.",
        },
      ],
    },
    {
      id: 2,
      title: "COBOL Analyst Developer",
      company: "Adaming Conseil",
      country: "France",
      period: "2018 - 2019",
      description: `
        Product evolution as part of planned actions in a 5 person team.
        Development and unit tests.
        Reporting.
        Technical correction related to user Demands.
        Go live patches.
      `,
    },
  ];

  const istomExperience = [
    {
      id: 1,
      title: "Agronomy Engineer",
      company: "IIRR",
      country: "Philippines",
      period: "2016",
      description: `
                Short term impact study - family farming support project - Cavite province.
                Monitoring tool development - better reporting & improved project management.            
            `,
    },
  ];

  const devRender = () => {
    return (
      <div>
        {devExperience.map((devExperience) => (
          <Container key={devExperience.id} className="experience pr-0">
            <h4>
              {devExperience.title}
              {devExperience.company.length > 0 &&
                " - " + devExperience.company}
            </h4>
            <Container className="pr-0">
              <p>
                {devExperience.country} - {devExperience.period}
              </p>
              <p>{devExperience.description} </p>
              {devExperience.subprojects &&
                devExperience.subprojects.map((subproject) => (
                  <Container>
                    <h5 className="mb-0">
                      <a href={subproject.link}>{subproject.title}</a> made for{" "}
                      <a href={subproject.partnerLink}>{subproject.partner}</a>{" "}
                      - {subproject.period}
                    </h5>
                    <p className="pl-2">{subproject.description}</p>
                  </Container>
                ))}
            </Container>
          </Container>
        ))}
      </div>
    );
  };

  const istomRender = () => {
    return (
      <div>
        {istomExperience.map((istomExperience) => (
          <Container key={istomExperience.id} className="experience pr-0">
            <h4>
              {istomExperience.title}{" "}
              {istomExperience.company.length > 0 &&
                " - " + istomExperience.company}
            </h4>
            <Container className="pr-0">
              <p>
                {istomExperience.country} - {istomExperience.period}
              </p>
              <p>{istomExperience.description} </p>
            </Container>
          </Container>
        ))}
      </div>
    );
  };

  return (
    <div className="ProfessionalList">
      <h3>Professional Experiences</h3>
      {devExperience.length > 0 && devRender()}
      {istomExperience.length > 0 && devExperience.length > 0 && (
        <Reorientation />
      )}
      {istomExperience.length > 0 && istomRender()}
    </div>
  );
};

export default ProfessionalList;
