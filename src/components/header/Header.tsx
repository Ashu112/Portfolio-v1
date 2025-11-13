import Image from "next/image";
import Link from "next/link";


function Header() {
  return (
    <div className="flex justify-between items-center px-10">
        <Link href="/">
             <Image src="/images/logo_black.png" alt="Logo" width={100} height={100} className="rounded-md" />
        </Link>
       
      <div className="flex gap-8 text-white text-4xl font-medium font-sans">
        <Link href="/">About</Link>
          <Link href="/">Projects</Link>
         <Link href="/">Resume</Link>
          <Link href="/">Blogs</Link>
      </div>
      <Link href="/" className="text-yellow-200 font-medium text-3xl font-sans">Contact Me</Link>
    </div>
  );
}

export default Header;
