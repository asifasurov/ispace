import React, { useState } from 'react'

function Services() {
  const [activeTag, setActiveTag] = useState('All tags')

  const tags = [
    'All tags',
    'Delivery',
    'Repair and support',
    'Other services',
    'Finance',
    'Subscriptions'
  ]

  const servicesData = [
    {
      id: 1,
      tag: 'Delivery',
      title: 'Delivery and payment',
      image: '/assets/image/1s.webp'
    },
    {
      id: 2,
      tag: 'Repair and support',
      title: 'Service centers',
      image: '/assets/image/2s.webp'
    },
    {
      id: 3,
      tag: 'Other services',
      title: 'Promotions and news',
      image: '/assets/image/3s.webp'
    },
    {
      id: 4,
      tag: 'Finance',
      title: 'Installment and loan',
      image: '/assets/image/4s.webp'
    },
    {
      id: 5,
      tag: 'Repair and support',
      title: 'Warranty',
      image: '/assets/image/5s.webp'
    },
    {
      id: 6,
      tag: 'Other services',
      title: 'Trade In',
      image: '/assets/image/6s.webp'
    },
    {
      id: 7,
      tag: 'Other services',
      title: 'Business',
      image: '/assets/image/7s.webp'
    },
    {
      id: 8,
      tag: 'Other services',
      title: 'Gift cards',
      image: '/assets/image/8s.webp'
    },
    {
      id: 9,
      tag: 'Other services',
      title: 'Loyalty program',
      image: '/assets/image/9s.webp'
    },
    {
      id: 10,
      tag: 'Subscriptions',
      title: 'Software',
      image: '/assets/image/10s.webp'
    }
  ]

  const filteredServices =
    activeTag === 'All tags'
      ? servicesData
      : servicesData.filter((service) => service.tag === activeTag)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Başlıq */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
        Services
      </h2>

      {/* Filter Düymələri */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {tags.map((tag) => {
          const isActive = activeTag === tag
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? 'bg-[#0071e3] text-white border-[#0071e3] shadow-sm'
                  : 'bg-white text-[#0071e3] border-[#0071e3] hover:bg-blue-50'
              }`}
            >
              {tag}
            </button>
          )
        })}
      </div>

      {/* Kartlar Grid Strukturu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col justify-between h-[380px] p-6 rounded-[28px] bg-[#1d1d1f] overflow-hidden shadow-xl border border-gray-800/80 transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Şəkil (Kartın daxilinə tam yerləşən arxa fon) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Mətnlərin oxunması üçün yüngül tünd qradiyent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
            </div>

            {/* Yuxarıdakı Tag Etiketi */}
            <div className="relative z-10">
              <span className="inline-block px-3.5 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-medium text-white">
                {service.tag}
              </span>
            </div>

            {/* Aşağıdakı Kart Başlığı */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services