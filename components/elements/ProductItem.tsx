import { cn } from '@/lib/utils';
import { JSX } from 'react';

interface ProductItemProps {
  product: { id: number; title: string; logo: JSX.Element };
  isActive: boolean;
  onClick: () => void;
}

export default function ProductItem({
  product,
  isActive,
  onClick,
}: ProductItemProps) {
  return (
    <div
      className={cn(
        'py-2 px-3 md:py-3 md:px-4 min-w-[80px] md:min-w-32 rounded-full flex flex-col justify-center items-center cursor-pointer transition border border-transparent',
        isActive
          ? 'bg-neutral-50 text-primary'
          : 'text-neutral-400 hover:ring-2 hover:ring-gray-400',
      )}
      onClick={onClick}
    >
      {product.logo}
      <p
        className={cn(
          'text-sm md:text-lg font-bold text-center',
          isActive ? 'text-neutral-900' : 'text-neutral-400',
        )}
      >
        {product.title}
      </p>
    </div>
  );
}
