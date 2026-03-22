import React, { useEffect, useState } from 'react'

const DetailsHeader = ({app}) => {

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '{}');
    if (installedApps[app.id]) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '{}');
    
    installedApps[app.id] = true;
    
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setIsInstalled(true);
  };

  const formatStat = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <div className="w-full bg-white md:bg-transparent px-4 py-8 md:p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* 1. App Icon Box */}
        <div className="w-full h-full md:w-64 md:h-64 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center p-1 shrink-0">
          <img 
            src={app.image} 
            alt="App Icon" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* 2. Info Section */}
        <div className="grow w-full text-center md:text-left">
          {/* Title and Dev */}
          <div className="mb-4">
            <h1 className="text-2xl md:text-[32px] font-bold text-[#0f172a] leading-tight">
              {app.title}
            </h1>
            <p className="text-[#64748b] text-base mt-1">
              Developed by <span className="text-violet-600 font-medium hover:underline cursor-pointer">AppStack.io</span>
            </p>
          </div>

          <hr className="border-slate-100 mb-8 mt-6" />

          {/* Stats Row */}
          <div className="flex justify-between md:justify-start gap-4 md:gap-20 mb-10 px-2 md:px-0">
            {/* Downloads */}
            <div className="flex flex-col items-center md:items-start">
               <div className="text-[#00d084] mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase">Downloads</p>
              <p className="text-2xl md:text-[32px] font-bold text-[#0f172a]">{formatStat(app.downloads)}</p>
            </div>

            {/* Average Ratings */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-[#ff9500] mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase">Average Ratings</p>
              <p className="text-2xl md:text-[32px] font-bold text-[#0f172a]">{app.ratingAvg}</p>
            </div>

            {/* Total Reviews */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-violet-600 mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase">Total Reviews</p>
              <p className="text-2xl md:text-[32px] font-bold text-[#0f172a]">{formatStat(app.reviews)}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center md:justify-start">
            {/* 3. Conditional Button Rendering */}
        <div className="mt-8">
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`w-full md:w-auto px-12 py-4 rounded-xl font-black text-lg transition-all 
              ${isInstalled 
                ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                : 'bg-[#00d084] text-white hover:bg-[#00ba76] shadow-lg shadow-emerald-100 active:scale-95'
              }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader