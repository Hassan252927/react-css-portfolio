import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Container, Grid, Paper } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import profileImage from '../assets/images/image2.png';

function Home() {
  const { setPageTitle } = usePageTitle();
  
  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          my: 4
        }}
      >
        <Avatar 
          src={profileImage} 
          alt="Muhammad Hassan Uozair" 
          className="profile-img"
          sx={{ 
            width: 180, 
            height: 180, 
            mb: 2,
            border: 3,
            borderColor: 'primary.main'
          }}
        />
        
        <Typography variant="h3" component="h1" className="neon-text" gutterBottom>
          Muhammad Hassan Uozair
        </Typography>
        
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Full Stack Developer
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: '100%' }}>
          <Typography variant="body1" paragraph>
            Welcome to my portfolio! I am a passionate developer with expertise in web development,
            specializing in React, Material UI, and responsive design.
          </Typography>
          
          <Typography variant="body1" paragraph>
            My goal is to create intuitive and dynamic user experiences that solve real-world problems.
            I enjoy working with modern technologies and continuously learning new skills.
          </Typography>
        </Paper>
        
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
              <Typography variant="h6" className="neon-text" gutterBottom>
                Frontend
              </Typography>
              <Typography variant="body2">
                React, Material UI, HTML/CSS, JavaScript
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
              <Typography variant="h6" className="neon-text" gutterBottom>
                Backend
              </Typography>
              <Typography variant="body2">
                Node.js, Express, MongoDB
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
              <Typography variant="h6" className="neon-text" gutterBottom>
                Tools
              </Typography>
              <Typography variant="body2">
                Git, Docker, VS Code
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;