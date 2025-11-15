import Image from "next/image";

function Hero() {
  return (
    <div className="flex justify-between gap-10 px-16 py-20">
      <div className="flex flex-col gap-8 px-20">
        <h1 className="text-green-400 text-7xl font-bold">Ashutosh Kumar</h1>
        <p className="text-base text-white max-w-3xl w-full mx-auto">
          I'm a software developer from IIT Guwahati with 3+ years of experience
          creating fast, scalable, and user-focused web applications. I've
          worked across e-commerce, security, and AI-driven platforms using
          React, Next.js, Astro, and GraphQL.
        </p>
      </div>

      <Image
        src="/images/portfolio.jpg"
        alt="Hero Image"
        className="rounded-4xl object-cover h-[600px]"
        width={500}
        height={150}
      />
    </div>
  );
}

export default Hero;
