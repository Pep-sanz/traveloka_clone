'use client';

import FormFilter from '@/components/elements/FormFilter';
import ProductDialog from '@/components/elements/ProductDialog';
import ProductList from '@/components/elements/ProductList';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { products } from '@/constants/product';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function IntrodactionSection() {
  const router = useRouter();
  const [activeProductId, setActiveProductId] = useState(products[0].id);
  const selectedProduct = products.find(
    (product) => product.id === activeProductId,
  );
  const categories = selectedProduct ? selectedProduct.category : [];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const handleSearch = (data: any) => {
    console.log(data);
    router.push(`/hotel/${data.location}`);
  };
  return (
    <div className="w-full py-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center min-h-screen md:h-[90vh] md:min-h-[70vh] bg-cover bg-center bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2025/01/05/1736039117166-e16913199b4e62397ea8435ddd83b811.png?tr=dpr-2,q-75')]">
      <ProductList
        products={products}
        activeProductId={activeProductId}
        setActiveProductId={setActiveProductId}
        setIsDialogOpen={setIsDialogOpen}
      />
      <ProductDialog
        products={products}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        setActiveProductId={setActiveProductId}
      />
      <div className="w-full mt-2 p-4 text-white rounded-lg">
        <RadioGroup
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-2"
        >
          {categories.map((category, index) => (
            <Label
              key={index}
              htmlFor={`category-${index}`}
              className={`cursor-pointer px-4 py-2 rounded-full text-center text-sm md:text-base transition-all
            ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-neutral-800/40 hover:bg-gray-700'
            }
          `}
            >
              <RadioGroupItem
                value={category}
                id={`category-${index}`}
                className="hidden"
              />
              {category}
            </Label>
          ))}
        </RadioGroup>
      </div>
      <FormFilter onSearch={handleSearch} />
    </div>
  );
}
