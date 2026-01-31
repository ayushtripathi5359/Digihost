import React from "react";
import { ArrowUpRight } from "lucide-react";

const FounderStory = () => {
  return (
    <div className="relative w-full  bg-black text-white font-sans overflow-hidden">
      
      <div className="w-full h-[600px] md:h-auto">
        <img
          src="src/assets/person.jpg"
          alt="Alkesh Gupta"
          className="w-full h-full md:h-auto object-cover object-center block brightness-75"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-20 hidden md:flex flex-col px-6 md:px-16 py-10 md:py-12 lg:py-16 justify-between">
        
        <div className="w-full">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-light">
            Behind every strategy, there's a story.
          </h1>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
          
          <div className="flex flex-col justify-between md:space-y-6 lg:space-y-9 md:h-full md:max-h-[320px] lg:max-h-[420px] xl:max-h-[520px] mb-20">
            <p className="hidden md:block text-base md:text-xl lg:text-2xl font-medium max-w-md leading-relaxed">
              10+ Years of Building Across Sectors <br />
              — From local entrepreneurs to legacy institutions
            </p>

            <div className="hidden md:block">
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">
                Mission: Building Bharat Through <br /> Brand, Tech & Soul
              </p>
            </div>
          </div>

          {/* CENTER FRAME */}
          <div className="relative flex flex-col justify-center items-center w-full  py-10">
  <div className="relative group w-[260px] h-[350px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[650px] flex flex-col justify-end p-6">
    
    <div
      className="absolute inset-0 rounded-[24px]"
      style={{
        padding: "2px", 
        background: "linear-gradient(135deg, #F8EEA4 0%, #E6C85A 50%, #C7A008 100%)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />

    <div className="relative z-10 mb-4 text-center">
      <h2
        className="text-2xl md:text-3xl italic text-[#E6C85A] drop-shadow-lg"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Alkesh Gupta
      </h2>
    </div>
  </div>
</div>

          <div className="flex flex-col justify-between space-y-8 mt-52 md:h-full md:max-h-[420px]">
            <div className="space-y-1 text-base md:text-xl lg:text-2xl font-medium opacity-90">
              <p>Founder DiigiiHost</p>
              <p>Creator The Brand Soul Philosophy</p>
            </div>

            <button className="flex items-center group space-x-4 w-fit">
              <span className="text-lg md:text-xl font-medium border-b border-transparent group-hover:border-white transition-all">
                Read More
              </span>
              <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full group-hover:bg-white/20 transition-all">
                <ArrowUpRight size={20} className="md:w-6 md:h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>


      <div className="absolute inset-0  z-20 flex md:hidden flex-col items-center px-6 pt- md:pt-10 pb-12 text-center">
        
        <h1 className="text-2xl font-light leading-snug mb-4">
          Behind every strategy,<br />
          <span className="opacity-80">there's a story.</span>
        </h1>

        <div className="relative mb-6">
          <div
            className="w-[240px] h-[240px] rounded-[24px]"
            style={{
              padding: "1.5px",
              background:
                "linear-gradient(135deg, #F8EEA4 0%, #E6C85A 50%, #C7A008 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <h2
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl italic text-[#E6C85A]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Alkesh Gupta
          </h2>
        </div>

        <div className="text-base font-medium opacity-90 mb-4">
          <p>Founder DiigiiHost</p>
          <p>Creator The Brand Soul Philosophy</p>
        </div>

        <div className="mb-4">
          
          <p className="text-lg font-semibold">
            Building Bharat Through<br />
            Brand, Tech & Soul
          </p>
        </div>

        <p className="text-sm opacity-90 max-w-xs mb-5">
          10+ Years of Building Across Sectors — From local entrepreneurs to legacy institutions
        </p>

        <button className="flex items-center space-x-3">
          <span className="text-lg font-medium">Read More</span>
          <div className="bg-white/10 p-3 rounded-full">
            <ArrowUpRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FounderStory;
