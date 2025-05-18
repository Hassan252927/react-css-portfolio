const express = require('express');
const {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../controllers/skillController');

const router = express.Router();

router.route('/').get(getSkills).post(createSkill);
router.route('/:id').get(getSkillById).put(updateSkill).delete(deleteSkill);

module.exports = router; 