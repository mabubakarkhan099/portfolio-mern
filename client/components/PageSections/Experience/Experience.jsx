import Timeline from "@/components/ui/Timeline/Timeline"
import "./Experience.scss"

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

          <Timeline />
          <Timeline />
          </div>
            
        </div>
    </section>
  )
}

export default Experience