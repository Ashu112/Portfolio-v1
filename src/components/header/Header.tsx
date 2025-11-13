import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between px-10">
        <Link href="/">
             <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="rounded-md" />
        </Link>
       
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
