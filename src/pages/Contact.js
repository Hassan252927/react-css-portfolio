import React, { useEffect } from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import ContactForm from '../components/ContactForum'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  const { setPageTitle } = usePageTitle();
  
  useEffect(() => {
    setPageTitle('Contact');
  }, [setPageTitle]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" className="neon-text" gutterBottom>
        Contact Me
      </Typography>
      
      <Typography variant="body1" paragraph>
        Feel free to reach out to me for any inquiries or collaboration opportunities.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
              <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="body1">
                 bscs23073@itu.edu.pk
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="body1">
                There is a Phone number here :)
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="body1">
                Lahore, Pakistan
              </Typography>
            </Box>
            
            <Typography variant="body2" sx={{ mt: 4 }}>
                Hello ! I'm Hassan and would like to connect with you. (^u^)
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;