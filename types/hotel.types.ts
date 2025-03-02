export interface IHotel {
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
  image: string;
  images: string[];
}
