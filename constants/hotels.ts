import { IHotel } from '@/types/hotel.types';

export const hotels: IHotel[] = [
  {
    id: 1,
    name: 'Grand Hyatt Bali',
    location: 'Nusa Dua, Bali',
    rating: 9.0,
    reviews: '5,2rb ulasan',
    category: 'Hotel Mewah',
    facilities: ['Kolam renang', 'Spa', 'Restoran', 'Pusat kebugaran'],
    amenities: ['Wi-Fi gratis', 'Sarapan gratis', 'Parkir gratis'],
    cancellation: true,
    priceOriginal: '2.800.000',
    priceDiscounted: '2.500.000',
    image:
      'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10000019-6db0cee95530d2b51487b4b1abfd433f.jpeg',
    images: [
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000680-1280x852-FIT_AND_TRIM-3f24e53b7b93445a46fff02098d66654.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-162,pr-true,q-80,w-234.66666666666666',
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000680-786x524-FIT_AND_TRIM-49b69aad565b73b560e07ed8233a9c63.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-162,pr-true,q-80,w-234.66666666666666',
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000680-786x524-FIT_AND_TRIM-a4f212c13148f40d5c9b8575863c1d0e.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-162,pr-true,q-80,w-234.66666666666666',
    ],
  },
  {
    id: 2,
    name: 'The Ritz-Carlton Jakarta',
    location: 'Mega Kuningan, Jakarta',
    rating: 9.2,
    reviews: '6,1rb ulasan',
    category: 'Hotel Bintang 5',
    facilities: ['Spa', 'Kolam renang', 'Restoran', 'Bar'],
    amenities: ['Wi-Fi gratis', 'Sarapan gratis', 'Layanan kamar 24 jam'],
    cancellation: true,
    priceOriginal: '3.500.000',
    priceDiscounted: '3.200.000',
    image:
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67709694-2000x1124-FIT_AND_TRIM-17812dcca157aa6baa39365ba5e192d6.jpeg',
    images: [
      'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000680-cee05df09f06c770f912de11116cb6b4.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
      'https://ik.imagekit.io/tvlk/generic-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/1000000/70000/63400/63389/79492658_z.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
      'https://ik.imagekit.io/tvlk/generic-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/1000000/70000/63400/63389/84d7dc90_z.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
    ],
  },
  {
    id: 3,
    name: 'Hotel Mulia Senayan',
    location: 'Senayan, Jakarta',
    rating: 9.0,
    reviews: '4,8rb ulasan',
    category: 'Hotel Mewah',
    facilities: ['Restoran', 'Sauna', 'Pusat kebugaran', 'Kolam renang'],
    amenities: ['Wi-Fi gratis', 'Parkir valet', 'Layanan pijat'],
    cancellation: false,
    priceOriginal: '3.000.000',
    priceDiscounted: '2.800.000',
    image:
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10012211-2048x1563-FIT_AND_TRIM-489d24e0cfd47619814ecb04cbd3e6dc.jpeg',
    images: [
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10012211-2048x1563-FIT_AND_TRIM-489d24e0cfd47619814ecb04cbd3e6dc.jpeg',
      'https://ik.imagekit.io/tvlk/generic-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/1000000/70000/63400/63389/84d7dc90_z.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000680-786x524-FIT_AND_TRIM-49b69aad565b73b560e07ed8233a9c63.jpeg',
    ],
  },
  {
    id: 4,
    name: 'Ayana Resort Bali',
    location: 'Jimbaran, Bali',
    rating: 9.3,
    reviews: '7,2rb ulasan',
    category: 'Resort Mewah',
    facilities: ['Private beach', 'Restoran', 'Spa', 'Kolam renang infinity'],
    amenities: ['Wi-Fi gratis', 'Layanan antar-jemput', 'Parkir gratis'],
    cancellation: true,
    priceOriginal: '4.500.000',
    priceDiscounted: '4.000.000',
    image:
      'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10001945-620c7f3eb051b1d9b16853c98976bcaf.jpeg',
    images: [
      'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10001945-620c7f3eb051b1d9b16853c98976bcaf.jpeg',
      'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/102000000/101910000/101903500/101903479/c1c534d6_z.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-162,pr-true,q-80,w-234.66666666666666',
      'https://ik.imagekit.io/tvlk/generic-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/2/0/184/404/485/BDODP_9889433907_P.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320',
    ],
  },
  {
    id: 5,
    name: 'The Trans Luxury Hotel',
    location: 'Buahbatu, Bandung',
    rating: 9.1,
    reviews: '6,4rb ulasan',
    category: 'No. 1 in Hotel Mewah',
    facilities: [
      'Klub anak',
      'Layanan pijat',
      'Pusat kebugaran',
      'Sauna',
      'Bar',
    ],
    amenities: ['Wi-Fi gratis', 'Sarapan gratis', 'Layanan kamar'],
    cancellation: true,
    priceOriginal: '1.511.057',
    priceDiscounted: '1.435.504',
    image:
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20003597-3ed72a2e8edcf9e5bab2acf1535fa295.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-332,pr-true,q-80,w-480',
    images: [
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20003597-4a935586820e0441cf8071ecefd4b80a.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-162,pr-true,q-80,w-234.66666666666666',
      'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20003597-f92d00112f60d0b73433476304812029.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
      'https://ik.imagekit.io/tvlk/generic-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/1000000/70000/63400/63389/d2bfcfc8_z.jpg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-40,w-640',
    ],
  },
];
