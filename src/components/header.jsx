import React from 'react';

const BrandHero = () => {
  const bgImage = "src/assets/bgimage.jpg";

  return (
    <div className="fixedrelative w-full min-h-screen flex flex-col overflow-hidden selection:bg-black selection:text-white">
      
      <header className="w-full p-4 md:p-6 z-50">
        <nav className="flex items-center justify-between px-6 py-3 bg-[#0A261D] text-white rounded-full max-w-7xl mx-auto shadow-lg">
          <img className='w-28' src="src\assets\logo.png" alt="" />
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-gray-300 transition-colors">Brand Soul</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Building For Bharat</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Learn with AG</a>
          </div>
          <button className="bg-white text-[#0A261D] px-5 py-2 rounded-full text-[10px] font-black uppercase hover:bg-gray-100 transition-colors">
            Work With Me
          </button>
        </nav>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <div className="relative transform scale-y-[3.5] md:scale-y-[2.5] lg:scale-y-[1.5]">
          <h1 
            className="text-[13.2vw] md:text-[14vw] leading-[0.8] font-[900] uppercase tracking-[-0.05em] text-transparent bg-clip-text bg-fixed bg-cover bg-center select-none"
            style={{ 
              backgroundImage: `url(${bgImage})`,
              WebkitBackgroundClip: 'text',
              fontFamily: 'sans-serif'
            }}
          >
            Brand Soul<br />
            Alchemist
          </h1>
        </div>
      </main>

      <footer className="w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div className="">
          <p className="text-[9px] md:text-[14px] font-bold text-gray-700 uppercase leading-tight tracking-widest text-left">
            Bringing out the soul within every brand where <br/>
            meaning, emotion, and identity become one.
          </p>
        </div>

        <button className="flex items-center gap-6 bg-[#0A261D] text-white pl-8 pr-3 py-3 rounded-full group hover:scale-105 transition-transform duration-300 shadow-xl">
          <span className="text-[11px] font-black uppercase tracking-widest">Let Connect</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A261D] transition-all">
            <span className="text-xl">↗</span>
          </div>
        </button>
      </footer>
    </div>
  );
};

export default BrandHero;