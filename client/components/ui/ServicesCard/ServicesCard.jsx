import Image from "next/image"
import "./ServicesCard.scss"
import { FiArrowUpRight } from "react-icons/fi";

function ServicesCard() {
  return (
    <div className='service-card'>
      <div className="top-section mobile:pb-32 sm:pb-28 lg:pb-36 rounded-full">
        <div className="heading px-7 pt-7 pb-4 mobile:text-3xl sm:text-2xl lg:text-3xl text-white fw-bold">
          <h1>UI/UX Design</h1>
        </div>
          <hr className="my-3" />
      </div>
      <div className="bottom-section">
        <div className="image-wrapper">
          <Image src="/product_image_1.png" className="opacity-1" width={0} height={0} layout="responsive" />
        </div>
        <div className="goto-link flex items-center justify-center text-6xl text-white bg-gray-800 hover:bg-orange-400 transition-colors">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  )
}

export default ServicesCard