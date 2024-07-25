const express = require('express');
const router = express.Router();
const { createProject, getAllProject } = require('../controller/projectController');
const upload = require('../middleware/multer.config');

router.post('/create-projects', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'screenshots', maxCount: 10 }]), createProject);
router.get('/getAll-projects', getAllProject);

module.exports = router;
