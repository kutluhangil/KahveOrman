import { BagIcon } from './icons';

interface NavbarProps {
  name: string;
}

// Katalog üst selamı: soluk "Günaydın" + kalın isim, sağda ikon buton
export default function Navbar({ name }: NavbarProps) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted">Günaydın</p>
        <h1 className="text-2xl font-medium text-espresso">{name}</h1>
      </div>
      <button
        type="button"
        aria-label="Bildirimler"
        className="relative grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-coffee"
      >
        <BagIcon width={20} height={20} />
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-caramel" />
      </button>
    </header>
  );
}
