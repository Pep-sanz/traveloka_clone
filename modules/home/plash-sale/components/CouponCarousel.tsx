'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

const coupons = [
  {
    title: 'Diskon 50%',
    code: 'HEMAT50',
    desc: 'Diskon hingga 50% untuk semua produk!',
  },
  {
    title: 'Cashback 20%',
    code: 'CASH20',
    desc: 'Dapatkan cashback 20% untuk transaksi pertama!',
  },
  {
    title: 'Gratis Ongkir',
    code: 'ONGKIRFREE',
    desc: 'Bebas biaya pengiriman ke seluruh Indonesia!',
  },
  {
    title: 'Voucher 100K',
    code: 'VOUCHER100',
    desc: 'Dapatkan potongan harga dalam pembelian pertama Rp100.000!',
  },
  {
    title: 'Diskon 30%',
    code: 'DISC30',
    desc: 'Potongan harga hingga 30% di semua kategori!',
  },
  {
    title: 'Belanja Rp1',
    code: 'BELANJA1',
    desc: 'Belanja produk tertentu hanya Rp1!',
  },
  {
    title: 'Cashback 50%',
    code: 'CASHBACK50',
    desc: 'Cashback 50% hingga Rp50.000!',
  },
  {
    title: 'Promo Weekend',
    code: 'WEEKEND',
    desc: 'Nikmati promo spesial di akhir pekan!',
  },
  {
    title: 'Spesial Member',
    code: 'MEMBER10',
    desc: 'Diskon 10% khusus untuk member!',
  },
  {
    title: 'Surprise Coupon',
    code: 'SURPRISE',
    desc: 'Gunakan kode ini untuk kejutan menarik!',
  },
];

export default function CouponCarousel() {
  const { copyToClipboard } = useCopyToClipboard();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await copyToClipboard(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full mx-auto py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={14}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, el: '.custom-pagination' }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {coupons.map((coupon, index) => (
          <SwiperSlide key={index}>
            <Card className="border w-[350px] h-[200px] rounded-lg shadow-lg p-4 text-center flex flex-col justify-between">
              <CardContent className="flex flex-col items-center gap-2 overflow-hidden">
                <h3 className="text-lg font-semibold">{coupon.title}</h3>
                <p className="text-sm text-gray-500">{coupon.desc}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <div className="bg-gray-200 text-gray-700 w-full px-3 py-1 rounded-md font-mono text-sm">
                  {coupon.code}
                </div>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleCopy(coupon.code, index)}
                  className="w-fit bg-primary/20 hover:bg-primary/30 text-xs text-blue-900 rounded-full"
                >
                  {copiedIndex === index ? 'Copied' : 'Copy'}
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
}
