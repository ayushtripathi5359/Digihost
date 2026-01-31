import React from "react";
import { ArrowUpRight } from "lucide-react";

const StackingSections = () => {
  const sections = [
    {
      id: "01",
      title: "Brand Soul Philosophy",
      cta: "Explore More",
      bgColor: "bg-white",
      textColor: "text-[#0A261D]",
      border: "border-black/10",
    },
    {
      id: "02",
      title: "Building for Bharat",
      cta: "Join the Movement",
      bgColor: "bg-[#0A2E24]",
      textColor: "text-white",
      border: "border-white/10",
    },
  ];

  return (
    <section className="w-full bg-[#0B0B0B] text-white font-sans">

      {sections.map((section) => (
        <div
          key={section.id}
          className={`sticky top-0 ${section.bgColor} ${section.textColor} transition-all duration-500`}
        >
          <div
            className={`flex items-center justify-between px-6 md:px-20 py-8 md:py-12 border-b ${section.border}`}
          >
            <div className="flex items-center gap-6 md:gap-24">
              <span className="text-2xl md:text-5xl font-light opacity-70">
                {section.id}
              </span>
              <h2 className="text-2xl md:text-6xl font-semibold tracking-tight">
                {section.title}
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden md:block text-sm font-medium">
                {section.cta}
              </span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-current flex items-center justify-center">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="sticky top-0 bg-[#111111] text-white min-h-screen flex flex-col">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 md:px-20 py-8 md:py-12">
          <div className="flex items-center gap-6 md:gap-24">
            <span className="text-2xl md:text-5xl font-light opacity-70">
              03
            </span>
            <h2 className="text-2xl md:text-6xl font-semibold tracking-tight">
              Learn with AG
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:block text-sm font-medium">
              Checkout
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-current flex items-center justify-center">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 md:px-20 pb-12 md:pb-20 pt-2 flex flex-col justify-between">

          {/* TEXT */}
          <div className="max-w-md text-sm md:text-lg tracking-wider leading-relaxed opacity-90">
            <p>
              Where behavioral science meets emotion. From brand strategy and digital
              infrastructure to Image Engineering. This is how we build brands that move
              people and grow with integrity.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 items-end justify-center md:justify-end mt-12">

            <div className="relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-4 w-[30%] md:w-[210px] h-[200px] md:h-[350px] rounded-sm bg-[#1A1A1A]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src="/assets/img1.png"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-4 w-[30%] md:w-[210px] h-[200px] md:h-[350px] rounded-sm bg-[#1A1A1A]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src="/assets/img2.png"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-4 w-[30%] md:w-[210px] h-[200px] md:h-[350px] rounded-sm bg-[#1A1A1A]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src="/assets/img3.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StackingSections;
