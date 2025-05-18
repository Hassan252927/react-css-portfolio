import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress, Alert, Chip, Box, LinearProgress } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import { getAllSkills } from '../services/skillService';

function Skills() {
  const { setPageTitle } = usePageTitle();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    setPageTitle('Skills');
  }, [setPageTitle]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await getAllSkills();
        setSkills(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(skill => skill.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load skills data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchSkills();
  }, []);

  // Fallback data if API fails or returns empty
  const fallbackSkills = [
    {
      name: 'React',
      level: 'Advanced',
      category: 'Frontend',
      description: 'Building modern UIs with React and its ecosystem'
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      category: 'Backend',
      description: 'Server-side JavaScript with Express and MongoDB'
    },
    {
      name: 'CSS/SCSS',
      level: 'Advanced',
      category: 'Frontend',
      description: 'Styling web applications with modern CSS'
    },
    {
      name: 'Python',
      level: 'Intermediate',
      category: 'Programming',
      description: 'General-purpose programming and data analysis'
    },
  ];

  const skillsData = skills.length > 0 ? skills : fallbackSkills;
  
  // Get unique categories if API fails
  const fallbackCategories = [...new Set(fallbackSkills.map(skill => skill.category))];
  const categoriesList = categories.length > 0 ? categories : fallbackCategories;

  const getLevelPercentage = (level) => {
    switch (level) {
      case 'Expert':
        return 95;
      case 'Advanced':
        return 80;
      case 'Intermediate':
        return 60;
      case 'Beginner':
        return 35;
      default:
        return 50;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'success.main';
      case 'Advanced':
        return 'info.main';
      case 'Intermediate':
        return 'warning.main';
      case 'Beginner':
        return 'error.main';
      default:
        return 'primary.main';
    }
  };

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
        Skills
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <Typography variant="body1" paragraph>
        Here are my technical skills and competencies.
      </Typography>
      
      {categoriesList.map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {skillsData
              .filter(skill => skill.category === category)
              .map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill._id || skill.name}>
                  <Paper sx={{ p: 2 }} elevation={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6">{skill.name}</Typography>
                      <Chip 
                        label={skill.level} 
                        size="small" 
                        sx={{ bgcolor: getLevelColor(skill.level), color: 'white' }}
                      />
                    </Box>
                    
                    <LinearProgress 
                      variant="determinate" 
                      value={getLevelPercentage(skill.level)} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 5,
                        mb: 1,
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getLevelColor(skill.level)
                        }
                      }}
                    />
                    
                    <Typography variant="body2" color="text.secondary">
                      {skill.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default Skills; 