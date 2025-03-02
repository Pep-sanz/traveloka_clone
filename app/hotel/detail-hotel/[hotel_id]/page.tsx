import { hotels } from '@/constants/hotels';
import HotelDetail from '@/modules/hotel/HotelDetail';

interface HotelDetailProps {
  params: { hotel_id: string };
}

export default function Page({ params }: HotelDetailProps) {
  const hotel = hotels.find((hotel) => hotel.id === parseInt(params.hotel_id));

  if (!hotel) {
    return (
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Hotel tidak ditemukan
        </h2>
        <p className="text-gray-500">Silakan pilih hotel lain.</p>
      </div>
    );
  }

  return <HotelDetail hotel={hotel} />;
}
