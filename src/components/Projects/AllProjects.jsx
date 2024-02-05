import React from "react";

import Project from "./Project";

import PROJECTSDATA from "../../data";

import "./Projects.css";

const AllProjects = () => {
	return (
    <section id="projects">
      <span className='skillText'>Projects</span>
      <div className='lineAnime'></div> 
		<div className="all-projects-container">
			{PROJECTSDATA.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						imgurl={project.imgurl}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
    </section>
	);
};

export default AllProjects;
