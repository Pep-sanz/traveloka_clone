'use client';

import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { hotels } from '@/constants/hotels';

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  category: string;
  facilities: string[];
  amenities: string[];
  cancellation: boolean;
  priceOriginal: string;
  priceDiscounted: string;
  images: string[];
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  location,
  rating,
  reviews,
  priceDiscounted,
  priceOriginal,
  amenities,
  images,
}) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg shadow-md overflow-hidden p-4 bg-white mb-4">
      <div className="w-full md:w-1/3 relative">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-48 md:h-full object-cover rounded-md"
        />
        <div className="grid grid-cols-4 gap-1 absolute bottom-1 left-1 hidden md:grid">
          {images.slice(1, 5).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              className="w-24 h-24 object-cover rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/3 px-4 flex flex-col justify-between mt-4 md:mt-0">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex items-center text-blue-500 text-sm font-semibold">
            <FaStar className="text-yellow-400 mr-1" /> {rating} ({reviews}{' '}
            ulasan)
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaMapMarkerAlt className="mr-2" /> {location}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {amenities.slice(0, 6).map((amenity, idx) => (
              <span
                key={idx}
                className="bg-gray-100 px-2 py-1 rounded-md text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-3">
          <div className="text-center md:text-left">
            {priceOriginal && (
              <p className="text-gray-400 line-through text-sm">
                Rp {priceOriginal.toLocaleString()}
              </p>
            )}
            <p className="text-red-600 font-bold text-xl">
              Rp {priceDiscounted.toLocaleString()}
            </p>
          </div>
          <Button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full md:w-auto mt-2 md:mt-0">
            Pilih Kamar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function HotelList({ params }: any) {
  const slug = params.slug || '';
  const decodedData = decodeURIComponent(slug as string);
  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(decodedData.toLowerCase()) ||
      hotel.location.toLowerCase().includes(decodedData.toLowerCase()),
  );

  return (
    <div className="space-y-4 py-32 px-4 md:px-16 lg:px-32">
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => <HotelCard key={hotel.id} {...hotel} />)
      ) : (
        <p className="text-center text-gray-500">Tidak ada hotel ditemukan</p>
      )}
    </div>
  );
}
