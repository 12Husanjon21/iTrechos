import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import AchievementsSection from "./AchivementSection";
import MainSection from "./MainSection";
import { motion } from "framer-motion";
import ServiceSection from "./ServiceSection";
import MainSection2 from "./MainSection2";
import ServiceSection2 from "./ServiceSection2";
import Blog from "./Blog";
import CarouselComp from "./CarouselComp";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HeroSection() {
  return (
    <>
      <section className="hero flex w-full ">
        <div className="lg:ml-[150px] mt-[150px]">
          <h4 className="text-[#7F27FF] text-lg font-bold flex items-center gap-x-2">
            <p className="h-[1px] flex items-center w-10 bg-[#7F27FF]"></p>
            WELCOME TO Ztech!
          </h4>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-[80px] max-w-[657px] font-bold">
              We Are Ready <br />{" "}
              <p className="bg-[#FF8911] text-white max-w-[470px]">
                To Provide
              </p>
              It Solution
            </h1>
          </motion.div>
          <p className="font-normal text-base">
            Assertively streamline interactive interfaces after value
            infrastructures. untorn datively <br /> fabricate fully tested
            methodologies before Assertively streamline interactive <br />
            interfaces after infrastructures. We are 100+ professional software
            .
          </p>
          <div className="flex  mt-[40px]">
            <button className="bg-black shadower px-10 rounded-md text-white py-4 hover:shadow-inner hover:shadow-stone-50 transition duration-300">
              EXPLORE SERVICES
            </button>
            <button className="text-[#FF8911] px-8 py-[6px] gap-x-2 flex items-center border-[2px] rounded-md  hover:border-[#FF8911] transition  duration-300">
              <AiOutlinePlayCircle size={40} />{" "}
              <span className="text-[#FF8911] font-semibold text-[15px]">
                Watch A Video
              </span>
            </button>
          </div>
        </div>

        <div className="heroImage mt-[160px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <img
              className="w-[700px] h-[613px]"
              src="../../public/Image.png"
              alt="Clutch"
            />
          </motion.div>
        </div>
      </section>
      <AchievementsSection />
      <MainSection />
      <ServiceSection />
      <MainSection2 />
      <ServiceSection2 />
      <Blog />
      <CarouselComp />
      <Contact />
      <Footer />
    </>
  );
}
