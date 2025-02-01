import Link from "next/link";
import MainLogo from "@/public/images/icon128.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
        <Image
            className="box-content rounded-full"
            width={42}
            height={42}
            src={MainLogo}
            alt="Clarify AI Logo"
        />
    </Link>
  );
}
