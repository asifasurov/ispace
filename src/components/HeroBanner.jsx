import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
  {
    id: 1,
    isFullBanner: true, 
    title: "Easy to use. Right from the start.",
    price: "175",
    priceUnit: "AZN/month.",
    benefit: "3% benefit for students.",
    buttonText: "Available with Trade In",
    note: "The price and benefits are stated for the MacBook Air 13\" M5 512 GB model.",
    bg: "#edf6fc",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop", // Banner şəklinin URL-i
  },
  {
    id: 2,
    isFullBanner: false, 
    title: "Make iPhone your next phone.",
    date: "Until September 6",
    benefit: "5% benefit on iPhone",
    buttonText: "Buy",
    note: "The 5% benefit applies to purchases of the iPhone 17 series.",
    bg: "linear-gradient(to right, #e0f2fe, #f0fdf4)",
    img: "https://cdn0.it4profit.com/s3/cms/site/1e/68/1e683aa2d71c945785f041cbd8bb93f5/group_19402_2.webp",
  },
  {
    id: 3,
    isFullBanner: false,
    title: "Smarter. Brighter.\nMightier.",
    date: "Special student deal",
    price: "45",
    priceUnit: "AZN/month.",
    benefit: "0 • 0 • 18 installment scheme",
    buttonText: "Order now",
    note: "The monthly payment for Apple Watch is calculated based on an 18-month term.",
    bg: "linear-gradient(to right, #fef2f2, #fff7ed)",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
    model: " Watch Series 10"
  },
  {
    id: 4,
    isFullBanner: true,
    title: "Fresh Air.\nDesigned to inspire.",
    benefit: "0 • 0 • 12 interest free",
    buttonText: "Learn more",
    note: "Offer valid for verified students and teachers with student ID.",
    bg: "linear-gradient(to right, #f3e8ff, #e0e7ff)",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
    model: " iPad Air M2"
  }
];

function Herobanner() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-2 font-sans">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1} 
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden shadow-sm"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              style={{ background: slide.bg }} 
              className="relative overflow-hidden flex flex-row items-center justify-between h-[280px] md:h-[320px]"
            >
              {/* Sol Tərəf - Mətn Bloku */}
              <div className="w-[45%] md:w-[40%] flex flex-col items-center text-center z-10 px-4 py-6 space-y-2">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>

                {slide.date && (
                  <p className="text-gray-700 text-xs font-medium">{slide.date}</p>
                )}

                {slide.price && (
                  <div className="flex items-baseline justify-center gap-1 text-gray-900">
                    <span className="text-xs text-gray-600">From</span>
                    <span className="text-2xl md:text-3xl font-extrabold">{slide.price}</span>
                    <span className="text-xs font-bold">{slide.priceUnit || 'AZN'}</span>
                  </div>
                )}

                {slide.benefit && (
                  <p className="text-xs md:text-sm font-bold text-gray-900">{slide.benefit}</p>
                )}

                <button className="px-5 py-1.5 rounded-full border border-gray-900 text-gray-900 text-xs font-semibold hover:bg-gray-900 hover:text-white transition cursor-pointer">
                  {slide.buttonText || "Buy"}
                </button>

                {slide.note && (
                  <p className="text-[9px] text-gray-500 max-w-xs pt-1 leading-tight hidden sm:block">
                    {slide.note}
                  </p>
                )}
              </div>

              {/* Sağ Tərəf - Banner və ya Məhsul Şəkli */}
              <div className="w-[55%] md:w-[60%] h-full flex items-center justify-center relative overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className={
                    slide.isFullBanner 
                      ? "w-full h-full object-cover"  // iSpace stilində tam sağ tərəfi tutan böyük foto
                      : "max-h-[85%] w-auto object-contain" // Tək məhsul görünüşü
                  }
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Herobanner;