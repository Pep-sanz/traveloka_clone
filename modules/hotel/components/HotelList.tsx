'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { hotels } from '@/constants/hotels';
import { useRouter } from 'next/navigation';

export default function HotelList() {
  const router = useRouter();
  return (
    <div className="px-4 py-24 md:px-16 lg:px-32 space-y-12">
      <div className="text-blue-950">
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">Akomodasi yang Paling Dicari</p>
        </div>
        <p>Wujudkan liburan impian dengan menginap di sini</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-10"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <div
                onClick={() => router.push(`/hotel/detail-hotel/${hotel.id}`)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 text-blue-950">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-gray-600">{hotel.location}</p>
                  <p className="text-blue-600 font-bold mt-2">
                    Rp. {hotel.priceDiscounted}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination absolute bottom-0 left-0 w-full"></div>
      </div>
    </div>
  );
}
