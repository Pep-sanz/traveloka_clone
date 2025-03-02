import IntrodactionSection from '@/modules/home/introdaction/IntrodactionSection';
import PlashSaleSection from '@/modules/home/plash-sale/PlashSaleSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <IntrodactionSection />
      <PlashSaleSection />
    </div>
  );
}
