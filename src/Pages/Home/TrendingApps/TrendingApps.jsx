import React, { use } from 'react';


const TrendingApps = ({appsPromise}) => {
  // Limit to 8 for the "Trending" section

  const apps = use(appsPromise);
  console.log(apps)
  const displayApps = apps.slice(0, 8);

  return (
    <section className="bg-[#fcfcfd] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Trending Apps
            </h2>
            <p className="text-slate-500 mt-2 text-sm md:text-base">
              The most downloaded and highly-rated tools in our ecosystem.
            </p>
          </div>
          <button className="text-violet-600 font-bold text-sm hover:underline flex items-center gap-1">
            View All Apps 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayApps.map((app) => (
            <div 
              key={app.id} 
              className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-xl mb-5 bg-slate-50">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="opacity-0 cursor-pointer group-hover:opacity-100 bg-white text-violet-600 font-bold px-4 py-2 rounded-lg text-sm shadow-lg transition-opacity">
                    View Details
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="grow">
                <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">
                  {app.companyName}
                </p>
                <h3 className="text-base font-bold text-slate-800 leading-snug h-12 line-clamp-2">
                  {app.title}
                </h3>
              </div>

              {/* Badges Row */}
              <div className="flex items-center justify-between  border-t border-slate-50">
                {/* Download Count */}
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {(app.downloads / 1000000).toFixed(1)}M
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-500 px-2.5 py-1 rounded-md text-xs font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {app.ratingAvg}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center CTA */}
        <div className="mt-16 text-center">
          <button className="bg-violet-600 cursor-pointer hover:bg-violet-700 text-white px-12 py-4 rounded-xl font-black shadow-[0_10px_20px_-5px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(124,58,237,0.4)] transition-all active:scale-95">
            SHOW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;