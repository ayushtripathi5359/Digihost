import React from "react";

const JoinMovement = () => {
  return (
    <section className="bg-[#05231B] text-white min-h-screen px-6 md:px-16 py-6 md:py-16 flex items-center font-sans">
      <div className="max-w-7xl w-full mx-auto gap-20 flex flex-col lg:flex-row  items-center">

        <div className="flex justify-center ">
          <div className="relative rounded-2xl border border-[#C7A008]/80 overflow-hidden w-[320px] md:w-[380px]">
            <img
              src="src/assets/portrait.jpg"
              alt="Founder Portrait"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-10">

          <div className="space-y-5">
            <span className="text-sm tracking-wide text-gray-300">
              Building for Bharat
            </span>

            <h2 className="text-5xl md:text-8xl font-medium tracking-loser leading-[1.05]">
              Join the Movement
            </h2>

            <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed">
              A movement to empower founders, creators, and dreamers from Tier 2 & 3 India.<br/>
              Building community, mindset, and digital tools to help them stay in the game.
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-medium">Register Now</h3>

            <form
              className="space-y-4 max-w-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="name"
                  className="bg-gray-100 text-gray-900 rounded-md px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C7A008]/40 placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="bg-gray-100 text-gray-900 rounded-md px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C7A008]/40 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black border border-[#C7A008]/80 text-white py-3 rounded-md uppercase tracking-widest text-xs hover:bg-[#0B0B0B] transition-all"
              >
                submit
              </button>
            </form>
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
