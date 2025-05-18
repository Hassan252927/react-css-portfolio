const Education = require('../models/Education');

// @desc    Get all education entries
// @route   GET /api/education
// @access  Public
const getEducations = async (req, res) => {
  try {
    const educations = await Education.find({}).sort({ startDate: -1 });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single education entry
// @route   GET /api/education/:id
// @access  Public
const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    
    res.json(education);
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update education entry
// @route   PUT /api/education/:id
// @access  Public
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    
    const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    res.json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete education entry
// @route   DELETE /api/education/:id
// @access  Public
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    
    await education.deleteOne();
    
    res.json({ message: 'Education removed' });
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