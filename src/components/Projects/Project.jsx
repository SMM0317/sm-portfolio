// Project.js
import React from 'react';

const Project = ({ title, description, imgurl, linkText, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="project" onClick={handleClick}>
      <div className="project-container">
        <div className="project-logo">
          <img src={imgurl} alt="logo" />
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;
