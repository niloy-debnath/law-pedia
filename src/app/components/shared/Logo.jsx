import Image from "next/image";
import React from "react";
import logo from "../../../../public/Gemini_Generated_Image_ik0th2ik0th2ik0t-removebg-preview.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center">
        <Image src={logo} alt="Law-Pedia-Logo" width={50} height={50}></Image>
        <h2 className="font-bold text-xl">Law Pedia</h2>
      </div>
    </Link>
  );
};

export default Logo;
