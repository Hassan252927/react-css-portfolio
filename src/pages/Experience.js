import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Chip, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert
} from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import { getAllExperiences } from '../services/experienceService';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Experience() {
  const { setPageTitle } = usePageTitle();
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setPageTitle('Experience');
  }, [setPageTitle]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const data = await getAllExperiences();
        setExperiences(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load experience data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchExperiences();
  }, []);

  // Fallback data if API fails or returns empty
  const fallbackExperiences = [
    {
      company: 'Tech Innovators',
      position: 'Frontend Developer',
      location: 'Remote',
      startDate: '2022-06-01',
      endDate: null,
      current: true,
      description: 'Working on modern web applications using React and related technologies.',
      responsibilities: [
        'Developing responsive UIs using React and Material UI',
        'Implementing state management with Redux',
        'Writing unit tests with Jest and React Testing Library'
      ]
    },
    {
      company: 'Web Solutions Inc.',
      position: 'Web Developer Intern',
      location: 'Lahore, Pakistan',
      startDate: '2021-05-01',
      endDate: '2021-12-31',
      current: false,
      description: 'Gained experience in full-stack web development.',
      responsibilities: [
        'Assisted in frontend development with HTML, CSS, and JavaScript',
        'Learned backend development with Node.js and Express',
        'Participated in code reviews and team meetings'
      ]
    }
  ];

  const experienceData = experiences.length > 0 ? experiences : fallbackExperiences;

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
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
        Work Experience
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <Typography variant="body1" paragraph>
        My professional journey and work experiences.
      </Typography>
      
      <Grid container spacing={3}>
        {experienceData.map((exp, index) => (
          <Grid item xs={12} key={exp._id || index}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <WorkIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h2">
                    {exp.position}
                  </Typography>
                  {exp.current && (
                    <Chip 
                      label="Current" 
                      color="primary" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  )}
                </Box>
                
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                      <BusinessIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1">
                        {exp.company}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                      <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1">
                        {exp.location}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                      <DateRangeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Divider sx={{ mb: 2 }} />
                
                <Typography variant="body1" paragraph>
                  {exp.description}
                </Typography>
                
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <>
                    <Typography variant="h6" gutterBottom>
                      Key Responsibilities
                    </Typography>
                    
                    <List dense>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={responsibility} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Experience; 