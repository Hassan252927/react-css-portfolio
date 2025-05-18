const Education = require('../models/Education');

// In-memory fallback storage for development without MongoDB
let inMemoryEducation = [
  {
    _id: '1',
    institution: 'Information Technology University',
    degree: 'BSCS',
    fieldOfStudy: 'Computer Science',
    startDate: '2023-01-01',
    endDate: '2027-01-01',
    description: 'Focusing on computer science fundamentals, algorithms, and software development.',
    grade: 'A',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Check if MongoDB is connected
const isMongoConnected = () => {
  return !!Education.db && Education.db.readyState === 1;
};

// @desc    Get all education entries
// @route   GET /api/education
// @access  Public
const getEducations = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const educations = await Education.find({}).sort({ startDate: -1 });
      res.json(educations);
    } else {
      // Fallback to in-memory data
      res.json(inMemoryEducation);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single education entry
// @route   GET /api/education/:id
// @access  Public
const getEducationById = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const education = await Education.findById(req.params.id);
      
      if (!education) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      res.json(education);
    } else {
      // Fallback to in-memory data
      const education = inMemoryEducation.find(edu => edu._id === req.params.id);
      
      if (!education) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      res.json(education);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create education entry
// @route   POST /api/education
// @access  Public
const createEducation = async (req, res) => {
  try {
    const { institution, degree, fieldOfStudy, startDate, endDate, description, grade } = req.body;
    
    if (isMongoConnected()) {
      const education = await Education.create({
        institution,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        description,
        grade,
      });
      
      res.status(201).json(education);
    } else {
      // Fallback to in-memory data
      const newEducation = {
        _id: Date.now().toString(),
        institution,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        description,
        grade,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      inMemoryEducation.push(newEducation);
      res.status(201).json(newEducation);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update education entry
// @route   PUT /api/education/:id
// @access  Public
const updateEducation = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const education = await Education.findById(req.params.id);
      
      if (!education) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      
      res.json(updatedEducation);
    } else {
      // Fallback to in-memory data
      const index = inMemoryEducation.findIndex(edu => edu._id === req.params.id);
      
      if (index === -1) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      inMemoryEducation[index] = {
        ...inMemoryEducation[index],
        ...req.body,
        updatedAt: new Date().toISOString()
      };
      
      res.json(inMemoryEducation[index]);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete education entry
// @route   DELETE /api/education/:id
// @access  Public
const deleteEducation = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const education = await Education.findById(req.params.id);
      
      if (!education) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      await education.deleteOne();
      
      res.json({ message: 'Education removed' });
    } else {
      // Fallback to in-memory data
      const index = inMemoryEducation.findIndex(edu => edu._id === req.params.id);
      
      if (index === -1) {
        return res.status(404).json({ message: 'Education not found' });
      }
      
      inMemoryEducation.splice(index, 1);
      
      res.json({ message: 'Education removed' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
}; 