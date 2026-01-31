import React from "react";

const GalleryComponent = () => {
  const cards = [
    {
      id: 1,
      img: "/assets/cimg4.jpg",
      logo: "/assets/logo1.jpg",
      offset: "left-10",
      zIndex: "z-10",
      topOffset: "top-48",
    },
    {
      id: 2,
      img: "/assets/cimg3.jpg",
      logo: "/assets/logo2.jpg",
      offset: "left-[320px]",
      zIndex: "z-30",
      topOffset: "top-96",
      swipe: true,
    },
    {
      id: 3,
      img: "/assets/cimg2.jpg",
      logo: "/assets/logo3.jpg",
      offset: "left-[550px]", 
      zIndex: "z-20",
      topOffset: "top-32",
    },
    {
      id: 4,
      img: "/assets/cimg1.jpg",
      logo: "/assets/logo4.jpg",
      offset: "left-[790px]", 
      zIndex: "z-40",
      topOffset: "top-88",
    },
    {
      id: 5,
      img: "/assets/cimg4.jpg",
      logo: "/assets/logo1.jpg",
      offset: "left-[1080px]", 
      zIndex: "z-10",
      topOffset: "top-36",
    },
    {
      id: 6,
      img: "/assets/cimg3.jpg",
      logo: "/assets/logo2.jpg",
      offset: "left-[1980px]", 
      zIndex: "z-30",
      topOffset: "top-60",
    },
    {
      id: 7,
      img: "/assets/cimg2.jpg",
      logo: "/assets/logo3.jpg",
      offset: "left-[1400px]", 
      zIndex: "z-20",
      topOffset: "top-60",
    },
    {
      id: 8,
      img: "/assets/cimg1.jpg",
      logo: "/assets/logo4.jpg",
      offset: "left-[1690px]",
      zIndex: "z-40",
      topOffset: "top-88",
    },
    {
      id: 9,
      img: "/assets/cimg4.jpg",
      logo: "/assets/logo1.jpg",
      offset: "left-[2310px]",
      zIndex: "z-10",
      topOffset: "top-36",
    },
  ];

  return (
    <section className="bg-[#F6F5F3] min-h-screen py-16 font-sans">
      <style>
        {`
          .gallery-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <h2 className="text-3xl ml-10 font-medium">Gallery</h2>
      
      <div className="relative w-full mx-auto">
        <div 
          className="relative h-[820px] overflow-x-auto overflow-y-hidden gallery-scroll" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="h-[820px] min-w-[2650px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.offset} ${card.topOffset} ${card.zIndex}`}
                style={{ width: "300px" }}
              >
                <div
                  className={`absolute -top-30  w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border border-black/5 overflow-hidden z-50`}
                >
                  <img 
                    src={card.logo} 
                    alt="brand logo" 
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <div className="w-full rounded-xl overflow-hidden shadow-xl bg-white relative hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={card.img}
                    alt="Gallery"
                    className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pl-12 space-y-24">
        <h2 className="text-3xl font-medium leading-tight">
          Every brand, initiative, experiment <br />
          was crafted from one shared belief
        </h2>

        <div className="flex justify-end pr-12">
          <div className="max-w-md w-full"> 
            <h2 className="text-3xl font-medium text-left leading-tight">
              soul isn’t an accessory in <br /> 
              business it’s the engine.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;