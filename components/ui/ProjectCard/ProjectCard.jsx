import { FaArrowRightLong } from "react-icons/fa6";
import "./ProjectCard.scss";
import { Button } from "@/components/ui/button";

const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) ), url('/product_image_1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
function ProjectCard() {
  return (
    <div className="project-card rounded-3xl mobile:h-60 sm:h-72 p-5 bg-red-200 flex flex-col justify-between" style={style}>
      <div className="btn">
        <button className="float-right aspect-square p-4 text-xl text-orange-400 rounded-full outline outline-orange-400 bg-transparent hover:text-white hover:bg-orange-400 duration-200">
          <FaArrowRightLong />
        </button>
      </div>
      <div className="info text-white">
        <h1 className="title text-5xl fw-bold tracking-wider">Vinact</h1>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, voluptates.</p>
      </div>
    </div>
  );
}

export default ProjectCard;
