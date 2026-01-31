import React from 'react';

const PhilosophySection = () => {
  const img1 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&auto=format&fit=crop";
  const img2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&auto=format&fit=crop";
  const img3 = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&auto=format&fit=crop";

  return (
    <section className="mx-4 py-10 px-6 md:px-12 flex items-center justify-center  border-t-1  border-b-1 border-gray-800">
      <div className="">
        <p className="text-[6vw] md:text-[3.5vw] leading-[1.4] font-medium text-gray-300 ">
          In a world obsessed with 
          <span className="inline-block mx-4 align-middle transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <img 
              src={img1} 
              alt="Context 1" 
              className="w-24 h-14 md:w-32 md:h-20 object-cover rounded shadow-sm grayscale hover:grayscale-0 transition-all"
            />
          </span>
          virality, I'm obsessed with depth. I believe brands aren't built by ads they're built by emotions that
          <span className="inline-block mx-4 align-middle transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img 
              src={img2} 
              alt="Context 2" 
              className="w-24 h-14 md:w-32 md:h-20 object-cover rounded shadow-sm grayscale hover:grayscale-0 transition-all"
            />
          </span>
          move people. That belief became my life's work the 
          
          Brand Soul Philosophy.

          <span className="inline-block mx-4 align-middle transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <img 
              src={img3} 
              alt="Context 3" 
              className="w-24 h-14 md:w-32 md:h-20 object-cover rounded shadow-sm grayscale hover:grayscale-0 transition-all"
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;