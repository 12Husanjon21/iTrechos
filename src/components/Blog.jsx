import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Blog() {
  return (
    <section className="w-full bg-white text-black ">
      <div className="max-w-[1200px] mx-auto my-[140px]">
        <h4 className="text-[#7F27FF] mb-2 text-lg font-bold flex items-center gap-x-2">
          OUR TEAM
        </h4>

        <h1 className="font-bold text-6xl mb-10">
          Our Professional <br /> Team Member
        </h1>
        <div className="grid grid-cols-4 gap-x-6">
          <div>
            <div className="max-w-[306px] h-[420px] bg-black rounded-md">
              <img
                className="max-w-[280px] absolute h-[420px]"
                src="../../public/boldman.png"
                alt=""
              />
              <div className="flex gap-x-2 relative left-[24px] top-[360px]">
                <button className="bg-[#FF8911] hover:text-white transition duration-300 p-3 rounded-full">
                  <FaFacebookF size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaInstagram size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaTwitter size={16} />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-black my-4">
                Eleanor Pena
              </h3>
              <p className="text-[#1A1D2799]">Senior Developer</p>
            </div>
          </div>
          <div>
            <div className="max-w-[306px] h-[420px] bg-black rounded-md">
              <img
                className="max-w-[280px] rounded-md absolute h-[420px]"
                src="../../public/woman.png"
                alt=""
              />
              <div className="flex gap-x-2 relative left-[24px] top-[360px]">
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaFacebookF size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaInstagram size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaTwitter size={16} />
                </button>
              </div>
            </div>{" "}
            <div>
              <h3 className="font-bold text-2xl text-black my-4">
                Ralph Edwards
              </h3>
              <p className="text-[#1A1D2799]">Senior Developer</p>
            </div>
          </div>
          <div>
            <div className="max-w-[306px] h-[420px] bg-black rounded-md">
              <img
                className="max-w-[280px] rounded-md absolute h-[420px]"
                src="../../public/boyy.png"
                alt=""
              />
              <div className="flex gap-x-2 relative left-[24px] top-[360px]">
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaFacebookF size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaInstagram size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaTwitter size={16} />
                </button>
              </div>
            </div>{" "}
            <div>
              <h3 className="font-bold text-2xl text-black my-4">
                Albert Flores
              </h3>
              <p className="text-[#1A1D2799]">Senior Developer</p>
            </div>
          </div>
          <div>
            <div className="max-w-[306px] h-[420px] bg-black rounded-md">
              <img
                className="max-w-[280px] absolute rounded-md h-[420px]"
                src="../../public/curly.png"
                alt=""
              />
              <div className="flex gap-x-2 relative left-[24px] top-[360px]">
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaFacebookF size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaInstagram size={16} />
                </button>
                <button className="bg-[#FF8911] p-3 rounded-full hover:text-white transition duration-300">
                  <FaTwitter size={16} />
                </button>
              </div>
            </div>{" "}
            <div>
              <h3 className="font-bold text-2xl text-black my-4">
                Jerome Bell
              </h3>
              <p className="text-[#1A1D2799]">Senior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
