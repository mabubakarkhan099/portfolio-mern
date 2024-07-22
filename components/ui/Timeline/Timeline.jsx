import "./Timelins.scss"

function Timeline() {
  return (
    <div className="timelines-wrapper relative">
        <div className="timeline">
            <div className="grid grid-cols-5">
                <div className="left-side col-span-2 mb-3">
                    <div className="institute grid gap-3">
                        <hi className="institute-name fw-bold sm:text-4xl">Cognizant, Mumbai</hi>
                        <p className="date text-gray-500">Sep 2020 - June 2021</p>
                    </div>
                </div>
                
                <div className="timeline-gfx col-span-1 flex flex-col items-center ">
                    {/* <div className="line " ></div> */}
                    <div className="center-dot bg-white outline outline-gray-900 outline-dashed">
                        <div className="circle"></div>
                    </div>
                    <div className="line " ></div>

                </div>
                <div className="right-side col-span-2 mb-3">
                <div className="institute grid gap-3">
                        <hi className="designation fw-bold sm:text-4xl">Experience Designer</hi>
                        <p className="description text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati maiores quas praesentium earum commodi? Omnis consectetur sapiente laborum ullam rem?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline