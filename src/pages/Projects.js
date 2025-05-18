import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress, Alert } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../services/projectService';
import projectImage1 from '../assets/images/image1.png';
import projectImage3 from '../assets/images/image3.png';
import projectImage4 from '../assets/images/image4.png';

function Projects() {
  const { setPageTitle } = usePageTitle();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getAllProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  // Fallback data if API fails or returns empty
  const fallbackProjects = [
    {
      id: 1,
      title: 'Text-To-Image Model',
      description: 'An AI-powered model that transforms text into visuals.',
      image: projectImage1,
      liveUrl: 'https://hassan-gen-ai.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Material UI.',
      image: projectImage3,
      liveUrl: 'https://hassan-portfolio-one.vercel.app/'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication and payment integration.',
      image: projectImage4,
      liveUrl: 'https://meal-hut.netlify.app/'
    },
  ];

  const projectsData = projects.length > 0 ? projects : fallbackProjects;

  // Map API data to component props
  const mappedProjects = projectsData.map(project => ({
    id: project._id || project.id,
    title: project.title,
    description: project.description,
    imageUrl: project.image || getDefaultImage(project.id || 0),
    projectUrl: project.liveUrl || '#'
  }));

  function getDefaultImage(index) {
    const images = [projectImage1, projectImage3, projectImage4];
    return images[index % images.length];
  }

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" className="neon-text" gutterBottom>
        Projects
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <Typography variant="body1" paragraph>
        Explore my latest projects that showcase my skills and capabilities.
      </Typography>
      
      <Grid container spacing={3}>
        {mappedProjects.map((project) => (
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