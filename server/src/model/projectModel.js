const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['real', 'practice'],
    required: true,
  },
  frame_work: {
    type: String,
    required: true
  },
  websiteLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  githubLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  thumbnail: {
      type: String, 
      required: false
    },
    screenshots: [String] 
});


const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
