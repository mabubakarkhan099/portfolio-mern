import ServicesCard from "@/components/ui/ServicesCard/ServicesCard"
import "./ServicesSection.scss"
function ServicesSection() {
  return (
    <section className='services-section rounded-3xl'>
        <div className='container py-10'>
            <div className="py-5 mb-10">
                <h1 className="text-5xl text-white fw-bold">My <span className="text-orange-400">Services</span></h1>
            </div>
            <div className="grid mobile:grid-cols-1 sm:grid-cols-3 gap-10">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
        </div>
    </section>
  )
}

export default ServicesSection