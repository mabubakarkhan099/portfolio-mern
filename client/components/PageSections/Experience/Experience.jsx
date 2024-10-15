import Timeline from "@/components/ui/Timeline/Timeline"
import "./Experience.scss"

const experienceData = [
  {
    company: `Hello World Technologies`,
    date: `June 2024`,
    designation: `Next.js Web Dev`,
    description: `As a Next.js intern, I developed dynamic web applications using Next.js, focusing on server-side rendering and static site generation. I built reusable React components, integrated APIs, and optimized performance. Collaborating with cross-functional teams, I used Git for version control and engaged in code reviews. This role enhanced my skills in modern web development and teamwork.`
  },
]
function Experience() {
  return (
    <section className="experience-section">
        <div className="container py-10 grid gap-10">
            <div className=" heading mobile:text-2xl sm:text-5xl text-center fw-bold">
                <h1>My <span className="text-orange-400">Work Experience</span></h1>
            </div>
            {/* <div className="timeline">
                <p>Lorem ipsum dolor sit amet.</p>
            </div> */}
          <div>
            {experienceData.map((data, index)=>{
              return(
                <Timeline company={data.company} date={data.date} designation={data.designation} description={data.description} key={index} />

              )
            })}

          {/* <Timeline /> */}
          </div>
            
        </div>
    </section>
  )
}

export default Experience