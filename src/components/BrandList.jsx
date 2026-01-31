import React from 'react';

const BrandList = () => {
  const brands = [
    {
      name: "Dr. Gaikwad",
      description: "The Smile Architect built beyond dentistry.",
      image: "src/assets/bg1.jpg",
      heightClass: "h-32 md:h-40", 
    },
    {
      name: "Anuved",
      description: "Tradition reborn for modern devotion.",
      image: "src/assets/bg2.jpg",
      heightClass: "h-64 md:h-[350px]",
    },
    {
      name: "NAFSCOB",
      description: "Image engineering for credibility and legacy.",
      image: "src/assets/bg3.jpg",
      heightClass: "h-64 md:h-[350px]",
    }
  ];

  return (
    <section className="bg-[#F6F5F3] min-h-screen py-10 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto ">
        {brands.map((brand, index) => (
          <div key={index} className="group relative border-b-2  border-gray-400 py-8 md:py-12 lg:py-16 transition-all duration-300">
           
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              {/* Text Content - Aligned to top */}
              <div className="w-full md:w-[30%] pt-2">
                <h2 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {brand.name}
                </h2>
                <p className="text-lg text-gray-800 font-normal leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Banner Image */}
              <div className={`w-full md:w-[70%] overflow-hidden rounded-xl shadow-sm ${brand.heightClass}`}>
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandList;