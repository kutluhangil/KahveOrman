import { useState } from 'react';
import type { Product } from '../Interfaces/product';
import { CoffeeIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

// Üstte görsel, altında isim (espresso) + fiyat (karamel). Tıklayınca modal açılır.
export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
    >
      <div className="aspect-[16/10] w-full bg-soft">
        {!imgError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-caramel/40">
            <CoffeeIcon width={32} height={32} />
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="truncate text-espresso">{product.name}</h3>
        <p className="mt-1 font-medium text-caramel">₺{product.price}</p>
      </div>
    </button>
  );
}
