"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ProjectCard.scss";
import { Button } from "@/components/ui/button";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

function ProjectCard({ projectData }) {
  // console.log("cardData", projectData);
  const { title, description, type, frame_work, website_link, github_link, thumbnail, screenshots } = projectData;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogDisplayImage, setDialogDisplayImage] = useState("");
  const [dialogImage, setDialogImage] = useState(`${thumbnail}`);

  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) ), url(${thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  const hoverCardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) ), url('/product_image_1.png')`,
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section>
      {/* <Button onClick={openDialog}>Click</Button> */}

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogContent>
          <DialogHeader>
            {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
            <DialogDescription>
              <div className="grid mobile:grid-cols-1 sm:grid-cols-5 gap-3">
                <div className="col-span-1 bg-red flex  sm:flex-col mobile:flex-row gap-2">
                  <div
                    className={`${dialogImage === thumbnail ? "outline outline-orange-400" : null} hover:outline hover:outline-orange-400 h-[fit-content] rounded rounded-lg overflow-hidden`}
                    onClick={() => {
                      setDialogImage(thumbnail);
                    }}
                  >
                    <Image src={thumbnail} width={800} height={0} responsive className="w-full" alt="project thumbnail" />
                  </div>
                  {screenshots.map((link, index) => {
                    return (
                      <div
                        className={`${link === dialogImage ? "outline outline-orange-400" : null} hover:outline hover:outline-orange-400 h-[fit-content] rounded rounded-lg overflow-hidden`}
                        onClick={() => {
                          setDialogImage(link);
                        }}
                        key={index}
                      >
                        <Image src={link} width={800} height={400} responsive className="w-full h-auto" key={index} alt="image linked to project" />
                      </div>
                    );
                  })}
                </div>
                <div className="col-span-4 text-left">
                  <div className="outline outline-orange-400 rounded rounded-lg overflow-hidden">
                    <Image src={dialogImage} width={800} height={400} responsive className="w-full aspect-[3/2] object-cover" alt="an image leading to project" />
                  </div>
                  <div className="mt-4 grid gap-1">
                    <h1 className="text-4xl text-black fw-bold">{title}</h1>
                    <div className="flex gap-5">
                      <p className="text-gray-500">{frame_work}</p>
                      <p className="underline">{type} Project</p>
                    </div>
                    <div className="flex gap-3 text-black">
                      <Link href={github_link} target="_blank" className="hover:text-orange-400 flex gap-2 items-center">
                        <FaGithub /> Github
                      </Link>
                      {website_link ? (
                        <Link href={website_link} target="_blank" className="hover:text-orange-400 flex gap-2 items-center">
                          <FaGlobe /> Website
                        </Link>
                      ) : null}
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose onClick={closeDialog} className="text-red-500" >Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className={`project-card rounded-3xl mobile:h-60 sm:h-72 p-5 flex flex-col justify-between bg-cover relative overflow-hidden bg-gradient-to-b from-transparent to-slate-800`} onClick={openDialog} >
        <Image src={thumbnail} fill className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" alt="thumbnail image" />

        <div className="btn">
          <button className="float-right aspect-square p-4 text-xl text-orange-400 rounded-full outline outline-orange-400 bg-transparent hover:text-white hover:bg-orange-400 duration-200">
            <FaArrowRightLong />
          </button>
        </div>
        <div className="info text-white">
          <h1 className="title text-5xl fw-bold tracking-wider">{title}</h1>
          <p className="description">{frame_work}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;

{
  /* <motion.div className="project-card rounded-3xl mobile:h-60 sm:h-72 p-5 relative overflow-hidden flex flex-col justify-between duration-200 ease-in-out" whileHover={{scale: "1.1"}} onClick={openDialog}>
        <Image src={projectData.thumbnail}  fill className="absolute w-full h-56 -z-10" />
        <div className="btn">
          <button className="float-right aspect-square p-4 text-xl text-orange-400 rounded-full outline outline-orange-400 bg-transparent hover:text-white hover:bg-orange-400 duration-200">
            <FaArrowRightLong />
          </button>
        </div>
        <div className="info text-white">
          <h1 className="title text-5xl fw-bold tracking-wider">{projectData.title}</h1>
          <p className="description">kkk</p>
        </div>
      </motion.div> */
}
