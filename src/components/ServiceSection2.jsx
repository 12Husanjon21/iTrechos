import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ServiceSection2() {
  return (
    <section className=" w-full flex bg-black text-white">
      <div className="max-w-[1320px] grid grid-rows-2 gap-y-10 my-[120px] mx-auto">
        <div>
          <h4 className="text-[#FF8911] mb-4 text-lg font-bold flex items-center gap-x-2">
            PROJECTS
          </h4>
          <h1 className="font-bold mb-4 text-[60px]">
            Awesome Works For <br /> Our Clients
          </h1>
          <p className="mb-10">
            Assertively streamline interactive interfaces after value a
            infrastructures. Authoritatively fabricate fully <br /> tested
            methodologies before Holistic deliver end-to-end architectures
            rather sound benefits.
          </p>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="relative w-[416px] h-[400px] p-6">
            <img
              src="../../public/img1.png"
              className="w-[416px] h-[400px]"
              alt="photo"
            />
            <div className="p-6 bg-white absolute bottom-[4px] left-[48px]">
              <h4 className="text-[#7F27FF] font-[500] mt-2 text-[12px]">
                TECH
              </h4>
              <h3 className="font-bold text-2xl text-black">
                Tech Cover Industry
              </h3>
              <p className="text-black">
                There are many variations of passages
              </p>
            </div>
          </div>
          <div className="relative w-[416px] h-[400px] p-6">
            <img
              src="../../public/man.png"
              className="w-[416px] h-[400px]"
              alt="photo"
            />
            <div className="p-6 bg-white absolute bottom-[4px] left-[48px]">
              <h4 className="text-[#7F27FF] font-[500] mt-2 text-[12px]">
                TECH
              </h4>
              <h3 className="font-bold text-2xl text-[#FF8911]">
                Tech Cover Industry
              </h3>
              <p className="text-black">
                There are many variations of passages
              </p>
            </div>
          </div>
          <div className="relative w-[416px] h-[400px] p-6">
            <img
              src="../../public/mann.png"
              className="w-[416px] h-[400px]"
              alt="photo"
            />
            <div className="p-6 bg-white absolute bottom-[4px] left-[48px]">
              <h4 className="text-[#7F27FF] font-[500] mt-2 text-[12px]">
                TECH
              </h4>
              <h3 className="font-bold text-2xl text-black">Database Design</h3>
              <p className="text-black">
                There are many variations of passages
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="relative w-[416px] h-[400px] p-6">
            <img
              src="../../public/img4.png"
              className="w-[416px] h-[400px]"
              alt="photo"
            />
            <div className="p-6 bg-white absolute bottom-[4px] left-[48px]">
              <h4 className="text-[#7F27FF] font-[500] mt-2 text-[12px]">
                TECH
              </h4>
              <h3 className="font-bold text-2xl text-black">
                Tech Cover Industry
              </h3>
              <p className="text-black">
                There are many variations of passages
              </p>
            </div>
          </div>
          <div className="relative w-[416px] h-[400px] p-6">
            <img
              src="../../public/last.png"
              className="w-[416px] h-[400px]"
              alt="photo"
            />
            <div className="p-6 bg-white absolute bottom-[4px] left-[48px]">
              <h4 className="text-[#7F27FF] font-[500] mt-2 text-[12px]">
                TECH
              </h4>
              <h3 className="font-bold text-2xl text-black">
                Tech Cover Industry
              </h3>
              <p className="text-black">
                There are many variations of passages
              </p>
            </div>
          </div>
          <button className=" flex flex-col text-center items-center justify-between ml-6 mt-6 w-[366px] hover:bg-[#ff972f] bg-[#FF8911] h-[400px] p-10">
            <span className="text-black  ml-[300px]">
              <GoArrowUpRight size={36} />
            </span>
            <h3 className="font-bold text-center text-2xl text-black">
              View all services
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
}
