'use client';

import Image from 'next/image';
import React from 'react';
import { FaGift } from 'react-icons/fa';
import CouponCarousel from './components/CouponCarousel';

export default function PlashSaleSection() {
  return (
    <div className="py-24 px-4 md:px-16 lg:px-32 space-y-12">
      <Image
        src="https://ik.imagekit.io/tvlk/image/imageResource/2025/02/21/1740125436793-7ec93f1f68c5aba9e5dc8ca85307cac4.png?tr=dpr-2,q-75,w-1280"
        alt="plash-sale"
        width={1920}
        height={1080}
      />
      <div className="">
        <div className="space-y-3 text-blue-950">
          <div className="flex items-center gap-3">
            <FaGift size={32} />
            <p className="text-2xl font-bold">
              Kupon Diskon 8% untuk Pengguna Baru
            </p>
          </div>
          <p>Berlaku untuk Transaksi Pertama di Traveloka App</p>
        </div>
        <CouponCarousel />
      </div>
    </div>
  );
}
