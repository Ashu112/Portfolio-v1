import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-between gap-12 px-16 py-24 lg:flex-row">
      <div className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-6xl font-bold text-green-400">Ashutosh Kumar</h1>
        <h2 className="text-3xl font-semibold text-gray-400">
          Software Development Engineer
        </h2>
        <p className="text-xl leading-8">
          I'm a Software developer from IIT Guwahati with 3+ years of experience
          creating fast, scalable, and user-focused web applications. I've
          worked across e-commerce, security, and AI-driven platforms using
          React, Next.js, Astro, and GraphQL.
        </p>
      </div>

      <div className="relative h-full w-[350px]">
        <Image
          src="/images/portfolio.jpg"
          alt="Profile"
          width={350}
          height={400}
          className="rounded-4xl object-cover shadow-xl"
        />
      </div>
    </div>
  );
}

export default Hero;
