# KahveOrman

KahveOrman, specialty bir kahve dükkânı için tarayıcıda çalışan **ürün kataloğu ve yönetim** uygulamasıdır. Mobil tasarımlı arayüz üzerinde tam **CRUD** (Ekle, Listele, Güncelle, Sil) sunar. Backend yoktur; tüm veriler tarayıcının **LocalStorage**'ında saklanır.

## Özellikler

- **Ekle:** "+ Ürün Ekle" ile yeni ürün oluşturma.
- **Listele:** Ürünlerin 2 kolonlu grid'de listelenmesi; isme göre arama ve kategoriye göre filtreleme.
- **Güncelle:** Bir ürün kartına tıklayıp formu dolu açarak güncelleme.
- **Sil:** Düzenleme penceresinden onaylı silme.
- Giriş ekranı (örnek amaçlı; "Giriş Yap" doğrudan katalog sayfasına yönlendirir).

## Kullanılan Teknolojiler

- **React + TypeScript + Vite**
- **Tailwind CSS**
- **react-router-dom** (giriş → katalog yönlendirmesi)
- **LocalStorage** (veri saklama)

## Klasör Yapısı

```
src/
  Components/    Navbar, SearchBar, CategoryChips, ProductCard, ProductFormModal, Button
  Pages/         LoginPage, CatalogPage
  Interfaces/    product.ts (Product ve Category tipleri)
  hooks/         useProducts.ts (LocalStorage CRUD)
  data/          seedProducts.ts (başlangıç ürünleri)
```

## Çalıştırma

```bash
npm install
npm run dev
```

Ardından terminalde görünen adresi (varsayılan `http://localhost:5173`) tarayıcıda açın.

Üretim derlemesi için:

```bash
npm run build
npm run preview
```

## Ekran Görüntüsü

![KahveOrman](screenshot.png)

## Yayın

Proje statik bir SPA'dır; Vercel veya Netlify gibi servislerle yayına alınabilir. Vercel için derleme komutu `npm run build`, çıktı dizini `dist`'tir (`vercel.json` içinde SPA yönlendirmesi tanımlıdır).
