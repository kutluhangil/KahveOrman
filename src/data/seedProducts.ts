import type { Product } from '../Interfaces/product';

// LocalStorage boşken yüklenecek başlangıç ürünleri.
// Görseller Unsplash kahve fotoğraflarıdır; yüklenemezse karttaki
// onError ile "soft" renkli zemine düşülür.
export const seedProducts: Product[] = [
  {
    id: 'seed-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    price: 240,
    category: 'Single Origin',
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    tagline: 'Çiçeksi, bergamot ve limon notaları',
    description:
      'Çiçeksi aromalı, bergamot ve limon notalarıyla öne çıkan açık kavrumlu tek kökenli kahve. El ile demleme için ideal.',
    roast: 'Açık',
    origin: 'Etiyopya',
    weight: '250g',
  },
  {
    id: 'seed-colombia',
    name: 'Colombia Huila',
    price: 220,
    category: 'Single Origin',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
    tagline: 'Karamel ve kakao notaları',
    description:
      'Karamel ve kakao notalarıyla dengeli, orta kavrumlu tek kökenli kahve. Hem filtre hem espresso için uygun.',
    roast: 'Orta',
    origin: 'Kolombiya',
    weight: '250g',
  },
  {
    id: 'seed-house-blend',
    name: 'House Blend',
    price: 200,
    category: 'Blend',
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
    tagline: 'Dengeli, günlük içim',
    description:
      'Dengeli ve yumuşak içimiyle her güne uygun harman. Süt bazlı içeceklerle de iyi çalışır.',
    roast: 'Orta',
    origin: 'Harman',
    weight: '250g',
  },
  {
    id: 'seed-cold-brew',
    name: 'Cold Brew Klasik',
    price: 180,
    category: 'Cold Brew',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    tagline: 'Yumuşak, düşük asit',
    description:
      'Soğuk demleme yöntemiyle hazırlanan, yumuşak ve düşük asitli içime sahip klasik cold brew.',
    roast: 'Orta',
    origin: 'Harman',
    weight: '330ml',
  },
  {
    id: 'seed-v60',
    name: 'V60 Dripper',
    price: 260,
    category: 'Equipment',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    tagline: 'Seramik el demleme aparatı',
    description:
      'Dengeli ekstraksiyon için tasarlanmış seramik V60 el demleme aparatı. Filtre kahve severler için ideal.',
    roast: '—',
    origin: '—',
    weight: '1 adet',
  },
  {
    id: 'seed-filter-paper',
    name: "Filtre Kağıdı (100'lü)",
    price: 90,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
    tagline: 'V60 uyumlu filtre kağıdı',
    description:
      "V60 dripper ile uyumlu, 100'lü paket filtre kağıdı. Temiz ve berrak bir fincan sağlar.",
    roast: '—',
    origin: '—',
    weight: '100 adet',
  },
];
