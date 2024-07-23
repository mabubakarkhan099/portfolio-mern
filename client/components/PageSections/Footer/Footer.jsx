import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";
import { FaSquareFacebook, FaSquareGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className="bg-neutral-900 mobile:rounded-none sm:rounded-t-3xl">
      <div className="container py-7">
        <div className="grid mobile:grid-cols-1 sm:grid-cols-2 gap-7">
          <div className="grid gap-5">
            <Image src="/khanlogo.png" width={150} height={50} />

            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita minima. Esse aliquid consequatur velit molestias. Ipsa corrupti voluptates cumque recusandae, eum maxime autem ullam dolor quisquam ipsum commodi deleniti.</p>

            <div className="social-links text-white text-2xl flex gap-2">
              <Link href="https://www.google.com/" target="_blank" className="hover:text-orange-400 duration-200">
                <FaSquareGithub />
              </Link>
              <Link href="https://www.google.com/" target="_blank" className="hover:text-orange-400 duration-200">
                <FaLinkedin />
              </Link>
              <Link href="https://www.google.com/" target="_blank" className="hover:text-orange-400 duration-200">
                <FaSquareFacebook />
              </Link>
              <Link href="https://www.google.com/" target="_blank" className="hover:text-orange-400 duration-200">
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
          <div className="grid mobile:grid-cols-3 sm:grid-cols-2" >
            <div className="text-white">
                <h2 className="text-orange-400 fw-bold mb-3">Navigation</h2>
                <div className="flex flex-col gap-3">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Resume</Link>
                    <Link href="/">Projects</Link>
                    <Link href="/">Contact</Link>
                </div>
            </div>
            <div className="mobile:col-span-2 sm:col-span-1 text-white">
                <h2 className="text-orange-400 fw-bold mb-3">Contact</h2>
                <div className="flex flex-col gap-3">
                    <p>+92 300 9616251</p>
                    <p>+92 349 1684733</p>
                    <p>mabubakarkhan099@gmail.com</p>
                    <p>Rahim Yar Khan, Punjab Pakistan</p>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
