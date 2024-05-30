import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaAngular,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiSwift,
  SiPostgresql,
  SiNextdotjs,
  SiMongodb,
  SiSpring,
  SiDjango,
  SiGooglecloud,
  SiJavascript,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { LuFileJson } from "react-icons/lu";
import { FaGitAlt } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";

import "./styles/Technologies.css";

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Skills/Technologies</h2>
      <div className="tech-grid">
        <div className="tech-item">
          <FaJava /> Java
        </div>
        <div className="tech-item">
          <FaPython /> Python
        </div>
        <div className="tech-item">
          <SiCplusplus /> C++
        </div>
        <div className="tech-item">
          <SiCsharp /> C#
        </div>
        <div className="tech-item">
          <SiSwift /> Swift
        </div>
        <div className="tech-item">
          <PiFileSql /> SQL
        </div>
        <div className="tech-item">
          <FaReact /> React
        </div>
        <div className="tech-item">
          <SiNextdotjs /> NextJS
        </div>
        <div className="tech-item">
          <SiJavascript /> JavaScript
        </div>
        <div className="tech-item">
          <SiTypescript /> TypeScript
        </div>
        <div className="tech-item">
          <FaNodeJs /> NodeJS
        </div>
        <div className="tech-item">
          <FaAngular /> Angular
        </div>
        <div className="tech-item">
          <SiMysql /> MySQL
        </div>
        <div className="tech-item">
          <SiMongodb /> MongoDB
        </div>
        <div className="tech-item">
          <SiPostgresql /> PostgreSQL
        </div>
        <div className="tech-item">
          <SiSpring /> Spring Boot
        </div>
        <div className="tech-item">
          <SiDjango /> Django
        </div>
        <div className="tech-item">
          <FaAws /> AWS
        </div>
        <div className="tech-item">
          <SiGooglecloud /> GCP
        </div>
        <div className="tech-item">
          <FaDocker /> Docker
        </div>
        <div className="tech-item">
          <LuFileJson /> JSON
        </div>
        <div className="tech-item">
          <FaGitAlt /> Git
        </div>
        <div className="tech-item">
          <FaLinux /> Linux
        </div>
      </div>
    </section>
  );
};

export default Technologies;
