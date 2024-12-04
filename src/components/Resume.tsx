import React from "react";
import { ResumeData } from "../interfaces/ResumeData";
import "../styles/Resume.css";

const Resume: React.FC<{ data: ResumeData }> = ({ data }) => {
  const {
    name,
    oneLineDescription,
    address,
    contactDetails,
    linkedIn,
    CarrerObjective,
    skillset,
    experiences,
    education,
    certifications,
    social,
  } = data;

  return (
    <div className="resume">
      <h1>{name}</h1>
      <h3>{oneLineDescription}</h3>
      <p>{address}</p>
      <p>Email: {contactDetails.email}</p>
      <p>LinkedIn: {linkedIn}</p>
      <p>Phone: {contactDetails.phone}</p>
      <h3 className="career-objective">Career Objective:</h3>
      <p>{CarrerObjective}</p>
      <p className="portfolio">
        Portfolio:{" "}
        <a href={contactDetails.portfolioPage} target="_blank" rel="noopener noreferrer">
          {contactDetails.portfolioPage}
        </a>
      </p>
      <section>
        <h2>Skills</h2>
        <ul>
          {skillset.map(({ title, proficiency }, index) => (
            <li key={index}>
              {title} - Proficiency: {proficiency}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        {experiences.map(({ id, role, company, location, workStyle, jobType, responsibilities }) => (
          <div key={id}>
            <h3>
              {role} at {company}
            </h3>
            <p>
              {location} | {workStyle} | {jobType}
            </p>
            <ul>
              {responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {education.map(({ university, title, branch, link, activities }, index) => (
          <div key={index}>
            <p>Board: {university}</p>
            <h3>{title}</h3>
            <p>Branch: {branch}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            <ul>
              {activities.map((act, idx) => (
                <li key={idx}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Certifications</h2>
        <div className="certifications">
          {certifications.map(({ title, other }, index) => (
            <p key={index}>
              {title} <br /> {other}
            </p>
          ))}
        </div>
      </section>
      <section>
        <h2>Social</h2>
        <p className="social">
          GitHub:{" "}
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            {social.github}
          </a>
        </p>
      </section>
    </div>
  );
};

export default Resume;
