import React, { use, useState } from 'react';
import { Link } from 'react-router';

const appsPromise = fetch('/apps.json').then(res => res.json());

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const apps = use(appsPromise);

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Our All Applications
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-xl font-bold text-slate-800">
            ({apps.length}) Apps Found
          </h3>
          
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition-all"
              placeholder="search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <Link key={app.id} to={`/apps/${app.id}`}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;