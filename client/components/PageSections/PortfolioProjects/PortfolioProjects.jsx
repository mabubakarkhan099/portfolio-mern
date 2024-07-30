'use client'
import { Button } from "@/components/ui/button";
import "./PortfolioProjects.scss";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function PortfolioProjects() {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/getAll-projects')
          // console.log("back data",res.data.projects);
        setProjectData(res.data.projects)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  
  return (
    <section>
      <div className="projects container py-14" id="portfolio-section">
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

        
          {/* <Image src="http://localhost:8000/uploads\\screenshots-1721970956699-45279244.png" width={50} height={30}  /> */}
        {projectData.map((data, index) => {
          return(
            <>
              <ProjectCard projectData={data} key={index} />
            </>
          )
        })}
{/*           
          {[...Array(5)].map((_, index) => (

            <ProjectCard />
            
          ))} */}

        </div>
      </div>
    </section>
  );
}

export default PortfolioProjects;
