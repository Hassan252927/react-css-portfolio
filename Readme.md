# Portfolio Website (Full Stack)

A full-stack personal portfolio website with React frontend and Node.js/Express backend.

## Features

- **Full Stack Application**: React frontend with Node.js/Express backend
- **RESTful API**: Backend provides API endpoints for all portfolio data
- **MongoDB Database**: Data stored in MongoDB using Mongoose
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

### Frontend (React)
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
│   ├── Skills.js         # Skills showcase
│   ├── Projects.js       # Projects showcase
│   ├── Experience.js     # Work experience
│   └── Contact.js        # Contact information and form
├── services/             # API service functions
│   ├── api.js            # Axios instance
│   ├── educationService.js # Education API functions
│   ├── skillService.js   # Skills API functions
│   ├── projectService.js # Projects API functions
│   └── experienceService.js # Experience API functions
├── context/              # React contexts
│   └── PageTitleContext.js # Context for page titles
└── assets/               # Static assets
    ├── images/           # Image files
    └── styles/           # Component-specific CSS
```

### Backend (Node.js/Express)
```
portfolio-backend/
│
├── controllers/          # Request handlers
│   ├── educationController.js
│   ├── skillController.js
│   ├── projectController.js
│   └── experienceController.js
│
├── models/               # Mongoose schemas
│   ├── Education.js
│   ├── Skill.js
│   ├── Project.js
│   └── Experience.js
│
├── routes/               # API routes
│   ├── educationRoutes.js
│   ├── skillRoutes.js
│   ├── projectRoutes.js
│   └── experienceRoutes.js
│
├── config/
│   └── db.js             # Database connection
│
├── .env                  # Environment variables
├── server.js             # Entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install frontend dependencies:
```
npm install
```

3. Install backend dependencies:
```
cd portfolio-backend
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the frontend root with:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Create a `.env` file in the backend root with:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/portfolio
     ```

5. Start both servers:
   - Use the provided batch script: `start-servers.bat`
   - Or start them separately:
     ```
     # Backend
     cd portfolio-backend
     npm run dev
     
     # Frontend (in a new terminal)
     cd ..
     npm start
     ```

6. Open [http://localhost:3000](http://localhost:3000) to view the frontend in the browser.
7. API endpoints are available at [http://localhost:5000/api](http://localhost:5000/api).

## API Endpoints

### Education
- `GET /api/education` - Get all education records
- `GET /api/education/:id` - Get a single education record
- `POST /api/education` - Create a new education record
- `PUT /api/education/:id` - Update an education record
- `DELETE /api/education/:id` - Delete an education record

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a single skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Work Experience
- `GET /api/experiences` - Get all work experiences
- `GET /api/experiences/:id` - Get a single work experience
- `POST /api/experiences` - Create a new work experience
- `PUT /api/experiences/:id` - Update a work experience
- `DELETE /api/experiences/:id` - Delete a work experience

## Technologies Used

### Frontend
- React 18
- Material UI v5
- React Router DOM v6
- Axios for API requests
- CSS for styling
- Yup for form validation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- Dotenv for environment variables

## Best Practices Implemented

- Functional components with hooks
- CSS variables for theming
- Responsive design using media queries
- Lifting state up when needed
- Semantic HTML structure
- Component-specific CSS
- Lazy loading for routes