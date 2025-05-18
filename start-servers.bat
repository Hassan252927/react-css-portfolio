@echo off
echo Starting Portfolio Application...
echo.

echo Note: MongoDB is not required for development testing.
echo The backend will use in-memory storage if MongoDB is not available.
echo.

echo Starting Backend Server...
start cmd /k "cd portfolio-backend && npm run dev"

echo.
echo Starting Frontend Server...
start cmd /k "npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Test the API at: http://localhost:5000/api/education
echo. 