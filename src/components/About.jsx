import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-18 mb-10">
      <h2 className="text-center text-3xl mb-12 lg:text-5xl md:text-4xl text-blue-600 font-black poppins">
        An Overview : CSEJU
      </h2>
       <p className="text-slate-600 mb-15 text-justify">
          The Department of Computer Science and Engineering at Jahangirnagar
          University is dedicated to academic excellence, cutting-edge research,
          and technological innovation. Our goal is to nurture future engineers
          who will lead the world in computing and data-driven technologies.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
        <div>
          < img className="w-[350px] object-cover h-[200px]" src="https://i.ibb.co.com/Q7t41Mbq/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
