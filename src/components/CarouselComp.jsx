import React from "react";
import { Carousel } from "flowbite-react";

const CarouselComp = () => {
  return (
    <div className="bg-black text-white h-[600px] py-16">
      {/* Title Section */}
      <div className="w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-500 text-lg ml-[200px] text-start font-bold">
            Testimonial
          </p>
          <h2 className="text-4xl font-extrabold mt-2">
            Trusted By More Than 1000+ <br /> Company's Around The World
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="max-w-7xl mx-auto mb-14">
          <Carousel slideInterval={3000}>
            {/* First Slide */}
            <div className="flex justify-between items-center gap-4">
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black p-6 rounded-md shadow-md flex-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                  </div>
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    quisque amet habitant integer pretium hendrerit enim.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Paula Brooks"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Paula Brooks</p>
                      <p className="text-sm text-gray-500">Business Analyst</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Add more slides as needed */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
