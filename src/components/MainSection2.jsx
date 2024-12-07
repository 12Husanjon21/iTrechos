import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function MainSection2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="w-full flex gap-x-14 bg-white ">
        <div className="mt-[140px] mb-[100px]">
          <img
            className="w-[792px] h-[700px]"
            src="../../public/SectionImg.png"
            alt="Why choose us photo"
          />
        </div>
        <div className="mt-[140px] max-w-[726px] lg:mr-[140px]">
          <h4 className="text-[#7F27FF] mb-2 text-lg font-bold flex items-center gap-x-2">
            WHY CHOOSE US
          </h4>
          <h1 className="text-[60px] font-bold mb-4">
            Proven Expertise in Complex IT Solutions
          </h1>
          <p className="mb-[30px]">
            Assertively streamline interactive interfaces after value-added
            infrastructures. Authoritatively fabricate fully tested
            methodologies before. Holistic deliver end-to-end architectures
            rather than economically sound benefits. Progressively simplify
            end-to-end paradigms. Assertively streamline interactive interfaces
            after value-added infrastructure.
          </p>
          {[
            "An Award Winning Company",
            "Quick Research And Solutions",
            "Dedicated Support 24/7",
            "Quick Support & Tech Solutions",
          ].map((title, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center max-w-[500px] w-full"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                {activeIndex === index ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-4">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. <br /> Authoritatively fabricate
                  fully tested methodologies before. Holistic deliver <br /> end
                  sound benefits.
                </p>
              )}
              <div className="w-[500px] h-[1px] bg-[#FF8911] my-5 bg-opacity-45"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[1100px] flex flex-col gap-y-10 mb-[140px] mx-auto">
        <h2 className="font-bold text-3xl mb-[16px]">
          Ready To Transform Your Business
        </h2>
        <div className="flex gap-x-10">
          <div className="flex gap-x-6">
            <img src="../../public/boy.png" alt="boy" />
            <div className="max-w-[610px]">
              <h4 className="font-bold text-2xl">Tech Solution</h4>
              <p className="text-sm mt-4">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end sound benefits.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <img src="../../public/support.png" alt="boy" />
            <div className="max-w-[610px]">
              <h4 className="font-bold text-2xl">Quick Support</h4>
              <p className="text-sm mt-4">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end sound benefits.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="flex gap-x-6">
            <img src="../../public/IT.png" alt="boy" />
            <div className="max-w-[610px]">
              <h4 className="font-bold text-2xl">IT Project Solution</h4>
              <p className="text-sm mt-4">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end sound benefits.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <img src="../../public/chall.png" alt="boy" />
            <div className="max-w-[610px]">
              <h4 className="font-bold text-2xl">Solving IT Challenges</h4>
              <p className="text-sm mt-4">
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end sound benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
