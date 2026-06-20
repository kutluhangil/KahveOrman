import { SearchIcon } from './icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// İsme göre canlı filtre için arama kutusu
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5">
      <SearchIcon width={20} height={20} className="shrink-0 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Kahve ara..."
        className="w-full bg-transparent text-espresso placeholder:text-muted focus:outline-none"
      />
    </div>
  );
}
