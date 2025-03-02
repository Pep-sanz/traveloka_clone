import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { JSX } from 'react';
import ProductItem from './ProductItem';

interface ProductDialogProps {
  products: { id: number; title: string; logo: JSX.Element }[];
  isOpen: boolean;
  onClose: () => void;
  setActiveProductId: (id: number) => void;
}

export default function ProductDialog({
  products,
  isOpen,
  onClose,
  setActiveProductId,
}: ProductDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pilih Produk</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isActive={false}
              onClick={() => {
                setActiveProductId(product.id);
                onClose();
              }}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
