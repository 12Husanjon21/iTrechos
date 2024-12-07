import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY < lastScrollY) {
      // Faqat tepaga scroll qilinganda ko'rinadi
      setIsVisible(true);
    } else {
      // Pastga scroll qilinganda yashirinadi
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 bg-[#070706] text-white h-24 flex items-center justify-center shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between mx-auto w-[1194px]">
        <div className="flex items-center">
          <NavLink to={"/"} className="font-extrabold text-[24px]">
            Itrechos
          </NavLink>
        </div>
        <ul className="flex items-center gap-x-10">
          <li className="text-white hover:text-[#ff8911] transition duration-300">
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li className="text-white hover:text-[#ff8911] transition duration-300">
            <NavLink to={"/services"}>SERVICES</NavLink>
          </li>
          <li className="text-white hover:text-[#ff8911] transition duration-300">
            <NavLink to={"/"}>PAGES</NavLink>
          </li>
          <li className="text-white hover:text-[#ff8911] transition duration-300">
            <NavLink to={"/"}>BLOG</NavLink>
          </li>
          <li className="text-white hover:text-[#ff8911] transition duration-300">
            <NavLink to={"/"}>CONTACT</NavLink>
          </li>
          <div className="flex gap-x-[6px] ml-4 items-center">
            <FiPhoneCall />
            <p className="text-[18px] mb-[6px]">+49 30 9846565</p>
          </div>
        </ul>
      </nav>
    </div>
  );
}
