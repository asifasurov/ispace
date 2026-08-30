import React from 'react';

function StoreClasses() {
  const cards = [
    {
      id: 1,
      category: '',
      title: "iPad Perks You Don't Know About (And...",
      subtitle: '',
      description: "An iPad has many options. As a device, it's perfect for anyone, be it students, office workers, or just casu...",
      img: 'https://ispace.az/blog/wp-content/uploads/2023/11/1-2-730x300.jpg'
    },
    {
      id: 2,
      category: 'IPHONE',
      title: 'Useful iPhone Accessories That Wi...',
      subtitle: 'Comfort and convenience',
      description: 'iPhone — a stylish and functional assistant, with the right accessories making it even more convenient,...',
      img: 'https://ispace.az/blog/wp-content/uploads/2025/08/Top-5-aksessuarov-dlya-iPhone-kotorye-uprostyat-zhizn-v-2025-godu_Foto1-1-730x300.jpg'
    },
    {
      id: 3,
      category: 'IPHONE',
      title: 'iPhone "Camera Phones": Why They...',
      subtitle: 'Apple',
      description: 'The main advantages of the camera in Apple smartphones are its functionality and ease of use. Witho...',
      img: 'https://ispace.az/blog/wp-content/uploads/2025/12/ispace9176-1-730x300.jpeg'
    },
    {
      id: 4,
      category: 'IPAD OR IPHONE',
      title: 'What to Choose: iPad or iPhone – a...',
      subtitle: 'iSpace',
      description: 'So what should you choose: an iPad or iPhone? We decided to compare their key parameters, such as functionalit...',
      img: 'https://ispace.az/blog/wp-content/uploads/2025/12/ispace9022-1-730x300.jpg'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">
        View in-store classes and support
      </h2>

      {/* Grid / Horizontal Scroll Konteyneri */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 [scrollbar-width:none] [::-webkit-scrollbar]:hidden">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Şəkil */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Mətnlər */}
              <div className="p-5">
                {card.category && (
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    {card.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-xs font-medium text-gray-500 mb-3">
                    {card.subtitle}
                  </p>
                )}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoreClasses;