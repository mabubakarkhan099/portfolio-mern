import Image from "next/image"
import "./HireMeSection.scss"
import { Button } from "@/components/ui/button"

function HireMeSection() {
  return (
    <section className="bg-slate-100 mobile:rounded-none sm:rounded-3xl">
        <div className="container py-14">
            <div className="grid mobile:grid-cols-1 sm:grid-cols-5">
                <div className="personal-image sm:col-span-2">
                    <Image src="/personal_image.png" width={0} height={0} layout="responsive" />
                </div>
                <div className="personal-info sm:col-span-3">
                    <div className="grid mobile:gap-5 sm:gap-10">
                        <h1 className="mobile:text-3xl sm:text-6xl fw-bold">Why <span className="text-orange-400">Hire Me?</span></h1>
                        <div className="mobile:w-full sm:w-2/3 text-gray-500 text-xl">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, optio soluta. Nulla veniam possimus quidem. Fugiat expedita ratione ipsum iste, deleniti, possimus ut libero fugit nulla, harum necessitatibus sequi accusamus.</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="grid gap-2">
                                <h5 className="text-4xl fw-bold">450+</h5>
                                <p className="text-2xl text-gray-500">Projects Completed</p>
                            </div>
                            <div className="grid gap-2">
                                <h5 className="text-4xl fw-bold">450+</h5>
                                <p className="text-2xl text-gray-500">Projects Completed</p>    
                            </div>
                        </div>
                        <div>
                            <Button variant="outline" className="bg-transparent outline outline-2 outline-black text-xl fw-bold py-10 px-16 rounded-2xl hover:bg-orange-400" >Hire Me</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HireMeSection