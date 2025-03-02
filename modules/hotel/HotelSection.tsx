'use client';

import React from 'react';
import DiscountEventCarousel from './components/DiscountEventCarousel';
import FormFilter from '@/components/elements/FormFilter';
import PlashSaleSection from '../home/plash-sale/PlashSaleSection';
import HotelList from './components/HotelList';
import { useRouter } from 'next/navigation';

export default function HotelSection() {
  const router = useRouter();

  const handleSearch = (data: any) => {
    const encodedData = encodeURIComponent(data.location);
    router.push(`/hotel/${encodedData}`);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="bg-primary w-full py-32 px-4 md:px-16 lg:px-32 flex flex-col">
        <DiscountEventCarousel />
      </div>
      <div className="py-12 static xl:absolute bottom-16 left-0 right-0 px-4 md:px-16 lg:px-32 flex flex-col">
        <FormFilter onSearch={handleSearch} />
      </div>
      <PlashSaleSection />
      <HotelList />
    </div>
  );
}
