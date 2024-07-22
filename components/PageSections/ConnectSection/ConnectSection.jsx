import "./ConnectSection.scss";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope } from "react-icons/fa6";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button";

function ConnectSection() {
  return (
    <section className="connect-section mobile:rounded-none sm:rounded-3xl">
      <div className="container py-10 grid gap-10 place-items-center">
        <div className="heading text-center text-white text-5xl fw-bold">
          <h1>
            Have an Awesome Project <br /> Idea? <span className="text-orange-400">Lets Discuss</span>
          </h1>
        </div>
        <div className="mobile:w-full sm:w-3/4 lg:w-3/6 grid gap-10 text-white">
          <div className="rounded-3xl bg-white bg-opacity-40 outline outline-2 outline-white p-3 flex gap-2 items-center">
            <FaEnvelope className="icon" />
            <Input typ="text" placeholder="Enter Message" className="input bg-transparent outline-none border-none shadow-none" />
          </div>
          <div className="rounded-3xl bg-white bg-opacity-40 outline outline-2 outline-white p-3 flex gap-2">
            <BiSolidMessageAltDetail className="icon mt-3 text-xl" />
            <Textarea placeholder="Enter Message" className="input bg-transparent outline-none border-none shadow-none" />
          </div>
          <div className="flex justify-center">
            <Button className="bg-orange-400 text-xl rounded-full py-7 px-7 hover:bg-orange-500">Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
