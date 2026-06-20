import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { CoffeeIcon, EyeIcon, EyeOffIcon, MailIcon } from '../Components/icons';

// Giriş ekranı — auth gerçek değil, "Giriş Yap" doğrudan /catalog'a yönlendirir.
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('kahveorman');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Lütfen e-posta ve şifre alanlarını doldurun.');
      return;
    }
    navigate('/catalog');
  }

  return (
    <div className="flex min-h-full justify-center bg-cream">
      <div className="flex w-full max-w-sm flex-col px-6 pt-16 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-soft text-caramel">
            <CoffeeIcon width={34} height={34} />
          </div>
          <p className="mt-4 text-lg font-medium">
            <span className="text-espresso">Kahve</span>
            <span className="text-caramel">Orman</span>
          </p>
        </div>

        {/* Başlık */}
        <div className="mt-12">
          <h1 className="text-3xl font-medium text-espresso">Tekrar hoş geldin</h1>
          <p className="mt-2 text-muted">Hesabına giriş yap</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-muted">E-posta</label>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5">
              <MailIcon width={20} height={20} className="shrink-0 text-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@kahveorman.com"
                className="w-full bg-transparent text-espresso placeholder:text-muted focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-muted">Şifre</label>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-espresso placeholder:text-muted focus:outline-none"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                onClick={() => setShowPassword((s) => !s)}
                className="shrink-0 text-muted"
              >
                {showPassword ? (
                  <EyeOffIcon width={20} height={20} />
                ) : (
                  <EyeIcon width={20} height={20} />
                )}
              </button>
            </div>
            <div className="mt-2 text-right">
              <button type="button" className="text-sm font-medium text-caramel">
                Şifremi unuttum?
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" variant="primary" className="w-full">
            Giriş Yap
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Hesabın yok mu?{' '}
          <button type="button" className="font-medium text-caramel">
            Kayıt ol
          </button>
        </p>
      </div>
    </div>
  );
}
