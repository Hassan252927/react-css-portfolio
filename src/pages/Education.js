import React, { useEffect } from 'react';
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
  Grid
} from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const { setPageTitle } = usePageTitle();
  
  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  const educationData = [
    {
      degree: 'BSCS',
      institution: 'Information Technology University',
      year: '2023-2027',
      description: 'Focusing on computer science fundamentals, algorithms, and software development.'
    }
  ];

  const courses = [
    'Data Structures and Algorithms',
    'Web Development with Bootstrap 5',
    'Database Management Systems',
    'Object-Oriented Programming'
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" className="neon-text" gutterBottom>
        Education
      </Typography>

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
                    <TableCell>{edu.year}</TableCell>
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
                {educationData[0].description}
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