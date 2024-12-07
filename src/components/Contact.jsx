import React from "react";

export default function ContactSection() {
  return (
    <>
      <section className="my-28 flex flex-col lg:flex-row items-center justify-center pr-6 lg:pr-28">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="../../public/SectionImg2.png"
            alt="photo"
            className="max-w-[800px] rounded-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          {/* Title */}
          <h4 className="text-[#7F27FF] text-lg font-bold mb-4">
            GET IN TOUCH
          </h4>
          <h1 className="font-bold text-4xl lg:text-6xl mb-6">
            It's very easy <br /> to contact!
          </h1>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8911]"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8911]"
              placeholder="Email address"
            />
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8911]"
              placeholder="Web address"
            />
            <textarea
              className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8911]"
              rows="5"
              placeholder="Type message ..."
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#ff8911] text-white py-3 rounded-md shadow-md hover:bg-[#ff8911] transition duration-300"
            >
              SEND MESSAGE NOW
            </button>
          </form>
        </div>
      </section>
      <section className="bg-[#ff8911] w-full h-[470px] py-28">
        <h1 className="text-white text-center text-6xl font-bold">
          Looking For The Best IT <br /> Business Solutions
        </h1>
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-black shadower px-10 rounded-md text-white py-4 hover:shadow-inner hover:shadow-stone-50 transition duration-300"
          >
            CONTACT US
          </button>
        </div>
      </section>
    </>
  );
}
