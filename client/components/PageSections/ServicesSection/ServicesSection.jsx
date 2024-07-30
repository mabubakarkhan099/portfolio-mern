import ServicesCard from "@/components/ui/ServicesCard/ServicesCard"
import "./ServicesSection.scss"
function ServicesSection() {
  return (
    <section className='services-section rounded-3xl z-[+2]' id="services-section">
        <div className='container py-10'>
            <div className="py-5 mb-10">
                <h1 className="text-5xl text-white fw-bold">My <span className="text-orange-400">Services</span></h1>
            </div>
            <div className="grid mobile:grid-cols-1 sm:grid-cols-3 gap-10">
                <ServicesCard title="Front end Dev" thumbnail="/services/service_1.png" />
                <ServicesCard title="Landing Page" thumbnail="/services/service_3.png" />
                <ServicesCard title="Design to Code" thumbnail="/services/service_2.png" />
            </div>
        </div>
    </section>
  )
}

export default ServicesSection