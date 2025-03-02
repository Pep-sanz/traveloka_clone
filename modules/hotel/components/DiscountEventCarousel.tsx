'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const events = [
  {
    image:
      'https://ik.imagekit.io/tvlk/image/imageResource/2025/02/23/1740330091207-7521d4ebd65004c9928777350fba2bba.gif?tr=dpr-2,h-230,q-75,w-472',
    title: 'Birthday Flash Sale',
    description: 'Diskon spesial ulang tahun Traveloka!',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/image/imageResource/2025/02/21/1740126345656-1abd675bf7b4e20b17f2c6c5ea23a51f.png?tr=dpr-2,h-230,q-75,w-472',
    title: 'Promo Liburan Akhir Tahun',
    description: 'Dapatkan harga spesial untuk liburan akhir tahun!',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/image/imageResource/2025/02/21/1740131334246-a84a31c8a59a1426026e658148871051.png?tr=dpr-2,h-230,q-75,w-472',
    title: 'Cashback 20%',
    description: 'Nikmati cashback hingga 20% di berbagai kategori!',
  },
  {
    image:
      'https://ik.imagekit.io/tvlk/image/imageResource/2025/02/24/1740364013108-69ce5e1d4834d54ec79564a2b1b373cc.png?tr=dpr-2,h-230,q-75,w-472',
    title: 'Cashback 20%',
    description: 'Nikmati cashback hingga 20% di berbagai kategori!',
  },
];

export default function DiscountEventCarousel() {
  return (
    <div className="w-full mx-auto py-6 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="pb-12"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{event.title}</h3>
                <p className="text-white text-sm">{event.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="custom-prev bg-black/50 text-white p-2 rounded-full shadow-md hover:bg-black">
          ❮
        </button>
        <button className="custom-next bg-black/50 text-white p-2 rounded-full shadow-md hover:bg-black">
          ❯
        </button>
      </div>
    </div>
  );
}
