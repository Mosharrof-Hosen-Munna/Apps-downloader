import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

const DetailsChart = ({ app }) => {
  
  const ratings = app?.ratings ? [...app.ratings].reverse() : [];
  
  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-4 md:py-6 rounded-2xl shadow-sm">
      {/* Chart Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-black mb-8">Ratings</h2>
        
        {/* Adjusted height for responsiveness */}
        <div className="w-full h-64 md:h-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratings} 
              layout="vertical" 
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              barSize={28} 
            >
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
              
              <XAxis 
                type="number" 
                domain={[0, 'dataMax + 1000']} // Dynamic domain based on your data
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                width={70}
                tick={{ fill: '#475569', fontSize: 14, fontWeight: 600 }}
              />
              
              <Tooltip 
                cursor={{ fill: 'transparent' }} 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              
              {/* Fix: Set the fill color directly on the Bar component */}
              <Bar 
                dataKey="count" 
                fill="#7c3aed" 
                radius={[0, 6, 6, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Description Section */}
      <section className="border-t border-slate-100 pt-5">
        <h3 className="text-2xl font-black text-[#0f172a] mb-6">Description</h3>
        <div className="space-y-6 text-[#64748b] leading-relaxed text-base md:text-lg">
          <p>
            {app?.description?.split(' ').slice(0, 250).join(' ')}
          </p>
          <p>
             {app?.description?.split(' ').slice(250, 500).join(' ')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DetailsChart;