"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("dashboard");
  const router = useRouter();

  const handleNavigation = (page) => {
    setActive(page);
    router.push(`/${page}`);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex flex-row text-white text-2xl">
      <Image
      src="/logo.png"
      width={80}
      height={50}
      alt="Picture of the author"
    />
    <h1>JobNudge</h1>
      </div>
      <div className="flex space-x-4 ml-auto">
        {" "}
        {/* Added ml-auto for alignment */}
        <button
          className={`text-white pb-2 flex items-center space-x-2 ${
            active === "dashboard" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleNavigation("dashboard")}
        >
          {" "}
          <GiHamburgerMenu />
          <span>Dashboard</span>
        </button>
        <button
          className={`text-white pb-2 flex items-center space-x-2 ${
            active === "profile" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleNavigation("profile")}
        >
          <FaUser />
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
