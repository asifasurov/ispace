import React from 'react';
import { Link } from 'react-router';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  const shopCategories = [
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'Music',
    'TV & Home',
    'Accessories',
    'Gift Cards',
  ];

  return (
    <footer className="w-full bg-white text-gray-800 font-sans border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-12 pb-8">
        
        {/* Naviqasiya Sütunları */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Shop - Yalniz burada Link-lər qalır */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {shopCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat}`}
                    className="hover:text-blue-600 transition cursor-pointer"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Linklər çıxarıldı */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span>All services</span></li>
              <li><span>Trade In</span></li>
              <li><span>Installments & Credit</span></li>
              <li><span>Returns & Warranty</span></li>
              <li><span>Delivery & Payment</span></li>
              <li><span>iSupport</span></li>
            </ul>
          </div>

          {/* For Clients - Linklər çıxarıldı */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span>Blog</span></li>
              <li><span>Press Releases</span></li>
              <li><span>Educational offer</span></li>
              <li><span>Apple and Business</span></li>
              <li><span>Loyalty Program</span></li>
              <li><span>Sitemap</span></li>
            </ul>
          </div>

          {/* Information - Linklər çıxarıldı */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span>About us</span></li>
              <li><span>Find a Store</span></li>
              <li><span>Contacts</span></li>
              <li><span>Career Opportunities</span></li>
              <li><span>Privacy policy</span></li>
              <li><span>Regulations on Gift Certificates</span></li>
              <li><span>E-commerce Rules</span></li>
            </ul>
          </div>

          {/* Apple Partner Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base font-bold text-gray-900 mb-4">Apple Premium Partner</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              iSpace is your trusted Apple expert in Azerbaijan, recognized with Premium Partner status. Explore the latest Apple devices and accessories at our stores. Enjoy premium service in the unique atmosphere of a globally renowned brand.
            </p>
            
            {/* Badges */}
            <div className="space-y-3">
              <div className="border border-gray-300 rounded-lg p-2 flex items-center gap-3 w-fit">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.92-14.4-6.15-3.37-2.73-7.29-7.44-11.77-14.13-6.52-9.76-11.59-20.73-15.22-32.92-3.63-12.19-5.45-23.75-5.45-34.67 0-14.22 3.52-25.92 10.56-35.1 7.04-9.18 15.86-13.85 26.47-14.01 4.58 0 9.77 1.21 15.58 3.63 5.81 2.42 9.8 3.63 11.97 3.63 1.95 0 6.09-1.28 12.43-3.84 6.34-2.56 11.75-3.72 16.23-3.5 11.53.64 20.89 4.88 28.08 12.72-10.23 6.18-15.25 14.89-15.06 26.13.2 8.78 3.52 16.2 9.96 22.25 6.44 6.05 14.11 9.53 23.01 10.44-2.52 7.57-6.04 15.08-10.56 22.53zM119.22 31.08c0-7.04 2.56-13.82 7.68-20.34 5.12-6.52 11.47-10.3 19.05-11.34.2 1.18.29 2.12.29 2.82 0 7.15-2.61 14.03-7.83 20.64-5.22 6.61-11.62 10.42-19.19 11.43-.09-.98-.13-1.89-.13-2.73z"/>
                </svg>
                <div className="text-[10px] font-semibold leading-tight">
                  Premium<br />Partner
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-900">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.92-14.4-6.15-3.37-2.73-7.29-7.44-11.77-14.13-6.52-9.76-11.59-20.73-15.22-32.92-3.63-12.19-5.45-23.75-5.45-34.67 0-14.22 3.52-25.92 10.56-35.1 7.04-9.18 15.86-13.85 26.47-14.01 4.58 0 9.77 1.21 15.58 3.63 5.81 2.42 9.8 3.63 11.97 3.63 1.95 0 6.09-1.28 12.43-3.84 6.34-2.56 11.75-3.72 16.23-3.5 11.53.64 20.89 4.88 28.08 12.72-10.23 6.18-15.25 14.89-15.06 26.13.2 8.78 3.52 16.2 9.96 22.25 6.44 6.05 14.11 9.53 23.01 10.44-2.52 7.57-6.04 15.08-10.56 22.53zM119.22 31.08c0-7.04 2.56-13.82 7.68-20.34 5.12-6.52 11.47-10.3 19.05-11.34.2 1.18.29 2.12.29 2.82 0 7.15-2.61 14.03-7.83 20.64-5.22 6.61-11.62 10.42-19.19 11.43-.09-.98-.13-1.89-.13-2.73z"/>
                </svg>
                <span>Authorised Service Provider</span>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Hissə */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-8 items-start md:items-end">
          
          <div className="w-full md:max-w-sm space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">Subscribe to our Emails</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex border border-gray-900 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-gray-900">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-3 py-2.5 text-sm outline-none text-gray-800 placeholder-gray-400"
              />
              <button type="submit" aria-label="Subscribe" className="px-4 text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                &rarr;
              </button>
            </form>
            
            <label className="flex items-start gap-2.5 text-xs text-blue-600 cursor-pointer pt-1">
              <input type="checkbox" className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer" />
              <span>
                I agree to the <span className="underline">processing of personal data</span>, and <span className="underline">I understand the Terms and Conditions of Use</span>.
              </span>
            </label>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4 text-gray-800 text-lg">
              <span className="hover:text-blue-600 transition cursor-pointer"><FaInstagram /></span>
              <span className="hover:text-blue-600 transition cursor-pointer"><FaFacebookF /></span>
              <span className="hover:text-blue-600 transition cursor-pointer"><FaTiktok /></span>
              <span className="hover:text-blue-600 transition cursor-pointer"><FaYoutube /></span>
              <span className="hover:text-blue-600 transition cursor-pointer"><FaTelegramPlane /></span>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold border border-gray-300 rounded px-1.5 py-0.5">Apple Pay</span>
                <span className="text-[10px] font-semibold border border-gray-300 rounded px-1.5 py-0.5">G Pay</span>
                <span className="text-[10px] font-semibold border border-gray-300 rounded px-1.5 py-0.5 text-red-500">Mastercard</span>
                <span className="text-[10px] font-semibold border border-gray-300 rounded px-1.5 py-0.5 text-blue-800">VISA</span>
              </div>
              <p className="text-[11px] text-gray-400">
                2026 iSpace Azerbaijan. All rights reserved.
              </p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;