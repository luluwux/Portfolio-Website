
import Link from "next/link";

function Contact() {
    return(
        <div className="">
        <h1 className="font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl pt-3">
Hey, this is
<span className="relative whitespace-nowrap">
  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00dc83] to-[#06b7d2]"> Lulu's</span>.{" "}
</span>
</h1>
<h2 className="mt-5 max-w-xl text-3xl leading-7">
Im a  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00dc83] to-[#06b7d2]"> Full-Stack </span> web developer.
</h2>
<h2 className="mt-5 max-w-xl text-lg text-white text-opacity-60 leading-7">
Let me introduce myself, I'm Alp. I am 17 years old. I am a versatile developer with a deep passion for all aspects of software.
</h2>

      </div>
    )
}

export default Contact;