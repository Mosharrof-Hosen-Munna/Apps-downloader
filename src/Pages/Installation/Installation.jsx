import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

const InstallationContent = () => {
  const allAppsData = useLoaderData()
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('installedApps') || '{}');
    
    const idsArray = Object.keys(savedIds); 

    const filteredData = allAppsData.filter(app => 
      idsArray.includes(app.id.toString())
    );

    setInstalledApps(filteredData);
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedData = [...installedApps];
    if (order === 'low-to-high') {
      sortedData.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    } else if (order === 'high-to-low') {
      sortedData.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    }
    setInstalledApps(sortedData);
  };

  const handleUninstall = (appId) => {
    const savedData = JSON.parse(localStorage.getItem('installedApps') || '{}');
    delete savedData[appId];
    localStorage.setItem('installedApps', JSON.stringify(savedData));
    setInstalledApps(installedApps.filter(app => app.id !== appId));
  };

  return (
    <div className="w-full bg-[#fcfcfd] min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-4">
            Your Installed Apps
          </h1>
          <p className="text-slate-500 text-sm md:text-lg font-medium">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* --- Filter Bar --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-lg md:text-xl font-black text-[#0f172a]">
            {installedApps.length} Apps Found
          </h2>

          <div className="relative w-full sm:w-48">
            <select 
              className="w-full bg-white border border-slate-200 pl-4 pr-10 py-2.5 rounded-lg text-sm font-bold text-slate-600 appearance-none cursor-pointer focus:ring-2 focus:ring-violet-500 outline-none shadow-sm"
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="default">Sort By Size</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        {/* --- App List --- */}
        <div className="flex flex-col gap-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div 
                key={app.id} 
                className="bg-white border border-slate-100 rounded-2xl p-2 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center w-full sm:w-auto gap-4 md:gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-2xl shrink-0 flex items-center justify-center  border border-slate-50 group-hover:bg-white transition-colors">
                    <img src={app.image} alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="grow">
                    <h3 className="text-base md:text-lg font-bold text-[#0f172a] mb-2 leading-tight">
                      {app.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] md:text-xs font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1 text-emerald-500">
                         <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                         {Math.floor(app.downloads / 1000000)}M
                      </span>
                      <span className="flex items-center gap-1 text-orange-400">
                         <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                         {app.rating}
                      </span>
                      <span className="text-slate-400">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleUninstall(app.id)}
                  className="w-full sm:w-auto bg-[#00d084] hover:bg-red-500 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-emerald-50 hover:shadow-red-50"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
              <p className="text-slate-400 font-bold italic text-lg">Your library is empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallationContent;