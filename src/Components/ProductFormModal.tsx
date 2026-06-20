import { useState } from 'react';
import type { Category, Product } from '../Interfaces/product';
import { CATEGORIES } from '../Interfaces/product';
import Button from './Button';
import { CloseIcon, TrashIcon } from './icons';

interface ProductFormModalProps {
  // null → Ekle modu, dolu → Güncelle modu
  product: Product | null;
  onClose: () => void;
  onSave: (data: Omit<Product, 'id'>, id: string | null) => void;
  onDelete: (id: string) => void;
}

const emptyForm: Omit<Product, 'id'> = {
  name: '',
  price: 0,
  category: 'Single Origin',
  image: '',
  tagline: '',
  description: '',
  roast: '',
  origin: '',
  weight: '',
};

const inputClass =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-espresso placeholder:text-muted focus:border-caramel focus:outline-none';

export default function ProductFormModal({
  product,
  onClose,
  onSave,
  onDelete,
}: ProductFormModalProps) {
  const isEdit = product !== null;
  const [form, setForm] = useState<Omit<Product, 'id'>>(
    product ? { ...product } : emptyForm
  );

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      alert('Lütfen ürün adını girin.');
      return;
    }
    onSave(form, product ? product.id : null);
  }

  function handleDelete() {
    if (!product) return;
    if (window.confirm(`"${product.name}" ürününü silmek istiyor musunuz?`)) {
      onDelete(product.id);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-t-3xl bg-cream p-5 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium text-espresso">
            {isEdit ? 'Ürünü Düzenle' : 'Yeni Ürün'}
          </h2>
          <button
            type="button"
            aria-label="Kapat"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-coffee"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-muted">Ürün Adı</label>
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Ethiopia Yirgacheffe"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm text-muted">Fiyat (₺)</label>
              <input
                type="number"
                min={0}
                className={inputClass}
                value={form.price}
                onChange={(e) => update('price', Number(e.target.value))}
                placeholder="240"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted">Kategori</label>
              <select
                className={inputClass}
                value={form.category}
                onChange={(e) => update('category', e.target.value as Category)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm text-muted">Görsel URL</label>
            <input
              className={inputClass}
              value={form.image}
              onChange={(e) => update('image', e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm text-muted">Kısa Açıklama</label>
            <input
              className={inputClass}
              value={form.tagline}
              onChange={(e) => update('tagline', e.target.value)}
              placeholder="Çiçeksi, bergamot ve limon notaları"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm text-muted">Açıklama</label>
            <textarea
              rows={3}
              className={`${inputClass} resize-none`}
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              placeholder="Ürün hakkında detaylı açıklama"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="mb-1.5 block text-sm text-muted">Kavrum</label>
              <input
                className={inputClass}
                value={form.roast}
                onChange={(e) => update('roast', e.target.value)}
                placeholder="Açık"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted">Menşe</label>
              <input
                className={inputClass}
                value={form.origin}
                onChange={(e) => update('origin', e.target.value)}
                placeholder="Etiyopya"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted">Gramaj</label>
              <input
                className={inputClass}
                value={form.weight}
                onChange={(e) => update('weight', e.target.value)}
                placeholder="250g"
              />
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <Button type="submit" variant="primary" className="w-full">
              Kaydet
            </Button>
            {isEdit && (
              <Button
                type="button"
                variant="danger"
                className="w-full"
                onClick={handleDelete}
              >
                <TrashIcon width={18} height={18} />
                Sil
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
