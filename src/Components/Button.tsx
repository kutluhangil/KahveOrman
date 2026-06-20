import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
}

// Tasarımdaki buton stilleri (Primary karamel / Secondary kenarlıklı / danger sil)
export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    primary: 'bg-caramel text-white hover:bg-caramelD',
    secondary:
      'bg-surface text-caramel border-[1.5px] border-caramel hover:bg-soft',
    danger: 'bg-surface text-red-600 border-[1.5px] border-red-200 hover:bg-red-50',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
