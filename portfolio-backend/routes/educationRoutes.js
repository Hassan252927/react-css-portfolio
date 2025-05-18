const express = require('express');
const {
  getEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require('../controllers/educationController');

const router = express.Router();

router.route('/').get(getEducations).post(createEducation);
router.route('/:id').get(getEducationById).put(updateEducation).delete(deleteEducation);

module.exports = router; 