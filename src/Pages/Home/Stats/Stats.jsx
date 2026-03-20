import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      label: 'Total Downloads',
      value: '29.6M',
      change: '21% More Than Last Month',
    },
    {
      label: 'Total Reviews',
      value: '906K',
      change: '46% More Than Last Month',
    },
    {
      label: 'Active Apps',
      value: '132+',
      change: '31 More Will Launch',
    },
  ];

  return (
    <section className="bg-violet-600 py-16 px-6 sm:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-white text-2xl sm:text-4xl md:text-4xl font-bold mb-16 tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Category Label */}
              <span className="text-violet-200 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">
                {stat.label}
              </span>
              
              {/* Big Number */}
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-none">
                {stat.value}
              </span>
              
              <span className="text-violet-200 text-xs sm:text-sm mt-4 font-medium opacity-90">
                {stat.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;