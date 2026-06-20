import { useMemo, useState } from 'react';
import type { Product } from '../Interfaces/product';
import { useProducts } from '../hooks/useProducts';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import CategoryChips from '../Components/CategoryChips';
import type { CategoryFilter } from '../Components/CategoryChips';
import ProductCard from '../Components/ProductCard';
import ProductFormModal from '../Components/ProductFormModal';
import Footer from '../Components/Footer';
import { CoffeeIcon, PlusIcon } from '../Components/icons';

// Ana ekran: listeleme + arama + kategori filtresi + CRUD modalı
export default function CatalogPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('Tümü');

  // Modal: kapalı | ekle (editing=null) | düzenle (editing=product)
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  // Listeleme: arama (isme göre) + kategori filtresi
  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr');
    return products.filter((p) => {
      const matchesQuery = p.name.toLocaleLowerCase('tr').includes(q);
      const matchesCategory = category === 'Tümü' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  function openAdd() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(product: Product) {
    setEditing(product);
    setModalOpen(true);
  }

  function handleSave(data: Omit<Product, 'id'>, id: string | null) {
    if (id) {
      updateProduct(id, data);
    } else {
      addProduct(data);
    }
    setModalOpen(false);
  }

  function handleDelete(id: string) {
    deleteProduct(id);
    setModalOpen(false);
  }

  return (
    <div className="flex min-h-full justify-center bg-cream">
      <div className="w-full max-w-sm px-5 pt-12 pb-10">
        <Navbar name="Kutluhan" />

        <div className="mt-5">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Bu haftanın çekirdeği */}
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-coffee px-5 py-5 text-white">
          <div>
            <p className="text-sm text-white/70">Bu haftanın çekirdeği</p>
            <p className="mt-1 text-xl font-medium">Ethiopia Yirgacheffe</p>
          </div>
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/15">
            <CoffeeIcon width={26} height={26} className="text-white" />
          </div>
        </div>

        <div className="mt-5">
          <CategoryChips selected={category} onSelect={setCategory} />
        </div>

        {/* Öne çıkanlar + Ürün Ekle */}
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-espresso">Öne çıkanlar</h2>
          <button
            type="button"
            onClick={openAdd}
            className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-caramel px-3.5 py-2 text-sm font-medium text-caramel transition-colors hover:bg-soft"
          >
            <PlusIcon width={16} height={16} />
            Ürün Ekle
          </button>
        </div>

        {/* Ürün grid'i (2 kolon) */}
        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => openEdit(product)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-muted">
            Aramanıza uygun ürün bulunamadı.
          </p>
        )}

        <Footer />
      </div>

      {modalOpen && (
        <ProductFormModal
          product={editing}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
