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
  } catch (error) {
    return res.status(500).json({ error: error || error.message, data: null, message: 'Error in creating project.' });
  }
};

const getAllProject = async (req, res) => {
  try {
    console.log("log1");
    const projects = await Project.find();
    console.log("log2");
    return res.status(200).json({ error: null, data: projects, message: 'Projects retrieved successfully.' });
    
   } catch (error) {
    return res.status(500).json({ error: error || error.message, data: null, message: 'Error in getting project.' });
  }

}

module.exports = { createProject, getAllProject };
