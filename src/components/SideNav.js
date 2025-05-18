import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider 
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePageTitle } from '../context/PageTitleContext';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '../assets/images/styles/SideNav.css'


function SideNav({ open, onClose, isMobile }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setPageTitle } = usePageTitle();

  const navigationItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Skills', icon: <CodeIcon />, path: '/skills' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Experience', icon: <BusinessCenterIcon />, path: '/experience' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' }
  ];

  const handleNavClick = (text, path) => {
    navigate(path);
    setPageTitle(text);
    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <div className="sidenav-content">
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.text, item.path)}
              selected={location.pathname === item.path}
              className={location.pathname === item.path ? 'active-nav-item' : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      {/* Mobile drawer - temporary */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 240 },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Desktop drawer - permanent */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}

export default SideNav;