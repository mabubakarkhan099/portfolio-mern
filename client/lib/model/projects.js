import mongoose from "mongoose";
const projectsModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  frame_work: {
    type: String,
    required: true,
  },
  website_link: {
    type: String,
    // validate: {
    //   validator: function (v) {
    //     return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid URL!`
    // }
  },
  github_link: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (v) {
    //     return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid URL!`,
    // },
  },
  thumbnail: {
    type: String,
    required: false,
  },
  screenshots: [String],
});

export const Project = mongoose.models.projects || mongoose.model("projects", projectsModel);
