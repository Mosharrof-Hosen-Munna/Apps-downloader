import React from 'react';
import { useNavigate } from 'react-router'; 
import errorImage from '../../assets/error-404.png'; 

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grow flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-[#fcfcfd]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Illustration Container */}
        <div className="w-full max-w-60 md:max-w-100 mb-8 md:mb-12">
          {/* Use the specific 404 illustration from your design */}
          <img 
            src={errorImage} 
            alt="404 Illustration" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-4 tracking-tight">
            Oops, page not found!
          </h1>
          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto">
            The page you are looking for is not available.
          </p>

          {/* Go Back Button with Logic */}
          <button 
            onClick={() => navigate(-1)} 
            className="bg-violet-500 hover:bg-violet-600 text-white px-12 py-4 rounded-xl font-black text-lg shadow-xl shadow-violet-100 transition-all active:scale-95"
          >
            Go Back!
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;