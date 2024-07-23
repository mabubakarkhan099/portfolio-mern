const express = require('express');
const router = express.Router();
const { createProject } = require('../controller/projectController');
const upload = require('../middleware/multer.config');

router.post('/projects', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'screenshots', maxCount: 10 }]), createProject);

module.exports = router;
