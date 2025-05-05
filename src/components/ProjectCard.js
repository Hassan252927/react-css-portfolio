import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import '../assets/images/styles/ProjectCard.css'

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <Card className="project-card" elevation={3}>
      <CardActionArea 
        component="a" 
        href={projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
          className="project-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="project-title">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="project-description">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;