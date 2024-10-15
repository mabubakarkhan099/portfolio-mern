import { Project } from "@/lib/model/projects";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// MongoDB connection
async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.connectionSRT);
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection error");
  }
}

// GET request to fetch all projects
export async function GET() {
  try {
    await connectDB();
    const data = await Project.find();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET request failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST request to upload file and create a new project
export async function POST(req) {
  try {
    await connectDB();

    // Use form data directly
    const data = await req.formData();

    // Extract fields and files
    const title = data.get("title");
    const description = data.get("description");
    const type = data.get("type");
    const frame_work = data.get("frame_work");
    const website_link = data.get("website_link") || "";
    const github_link = data.get("github_link");

    const thumbnailFile = data.get("thumbnail"); // Accessing the thumbnail file
    const screenshotFiles = data.getAll("screenshots"); // Accessing multiple screenshot files

    let thumbnailPath = "";
    let screenshotsPaths = []; // Array to store screenshots paths

    // Process the thumbnail file
    if (thumbnailFile && thumbnailFile.name) {
      const targetDir = path.join(process.cwd(), "public/projects");

      // Check if the directory exists, if not, create it
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const targetPath = path.join(targetDir, thumbnailFile.name);

      // Save the file to the public/projects folder
      const fileBuffer = Buffer.from(await thumbnailFile.arrayBuffer());
      fs.writeFileSync(targetPath, fileBuffer);

      thumbnailPath = `/projects/${thumbnailFile.name}`; // Relative path to be saved
    }

    // Process multiple screenshot files
    if (screenshotFiles && screenshotFiles.length > 0) {
      const targetDir = path.join(process.cwd(), "public/projects/screenshots");

      // Check if the directory exists, if not, create it
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      for (const screenshot of screenshotFiles) {
        if (screenshot && screenshot.name) {
          const targetPath = path.join(targetDir, screenshot.name);

          // Save each screenshot file to the public/projects/screenshots folder
          const fileBuffer = Buffer.from(await screenshot.arrayBuffer());
          fs.writeFileSync(targetPath, fileBuffer);

          // Save the relative path to the screenshots array
          screenshotsPaths.push(`/projects/screenshots/${screenshot.name}`);
        }
      }
    }

    // Create a new project using form data
    const project = new Project({
      title,
      description,
      type,
      frame_work,
      website_link,
      github_link,
      thumbnail: thumbnailPath, // Save the thumbnail file path to MongoDB
      screenshots: screenshotsPaths, // Save the array of screenshot paths
    });

    const result = await project.save();
    return NextResponse.json({ result, success: true }, { status: 201 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save project" },
      { status: 500 }
    );
  }
}
