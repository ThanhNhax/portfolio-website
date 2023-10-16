import { projectsData } from '@/app/data/projects';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className=''>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            description={project.description}
            imgUrl={project.image}
            title={project.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
