import { Button } from "@/components/ui/button";
import "./PortfolioProjects.scss";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
function PortfolioProjects() {
  return (
    <section>
      <div className="projects container py-14">
        <div className="grid grid-cols-2">
          <div className="heading">
            <h1 className="mobile:text-3xl sm:text-6xl fw-bold">
              Lets have a look at my <span className="text-orange-400">Portfolio</span>
            </h1>
          </div>
          <div className="btn flex justify-end items-center">
            <Button className="bg-orange-400 text-xl rounded-full py-7 px-7">See All</Button>
          </div>
        </div>
        <div className="grid mobile:grid-cols-1 sm:grid-cols-3 gap-5 py-5">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default PortfolioProjects;
