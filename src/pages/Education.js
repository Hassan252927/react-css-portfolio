import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Box,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert
} from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import SchoolIcon from '@mui/icons-material/School';
import { getAllEducation } from '../services/educationService';

function Education() {
  const { setPageTitle } = usePageTitle();
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const data = await getAllEducation();
        setEducation(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load education data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchEducation();
  }, []);

  // Fallback data if API fails or returns empty
  const fallbackEducation = [
    {
      degree: 'BSCS',
      institution: 'Information Technology University',
      startDate: '2023-01-01',
      endDate: '2027-01-01',
      description: 'Focusing on computer science fundamentals, algorithms, and software development.'
    }
  ];

  const educationData = education.length > 0 ? education : fallbackEducation;

  const courses = [
    'Data Structures and Algorithms',
    'Web Development with Bootstrap 5',
    'Database Management Systems',
    'Object-Oriented Programming'
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const getYearRange = (startDate, endDate) => {
    return `${formatDate(startDate)}-${formatDate(endDate)}`;
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
        Education
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Degree</TableCell>
                  <TableCell>Institution</TableCell>
                  <TableCell>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {educationData.map((edu, index) => (
                  <TableRow key={index}>
                    <TableCell>{edu.degree}</TableCell>
                    <TableCell>{edu.institution}</TableCell>
                    <TableCell>{getYearRange(edu.startDate, edu.endDate)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <SchoolIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Program Details
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph>
                {educationData[0]?.description || 'No description available'}
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                Key Courses
              </Typography>
              
              <Grid container spacing={2}>
                {courses.map((course, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper 
                      elevation={2} 
                      sx={{ 
                        p: 2, 
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Typography variant="body1">{course}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Education;