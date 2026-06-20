import { CATEGORIES } from '../Interfaces/product';
import type { Category } from '../Interfaces/product';

export type CategoryFilter = 'Tümü' | Category;

interface CategoryChipsProps {
  selected: CategoryFilter;
  onSelect: (value: CategoryFilter) => void;
}

const filters: CategoryFilter[] = ['Tümü', ...CATEGORIES];

// Seçili chip karamel dolgu + beyaz yazı; diğerleri beyaz + ince kenarlık
export default function CategoryChips({ selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {filters.map((filter) => {
        const active = filter === selected;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onSelect(filter)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? 'bg-caramel text-white'
                : 'border border-line bg-surface text-espresso'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
