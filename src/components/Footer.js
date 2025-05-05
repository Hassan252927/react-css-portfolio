import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/images/styles/Footer.css'

function Footer() {
  return (
    <Box 
      component="footer" 
      className="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" className="neon-text">
          &copy; {new Date().getFullYear()} Muhammad Hassan Uozair. All rights reserved.
        </Typography>
        
        <Box className="social-links" sx={{ mt: 2 }}>
          <IconButton 
            component={Link} 
            href="https://github.com/hassan252927" 
            target="_blank" 
            color="inherit"
            className="social-icon"
          >
            <GitHubIcon />
          </IconButton>
          
          <IconButton 
            component={Link} 
            href="https://linkedin.com/" 
            target="_blank" 
            color="inherit"
            className="social-icon"
          >
            <LinkedInIcon />
          </IconButton>
          
          <IconButton 
            component={Link} 
            href="https://twitter.com" 
            target="_blank" 
            color="inherit"
            className="social-icon"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;