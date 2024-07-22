"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ProjectCard.scss";
import { Button } from "@/components/ui/button";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";

const cardStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) ), url('/product_image_1.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const hoverCardStyle={
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) ), url('/product_image_1.png')`,

}

const projectData = [{id: "1", title: "Vinact", description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}]
function ProjectCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogDisplayImage, setDialogDisplayImage] = useState("")

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

              <div className="grid grid-cols-4">

              </div>
              
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose onClick={closeDialog}>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <motion.div className="project-card rounded-3xl mobile:h-60 sm:h-72 p-5 flex flex-col justify-between" whileHover={hoverCardStyle} style={cardStyle} onClick={openDialog}>
        <div className="btn">
          <button className="float-right aspect-square p-4 text-xl text-orange-400 rounded-full outline outline-orange-400 bg-transparent hover:text-white hover:bg-orange-400 duration-200">
            <FaArrowRightLong />
          </button>
        </div>
        <div className="info text-white">
          <h1 className="title text-5xl fw-bold tracking-wider">Vinact</h1>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, voluptates.</p>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectCard;
