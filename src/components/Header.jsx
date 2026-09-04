import { Link } from "react-router";
import { CiPhone, CiUser, CiMenuBurger } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { useContext, useState } from "react";
import { DATA } from "./context/DataContext";
import { CartModal } from "./CartModel"; 
import { BASKET } from "./context/Basketcontext"; 
import { StoresModal } from "./StoresModal"; 

function Header() {
  const { mehsul } = useContext(DATA);
  const { totalCount } = useContext(BASKET); 

  const [menu, setMenu] = useState(true);
  const [axtar, setAxtar] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isStoresOpen, setIsStoresOpen] = useState(false);  

  const searchProduct = mehsul?.filter((item) =>
    item.title?.toLowerCase().includes(axtar.toLowerCase())
  );

  const pageCategory = mehsul
    ? mehsul.filter(
        (item, index, self) => index === self.findIndex((t) => t.category === item.category)
      )
    : [];

  return (
    <header className="w-full bg-white border-b border-gray-200 font-sans relative">
      
      <div className="bg-[#0071e3] flex items-center justify-between px-3 py-2 text-white text-[11px] sm:text-[13px]">
        <span className="font-bold px-1">&lt;</span>
        <div className="truncate text-center">
          <p>
            MacBook Air M4 from 123 AZN/month • 0 • 0 • 18{" "}
            <span className="opacity-90 underline ml-1 cursor-pointer">Learn more</span>
          </p>
        </div>
        <span className="font-bold px-1">&gt;</span>
      </div>

      {/* 2. Pickup Department Zolağı  */}
      <div 
        onClick={() => setIsStoresOpen(true)}
        className="flex xl:hidden items-center gap-1.5 px-4 py-2 border-b border-gray-100 text-xs text-gray-600 cursor-pointer hover:bg-gray-50 transition"
      >
        <span>🏪</span>
        <span>Pickup department</span>
      </div>

      {/* 3. Əsas Header Zolağı */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* MOBİL: Sol tərəfdə Burger Menu */}
        <button 
          onClick={() => setMenu((prev) => !prev)} 
          className="lg:hidden text-2xl text-gray-800 shrink-0 cursor-pointer"
        >
          <CiMenuBurger />
        </button>

        {/* LOGO */}
        <Link to="/">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 mx-auto lg:mx-0">
            <img 
              src="https://cdn0.it4profit.com/s3/cms/site/1e/68/1e683aa2d71c945785f041cbd8bb93f5/group_19402_2.webp" 
              alt="iSpace Logo" 
              className="h-6 sm:h-7 w-auto object-contain" 
            />
            <div className="flex items-center pl-2 border-l border-gray-200">
              <img 
                src="https://cdn0.it4profit.com/s3/cms/site/4d/50/4d5038f7350e6de2a4eb74059ff152bc/apple_premium_partner.svg" 
                alt="Apple Partner" 
                className="h-6 sm:h-7 w-auto object-contain" 
              />
            </div>
          </div>
        </Link>

        {/* DESKTOP: Axtarış Zolağı */}
        <div className="hidden lg:flex items-center flex-1 max-w-md relative mx-4">
          <span className="absolute left-4 text-gray-400 z-10">🔍</span>
          <input 
            type="text" 
            value={axtar}
            onChange={(e) => setAxtar(e.target.value)}
            placeholder="3% Benefit on MacBook" 
            className="w-full pl-11 pr-4 py-2 bg-[#F2F2F7] text-sm rounded-full placeholder-gray-500 focus:outline-none"
          />

          {/* AXTARIŞ NƏTİCƏLƏRİ */}
          {axtar.trim() !== "" && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto z-50">
              {searchProduct?.length > 0 ? (
                searchProduct.map((item) => (
                  <Link
                    key={item.id || item.title}
                    to={`/product/${item.id}`}
                    onClick={() => setAxtar("")}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition"
                  >
                    {item.image && (
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-contain shrink-0" />
                    )}
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-medium text-gray-800 truncate">{item.title}</span>
                      {item.price && (
                        <span className="text-xs text-blue-600 font-semibold">{item.price} AZN</span>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-gray-500">
                  Heç bir məhsul tapılmadı
                </div>
              )}
            </div>
          )}
        </div>

        {/* DESKTOP: Pickup Department */}
        <div 
          onClick={() => setIsStoresOpen(true)}
          className="hidden xl:flex items-center gap-1.5 text-xs text-gray-600 shrink-0 cursor-pointer hover:text-blue-600 transition"
        >
          <span>🏪</span>
          <span>Pickup department</span>
        </div>

        {/* SAĞ TƏRƏF: İkonlar */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
          <div className="hidden lg:flex items-center gap-1 text-xs text-gray-700 font-medium">
            <select className="bg-transparent focus:outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="az">Az</option>
            </select>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl text-gray-800">
            <div className="relative">
              <button
                onClick={() => setIsPhoneOpen((prev) => !prev)}
                className="p-1 hover:text-blue-600 transition flex items-center justify-center cursor-pointer"
                aria-label="Phone Contacts"
              >
                <CiPhone />
              </button>

              {isPhoneOpen && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-gray-200 shadow-xl rounded-xl p-4 text-left z-50 text-xs">
                  <div className="mb-3">
                    <p className="text-gray-400 font-normal mb-0.5">Online store</p>
                    <a href="tel:*7100" className="text-[#0071e3] font-bold text-sm hover:underline">
                      *7100
                    </a>
                  </div>

                  <div className="mb-3">
                    <p className="text-gray-400 font-normal mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/994507760050"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0071e3] font-bold text-sm hover:underline"
                    >
                      +0994507760050
                    </a>
                  </div>

                  <div>
                    <p className="text-gray-400 font-normal mb-0.5">iSupport Service</p>
                    <a href="tel:+994123101504" className="text-[#0071e3] font-bold text-sm hover:underline">
                      + 994123101504
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link className="hidden lg:flex" to="/profile"><CiUser /></Link>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 hover:text-blue-600 transition cursor-pointer"
              aria-label="Open Cart"
            >
              <BiShoppingBag />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* MOBİL MENYU */}
      {!menu && (
        <div className="bg-white border-t border-gray-200 w-full lg:hidden">
          <div className="mobile-menu">
            <ul className="flex flex-col text-sm font-medium text-gray-900">
              {pageCategory.map((item) => (
                <li key={item.id || item.category} className="border-b border-gray-200">
                  <Link 
                    to={`/category/${item.category}`} 
                    className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                    onClick={() => setMenu(true)}
                  >
                    <span>{item.category}</span>
                    <span className="text-gray-400 font-light text-base">›</span>
                  </Link>
                </li>
              ))}
               <Link  className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition" to={`/services`}>Servis</Link>
            </ul>
          </div>
        </div>
      )}

      {/* DESKTOP Kateqoriya Menyusu */}
      {pageCategory.length > 0 && (
        <div className="border-t border-gray-100 hidden lg:block">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">  
            <nav className="flex items-center gap-8 py-3 overflow-x-auto whitespace-nowrap text-xs font-medium text-gray-800">
              {pageCategory.map((item) => (
                <Link 
                  key={item.id || item.category} 
                  to={`/category/${item.category}`} 
                  className="hover:text-blue-600 transition"
                >
                  {item.category}
                </Link>
                
              ))}
               <Link to={`/services`}>Servis</Link>
            </nav>
          </div>
        </div>
      )}

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <StoresModal isOpen={isStoresOpen} onClose={() => setIsStoresOpen(false)} />

    </header>
  );
}

export default Header;