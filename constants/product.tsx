import { BiSolidPlaneAlt } from 'react-icons/bi';
import { BsFillTrainFreightFrontFill } from 'react-icons/bs';
import { RiHotelLine } from 'react-icons/ri';

export const products = [
  {
    id: 1,
    title: 'Hotel',
    logo: <RiHotelLine size={32} />,
    category: ['Hotel', 'Apartemen', 'Vila'],
  },
  {
    id: 2,
    title: 'Tiket Pesawat',
    logo: <BiSolidPlaneAlt size={32} />,
    category: ['Ekonomi', 'Bisnis', 'First Class'],
  },
  {
    id: 3,
    title: 'Tiket Kereta',
    logo: <BsFillTrainFreightFrontFill size={32} />,
    category: ['Ekonomi', 'Eksekutif', 'VIP'],
  },
  {
    id: 4,
    title: 'Tiket Bus & Travel',
    logo: <BiSolidPlaneAlt size={32} />,
    category: ['AC Ekonomi', 'Eksekutif', 'Double Decker'],
  },
  {
    id: 5,
    title: 'Rental Mobil',
    logo: <BiSolidPlaneAlt size={32} />,
    category: ['Manual', 'Matic', 'SUV', 'Luxury'],
  },
  {
    id: 6,
    title: 'Atraksi & Hiburan',
    logo: <BiSolidPlaneAlt size={32} />,
    category: ['Taman Hiburan', 'Atraksi Alam', 'Museum'],
  },
  {
    id: 7,
    title: 'Kuliner & Restoran',
    logo: <BiSolidPlaneAlt size={32} />,
    category: ['Makanan Cepat Saji', 'Fine Dining', 'Kuliner Lokal'],
  },
];
