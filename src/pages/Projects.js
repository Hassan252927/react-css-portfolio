import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import ProjectCard from '../components/ProjectCard';
import projectImage1 from '../assets/images/image1.png';
import projectImage3 from '../assets/images/image3.png';
import projectImage4 from '../assets/images/image4.png';

function Projects() {
  const { setPageTitle } = usePageTitle();
  
  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  const projects = [
    {
      id: 1,
      title: 'Text-To-Image Model',
      description: 'An AI-powered model that transforms text into visuals.',
      imageUrl: projectImage1,
      projectUrl: 'https://hassan-gen-ai.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Material UI.',
      imageUrl: projectImage3,
      projectUrl: 'https://hassan-portfolio-one.vercel.app/'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication and payment integration.',
      imageUrl: projectImage4,
      projectUrl: 'https://meal-hut.netlify.app/'
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" className="neon-text" gutterBottom>
        Projects
      </Typography>
      
      <Typography variant="body1" paragraph>
        Explore my latest projects that showcase my skills and capabilities.
      </Typography>
      
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;