'use client';

import { Button } from '@/components/ui/button';
import { IHotel } from '@/types/hotel.types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HotelDetail({ hotel }: { hotel: IHotel }) {
  const router = useRouter();
  return (
    <div className="max-w-5xl  mx-auto py-32">
      {hotel.image && (
        <div className="relative h-80 w-full">
          <Image
            src={hotel.image}
            alt={hotel.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
        <p className="text-gray-500">{hotel.location}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl font-bold">
            ★ {hotel.rating}
          </span>
          <span className="text-gray-500 ml-2">({hotel.reviews} ulasan)</span>
        </div>
      </div>

      {hotel.images?.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-2">
          {hotel.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Hotel Image"
              width={200}
              height={120}
              className="rounded-lg"
            />
          ))}
        </div>
      )}

      {hotel.facilities?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Fasilitas</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {hotel.facilities.map((facility, index) => (
              <li key={index} className="text-gray-700">
                ✔ {facility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hotel.amenities?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Fasilitas Tambahan</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {hotel.amenities.map((amenity, index) => (
              <li key={index} className="text-gray-700">
                ✔ {amenity}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div>
          {hotel.priceOriginal && (
            <p className="text-gray-500 line-through">
              Rp {hotel?.priceOriginal?.toLocaleString()}
            </p>
          )}
          <p className="text-red-600 text-2xl font-bold">
            Rp {hotel?.priceDiscounted?.toLocaleString()}
          </p>
        </div>
        <Button
          onClick={() =>
            router.push(`/hotel/detail-hotel/${hotel.id}/list-room`)
          }
          className="bg-orange-500 hover:bg-orange-500/90 text-white px-6 py-2 rounded-lg"
        >
          Pilih Kamar
        </Button>
      </div>
    </div>
  );
}
