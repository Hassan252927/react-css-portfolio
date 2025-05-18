import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const appTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#00ffea',
      },
      secondary: {
        main: '#ff00ff',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#ffffff',
        paper: darkMode ? '#1a1a1a' : '#f5f5f5',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#121212',
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header 
          toggleDrawer={toggleDrawer} 
          toggleTheme={toggleTheme} 
          darkMode={darkMode} 
        />
        <Box sx={{ display: 'flex' }}>
          <SideNav 
            open={drawerOpen} 
            onClose={toggleDrawer} 
            isMobile={isMobile} 
          />
          <Box 
            component="main" 
            className="main-content"
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              mt: 8,
              width: { sm: `calc(100% - ${isMobile ? '0px' : '240px'})` },
              ml: { sm: isMobile ? '0' : '240px' }
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;