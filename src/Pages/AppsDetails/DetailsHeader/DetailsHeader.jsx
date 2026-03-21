import React from 'react'

const DetailsHeader = () => {
  const formatStat = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <div className="w-full bg-[#fcfcfd] p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* App Icon / Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-4xl shadow-xl border border-slate-50 shrink-0 overflow-hidden flex items-center justify-center p-8">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Area */}
        <div className="grow w-full">
          {/* Title and Developer */}
          <div className="text-center md:text-left mb-6">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">
              {app.title}
            </h1>
            <p className="text-slate-500 font-medium">
              Developed by <span className="text-violet-600 cursor-pointer hover:underline">{app.companyName.toLowerCase().replace(/\s/g, '')}.io</span>
            </p>
          </div>

          <hr className="border-slate-100 mb-8" />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-12 mb-10">
            {/* Downloads */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-emerald-500 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Downloads</p>
              <p className="text-xl md:text-3xl font-black text-slate-800">{formatStat(app.downloads)}</p>
            </div>

            {/* Average Rating */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-orange-500 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Average Ratings</p>
              <p className="text-xl md:text-3xl font-black text-slate-800">{app.ratingAvg}</p>
            </div>

            {/* Total Reviews */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-violet-500 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8l-2 2-2-2"/>
                </svg>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Reviews</p>
              <p className="text-xl md:text-3xl font-black text-slate-800">{formatStat(app.reviews)}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center md:justify-start">
            <button className="w-full md:w-auto bg-[#00d084] hover:bg-[#00ba76] text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95">
              Install Now ({app.size} MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader