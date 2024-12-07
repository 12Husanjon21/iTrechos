import React from "react";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className=" w-full max-w-[1200px] py-36 bg-white mx-auto ">
      <div>
        <h4 className="text-[#7F27FF] mb-2 text-lg font-bold flex items-center gap-x-2">
          ABOUT US
        </h4>

        <h1 className="font-bold text-6xl">
          Our Company Specialize In IT <br /> Solutions & Technology with
          Passion
        </h1>
        <p className="font-normal text-base mt-4 mb-12 text-[#1A1D27]">
          Assertively streamline interactive interfaces after value-added
          infrastructures. Authoritatively fabricate fully tested methodologies
          before. Holistic deliver end-to-end architectures rather than
          economically sound benefits. Progressively simplify end-to-end
          paradigms. Assertively streamline interactive interfaces after
          value-added infrastructure.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="flex gap-x-12">
          <img
            className="w-[574px] h-[533px]"
            src="../../public/MainSec.png"
            alt="Experience"
          />
          <div>
            <div>
              <h3 className="text-2xl font-bold mb-3 mt-4">
                We Try To Give All Kind Of Technology Solution As Your
                Requirements And We Are The Best In Field.
              </h3>
              <p className="font-normal text-sm">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end-to-end architectures
                rather than economically sound benefits. Progressively simplify
                end-to-end paradigms. Assertively streamline interfaces .
              </p>
            </div>
            <div className="w-full h-[1px] mb-4 mt-4 bg-[#FF8911]"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Provide IT Services To Hundreds Of SME <br /> Customers Across A
                Diverse Range Of Sectors
              </h3>
              <p className="font-normal text-sm">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end-to-end architectures
                rather than economically sound benefits. Progressively simplify
                end-to-end paradigms. Assertively streamline interfaces .
              </p>
            </div>
            <button className="bg-black mt-[28px] shadower px-10 rounded-md text-white py-4 hover:shadow-inner hover:shadow-stone-50 transition duration-300">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
