import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className=" flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/vercel.svg" width={18} height={18} alt="Logo" />
    <Link href="/terms">Terms</Link>
    <Link href="/privacy">Privacy policy</Link>
  </footer>
);

export default Footer;
