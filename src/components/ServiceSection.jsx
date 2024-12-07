import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ServiceSection() {
  return (
    <section className=" w-full  flex bg-black text-white">
      <div className="max-w-[1200px] mx-auto flex my-[140px]">
        <div>
          <div>
            <h4 className="text-[#FF8911] mb-2 text-lg font-bold flex items-center gap-x-2">
              SERVICE
            </h4>
            <h1 className="font-bold text-[60px]">
              We Providing <br /> Complete <br /> Professional IT <br />{" "}
              Services.
            </h1>
            <p>
              Assertively streamline interactive interfaces after value a
              infrastructures. <br /> Authoritatively fabricate fully tested
              methodologies before Holistic deliver <br /> end-to-end
              architectures rather sound benefits.
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-6 mt-10">
              <span className="mt-2">
                <img src="../../public/Icon.png" alt="" />
              </span>
              <div className="flex flex-col gap-y-6">
                <h3 className="text-2xl font-bold">
                  Analytical Research Problem Findings
                </h3>
                <p>
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. <br /> Authoritatively fabricate
                  fully tested methodologies before.
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <span className="mt-2">
                <img src="../../public/Icon.png" alt="" />
              </span>
              <div className="flex flex-col gap-y-6">
                <h3 className="text-2xl font-bold">
                  Analytical Research Problem Findings
                </h3>
                <p>
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. <br /> Authoritatively fabricate
                  fully tested methodologies before.
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <span className="mt-2">
                <img src="../../public/Icon.png" alt="" />
              </span>
              <div className="flex flex-col gap-y-6">
                <h3 className="text-2xl font-bold">
                  Analytical Research Problem Findings
                </h3>
                <p>
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. <br /> Authoritatively fabricate
                  fully tested methodologies before.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-10">
            <div className="w-[280px] text-black h-[360px] px-6 py-10 bg-white rounded-2xl">
              <div className="w-[72px] h-[72px] flex items-center justify-center mb-16 bg-black rounded-full">
                <img
                  className="w-[32px] h-[32px] "
                  src="../../public/1-icon.png"
                  alt="icon"
                />
              </div>
              <h3 className="font-bold text-2xl mb-1">Network solution</h3>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures.
              </p>
              <button className="text-[#7F27FF] hover:text-[#6a06ff] flex mt-4 items-center gap-x-2">
                <GoArrowUpRight size={24} />
                <span className="text-[15px]">LEARN MORE</span>
              </button>
            </div>
            <div className="w-[280px] mt-[128px] text-black h-[360px] px-6 py-10 bg-white rounded-2xl">
              <div className="w-[72px] h-[72px] flex items-center justify-center mb-16 bg-black rounded-full">
                <img
                  className="w-[32px] h-[32px] "
                  src="../../public/2-icon.png"
                  alt="icon"
                />
              </div>
              <h3 className="font-bold text-2xl mb-1">Data analytics</h3>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures.
              </p>
              <button className="text-[#7F27FF] hover:text-[#6a06ff] flex mt-4 items-center gap-x-2">
                <GoArrowUpRight size={24} />
                <span className="text-[15px]">LEARN MORE</span>
              </button>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div className="w-[280px] -mt-[66px] text-black h-[360px] px-6 py-10 bg-white rounded-2xl">
              <div className="w-[72px] h-[72px] flex items-center justify-center mb-16 bg-black rounded-full">
                <img
                  className="w-[32px] h-[32px] "
                  src="../../public/3-icon.png"
                  alt="icon"
                />
              </div>
              <h3 className="font-bold text-2xl mb-1">Cyber security</h3>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures.
              </p>
              <button className="text-[#7F27FF] flex mt-4 hover:text-[#6803ff] items-center gap-x-2">
                <GoArrowUpRight size={24} />
                <span className="text-[15px]">LEARN MORE</span>
              </button>
            </div>
            <button className="w-[280px] bg-[#FF8911] hover:bg-[#ff972f] flex flex-col justify-between mt-[56px] text-black h-[360px] px-6 py-8 rounded-2xl">
              <div className="text-black  mt-4 gap-x-2">
                <GoArrowUpRight size={48} />
              </div>
              <h3 className="font-bold text-2xl mb-1">View all services</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
