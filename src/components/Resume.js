import React from "react";
import resumePdf from "./resume/resume.pdf";
import "./styles/Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        View my resume{" "}
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
    </section>
  );
};

export default Resume;
