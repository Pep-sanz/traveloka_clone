import { JSX } from 'react';
import ProductItem from './ProductItem';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

interface ProductListProps {
  products: { id: number; title: string; logo: JSX.Element }[];
  activeProductId: number;
  setActiveProductId: (id: number) => void;
  setIsDialogOpen: (open: boolean) => void;
}

export default function ProductList({
  products,
  activeProductId,
  setActiveProductId,
  setIsDialogOpen,
}: ProductListProps) {
  const visibleProducts = products.slice(0, 5);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full border-b py-4 md:py-6 place-items-stretch">
      {visibleProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isActive={activeProductId === product.id}
          onClick={() => setActiveProductId(product.id)}
        />
      ))}

      {products.length > 5 && (
        <button
          className="py-2 px-3 md:py-3 md:px-4 rounded-full flex flex-col justify-center items-center cursor-pointer transition text-neutral-400 
            border border-transparent outline-none hover:outline hover:outline-2 hover:outline-gray-400"
          onClick={() => setIsDialogOpen(true)}
        >
          <BsFillGrid3X3GapFill size={32} />
          <p className="text-sm md:text-lg font-bold text-center">Lainnya</p>
        </button>
      )}
    </div>
  );
}
