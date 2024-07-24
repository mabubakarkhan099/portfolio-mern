const Project = require('../model/projectModel');

const createProject = async (req, res) => {
  try {
    const { title, description, type, frame_work, website_link, github_link } = req.body;
    const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0].path : null;
    const screenshots = req.files['screenshots'] ? req.files['screenshots'].map(file => file.path) : [];

    // Create a new project document
    const newProject = new Project({
      title,
      description,
      type,
      frame_work,
      website_link,
      github_link,
      thumbnail,
      screenshots
    });

    // Save the document to the database
    await newProject.save();

    // Send success response
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(400).json({ message: 'Error creating project', error: err.message });
  }
};

module.exports = { createProject };
