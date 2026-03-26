import React from "react";
import errorImage from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grow flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-[#fcfcfd]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-60 md:max-w-90 mb-8 md:mb-12">
          <img
            src={errorImage}
            alt="404 Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
            Oops, App not found!
          </h1>
          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto">
            The app you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-3 rounded-xl  text-lg shadow-xl shadow-violet-100 transition-all active:scale-95"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
