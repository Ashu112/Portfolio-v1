import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-between px-16 py-24 gap-12">
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-green-400 text-6xl font-bold">Ashutosh Kumar</h1>
        <h2 className="text-3xl text-gray-300 font-semibold">
          Software Development Engineer
        </h2>
        <p className="text-xl text-white  leading-8">
          I'm a Software developer from IIT Guwahati with 3+ years of experience
          creating fast, scalable, and user-focused web applications. I've
          worked across e-commerce, security, and AI-driven platforms using
          React, Next.js, Astro, and GraphQL.
        </p>
      </div>

      <div className="relative w-[350px] h-[450px]">
        <Image
          src="/images/portfolio.jpg"
          alt="Profile"
          fill
          className="rounded-3xl object-cover shadow-xl"
        />
      </div>
    </div>
  );
}

export default Hero;
