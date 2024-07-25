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

    // Send success response with image URLs
    res.status(201).json({ 
      message: 'Project created successfully', 
      project: {
        ...newProject._doc,
        thumbnail: thumbnail ? `${req.protocol}://${req.get('host')}/${thumbnail}` : null,
        screenshots: screenshots.map(screenshot => `${req.protocol}://${req.get('host')}/${screenshot}`)
      }
    });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(400).json({ message: 'Error creating project', error: err.message });
  }
};

const getAllProject = async (req, res) => {
  try {
    const projects = await Project.find();

    // Send success response with image URLs
    const projectsWithUrls = projects.map(project => ({
      ...project._doc,
      thumbnail: project.thumbnail ? `${req.protocol}://${req.get('host')}/${project.thumbnail}` : null,
      screenshots: project.screenshots.map(screenshot => `${req.protocol}://${req.get('host')}/${screenshot}`)
    }));

    res.status(200).json({ projects: projectsWithUrls });
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(400).json({ message: 'Error fetching projects', error: err.message });
  }
};

module.exports = { createProject, getAllProject };

