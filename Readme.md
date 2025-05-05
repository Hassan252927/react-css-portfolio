# React Portfolio Website

A personal portfolio website built with React 18+, Material UI (MUI v5+), and React Router DOM v6, converted from an original HTML/CSS template.

## Features

- **Component-Based Architecture**: Well-structured components for better maintainability
- **Dynamic Routing**: Implemented with React Router DOM v6
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Material UI Components**: Uses MUI v5 for consistent UI elements
- **Dark/Light Theme**: Toggle between dark and light modes
- **Form Validation**: Contact form with validation using Yup
- **Context API**: Used for managing page titles and theme
- **Lazy Loading**: For improved performance

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Projects Page
![Projects Page](screenshots/projects.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## Project Structure

```
src/
├── App.js                # Main application component
├── index.js              # Entry point
├── index.css             # Global CSS
├── components/           # Reusable UI components
│   ├── Header.js         # AppBar with profile avatar
│   ├── SideNav.js        # Drawer with navigation
│   ├── Footer.js         # Footer with copyright
│   ├── ProjectCard.js    # Card component for projects
│   └── ContactForm.js    # Form with validation
├── pages/                # Page components
│   ├── Home.js           # Home page
│   ├── Education.js      # Education details
│   ├── Projects.js       # Projects showcase
│   └── Contact.js        # Contact information and form
├── context/              # React contexts
│   └── PageTitleContext.js # Context for page titles
└── assets/               # Static assets
    ├── images/           # Image files
    └── styles/           # Component-specific CSS
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/react-css-portfolio.git
cd react-css-portfolio
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React 18
- Material UI v5
- React Router DOM v6
- CSS for styling
- Yup for form validation

## Best Practices Implemented

- Functional components with hooks
- CSS variables for theming
- Responsive design using media queries
- Lifting state up when needed
- Semantic HTML structure
- Component-specific CSS
- Lazy loading for routes