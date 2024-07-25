"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaHeading, FaInfo, FaCode, FaLink } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectForm() {
  const serverIP = process.env.NEXT_PUBLIC_SERVER_URL;
  const initialFormState = {
    title: "",
    description: "",
    type: "Real",
    frame_work: "",
    website_link: "",
    github_link: "",
    thumbnail: null,
    screenshots: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // Handle file input
      setFormData((prevState) => ({
        ...prevState,
        [name]: files
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleRadioChange = (e) => {
    if (e.target.checked) {
      const radioValue = e.target.value;

      setFormData((prevState) => ({
        ...prevState,
        type: radioValue,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!serverIP) {
        console.error('Server IP address is not defined');
        return;
      }

      // Create a FormData object and append all form data
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] instanceof FileList) {
          // Append each file separately
          for (let i = 0; i < formData[key].length; i++) {
            formDataToSend.append(key, formData[key][i]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      // Perform the POST request using axios
      const res = await axios.post(`${serverIP}/projects`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log('Post successful:', res.data);

      // Reset the form after successful submission
      setFormData(initialFormState);

    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <TextInput name="title" value={formData.title} icon={<FaHeading />} id="projectTitle" placeholder="Project Title (Keep it minimal)" required={true} onchange={handleFormChange} />
          <TextareaInput name="description" icon={<FaInfo />} id="projectDescription" placeholder="Project Description..." required={false} value={formData.description} onchange={handleFormChange} />
          <TextInput name="frame_work" value={formData.frame_work} icon={<FaCode />} id="ProjectFramework" placeholder="Enter Frameworks (Reactjs, NextJs, Tailwind, etc)" required={true} onchange={handleFormChange} />
          <TextInput name="github_link" value={formData.github_link} icon={<LuGithub />} id="ProjectGithub" placeholder="Enter Github Link (Required)" required={true} onchange={handleFormChange} />
          <TextInput name="website_link" value={formData.website_link} icon={<FaLink />} id="ProjectWebsite" placeholder="Enter Live Web Link (If Available)" required={false} onchange={handleFormChange} />

          <RadioGroup className="flex gap-4" defaultValue="Real" onChange={handleRadioChange}>
            <p className="fw-bold">Project Type</p>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Real" id="option-one" />
              <Label htmlFor="option-one">Real</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Practice" id="option-two" />
              <Label htmlFor="option-two">Practice</Label>
            </div>
          </RadioGroup>

          <div className="flex gap-3 items-center">
            <Label htmlFor="thumbnail" className="fw-bold">
              Thumbnail
            </Label>
            <Input type="file" id="thumbnail" className="" accept=".jpg, .jpeg, .png, .webp, .bmp" name="thumbnail" onChange={handleFormChange} required />
          </div>
          <div className="flex gap-3 items-center">
            <Label htmlFor="screenshots" className="fw-bold">
              Screenshots
            </Label>
            <Input type="file" id="screenshots" className="" multiple accept=".jpg, .jpeg, .png, .webp, .bmp" name="screenshots" onChange={handleFormChange} required />
          </div>
          <Button type="submit" className="bg-orange-400 hover:bg-orange-500">
            Add Project
          </Button>
        </div>
      </form>
    </>
  );
}

export default ProjectForm;

export function TextInput({ id, icon, placeholder, required, name, value, onchange }) {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Label htmlFor={id}>{icon}</Label>
        <Input type="text" name={name} value={value} id={id} required={required} placeholder={placeholder} onChange={onchange} />
      </div>
    </>
  );
}

export function TextareaInput({ id, icon, name, value, placeholder, required, onchange }) {
  return (
    <div className="flex gap-3 items-center">
      <Label htmlFor={id}>{icon}</Label>
      <Textarea name={name} value={value} id={id} required={required} placeholder={placeholder} onChange={onchange} />
    </div>
  );
}
