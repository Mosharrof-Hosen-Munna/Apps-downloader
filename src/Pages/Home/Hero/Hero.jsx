import React from "react";
import heroBanner from "../../../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white pt-12 px-4 sm:px-6 lg:px-8  ">
      <div className="flex items-center">
        <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#1e293b] tracking-tight leading-[1.1]">
          We Build <br />
          <span className="text-violet-600">Productive</span> Apps
        </h1>

        {/* Relative AppStack Description */}
        <p className="mt-8 text-md md:text-lg text-slate-500  mx-auto leading-relaxed">
          At <span className="font-bold text-violet-600">AppStack</span>, we
          engineer high-performance tools designed to{" "}
          <span className="text-slate-700 font-semibold">
            streamline your digital workflow
          </span>
          . Our mission is to transform complex challenges into fluid, intuitive
          experiences that empower your every move.
        </p>

        {/* Store Buttons */}
        <div className="mt-12 flex  md:flex-row  items-center justify-center gap-4">
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 bg-[#f1f3f4] border border-gray-200 px-8 py-3.5 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all w-1/2 md:w-auto shadow-sm active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 20.5V3.5L18.5 12L3 20.5Z" fill="#34A853" />
              <path d="M3 20.5V3.5L11 12L3 20.5Z" fill="#EA4335" />
              <path d="M11 12L3 3.5H3.1L18.5 12H11Z" fill="#FBBC04" />
              <path d="M3.1 20.5H3L11 12L18.5 12L3.1 20.5Z" fill="#4285F4" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-500 font-bold leading-none">
                Get it on
              </p>
              <p className="text-base font-bold text-gray-800 leading-tight">
                Google Play
              </p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 bg-[#f1f3f4] border border-gray-200 px-8 py-3.5 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all w-1/2 md:w-auto shadow-sm active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.99 1.08-3.15-1.03.04-2.28.67-3.02 1.51-.66.75-1.24 1.95-1.08 3.08 1.15.09 2.31-.62 3.02-1.44"
                fill="#007AFF"
              />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-500 font-bold leading-none">
                Download on the
              </p>
              <p className="text-base font-bold text-gray-800 leading-tight">
                App Store
              </p>
            </div>
          </a>
        </div>
      </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="pt-8">
          <img className=" w-full md:w-3/4 mx-auto" src={heroBanner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
