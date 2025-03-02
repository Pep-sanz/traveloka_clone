import { cn } from '@/lib/utils';
import { INavItems } from '@/types';
import Link from 'next/link';
import React from 'react';

export default function NavItems({
  items,
  className,
}: {
  items: INavItems[];
  className?: string;
}) {
  return (
    <div className={cn('space-x-3', className)}>
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="px-3 font-semibold py-2 rounded-sm hover:bg-neutral-950/30"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
