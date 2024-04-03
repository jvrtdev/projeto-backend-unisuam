import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';


const FastMarquee: React.FC = () => {
  return (
    <div className="w-full py-4 flex flex-col items-center animate-slide ">
      <div className=" text-center mb-4">
        <h1 className="text-lg font-medium">Empresas Parceiras</h1>
      </div>

      <div className="w-full p-3">
        <Marquee direction="right"  delay={1} speed={80}  gradientWidth={5} pauseOnClick >
          <div className="flex flex-col items-center">
            <img 
              src="/honda.png" 
              alt="honda logo"
              className="w-[20%] h-[20%]"
            />
            <p className="text-md mt-2 font-Mont">Honda</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/bmw.png"
              alt="bmw logo"
              className="w-[20%] h-[20%]"
            />
            <p className="text-md mt-2 font-Mont">BMW</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/chevrolet.png"
              alt="chevrolet logo"
              className="w-[20%] h-[20%]"
            />
            <p className="text-md mt-2 font-Mont">Chevrolet</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/fiat.png"
              alt="fiat logo"
              className="w-[20%] h-[20%]"
            />
            <p className="text-md mt-2 font-Mont">Fiat</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/toyota.png" 
              alt="toyota logo"
              className="w-[20%] h-[20%]"
            />
            <p className="text-md mt-2 font-Mont">Toyota</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default FastMarquee;