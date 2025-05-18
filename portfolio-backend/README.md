# Portfolio Backend

A Node.js + Express backend for a personal portfolio website.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Features

- RESTful APIs for CRUD operations on:
  - Education
  - Skills
  - Projects
  - Work Experience
- MongoDB database integration
- CORS enabled for frontend integration

## Project Structure

```
portfolio-backend/
│
├── controllers/
│ ├── educationController.js
│ ├── skillController.js
│ ├── projectController.js
│ └── experienceController.js
│
├── models/
│ ├── Education.js
│ ├── Skill.js
│ ├── Project.js
│ └── Experience.js
│
├── routes/
│ ├── educationRoutes.js
│ ├── skillRoutes.js
│ ├── projectRoutes.js
│ └── experienceRoutes.js
│
├── config/
│ └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

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

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolio
   ```
4. Start the server:
   ```
   npm run dev
   ```

## Frontend Integration

1. Use Axios in the frontend to connect to the backend
2. Store base URL in `.env` file: `REACT_APP_API_URL=http://localhost:5000`

## Testing

Use Postman to test all endpoints:
- Test CRUD operations for each entity
- Verify proper HTTP status codes and error messages 