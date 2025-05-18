const express = require('express');
const {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceController');

const router = express.Router();

router.route('/').get(getExperiences).post(createExperience);
router.route('/:id').get(getExperienceById).put(updateExperience).delete(deleteExperience);

module.exports = router; 