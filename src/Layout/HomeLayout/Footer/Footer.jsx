import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
  const footerData = {
    quickLinks: ['Our Product', 'Legal Notice', 'Terms & conditions', 'Contact Us', 'About Us'],
    products: ['Top application', 'New app', 'Best app',  'Stores', ],
  };

  return (
    <footer className="bg-violet-600 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 pr-8">
             <div className="flex items-center gap-2 shrink-0">
                      <img  src={logo} alt="PharmaCare Logo" className="w-12 " />
                       <span className="text-2xl font-bold text-white">AppStack</span>
                    </div>
            <p className="text-white text-sm leading-relaxed max-w-sm">
          Your digital security is our priority. AppStack prides itself on offering a rigorously scanned and carefully curated selection of software, backed by a commitment to data integrity and an exceptional, ad-free user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerData.quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white text-sm hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {footerData.products.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white text-sm hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Info */}
          <div>
            <h4 className="text-white font-bold mb-6">About Information</h4>
            <div className="text-white text-sm space-y-3">
              <p>PharmaCare </p>
              <p>Kishoreganj, Dhaka, Bangladesh</p>
              <p>Beside the River side.</p>
              <p className="pt-2">Call us: <span className="text-white font-semibold">+8801XXXXXXXX</span></p>
              <p>Email: <span className="text-white font-semibold">admin@example.com</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-center items-center">
            <p className="text-white text-sm">
              Copyright © <span className="font-semibold text-white">AppStack</span>. All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;