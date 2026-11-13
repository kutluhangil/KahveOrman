<div align="center">

<img src="docs/media/hero.svg" alt="KahveOrman — search and a category chip narrow the coffee catalogue, a product's price is edited in the modal and saved to LocalStorage" width="100%">

<p>
  <a href="https://kahveorman.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-open%20the%20shop-c47a45?style=for-the-badge&labelColor=5a3b2a"></a>
  <img alt="React" src="https://img.shields.io/badge/React%2018-TypeScript-e8c39e?style=for-the-badge&labelColor=5a3b2a">
  <img alt="Storage" src="https://img.shields.io/badge/data-LocalStorage-7a9b76?style=for-the-badge&labelColor=5a3b2a">
  <img alt="Backend" src="https://img.shields.io/badge/backend-none-c47a45?style=for-the-badge&labelColor=5a3b2a">
</p>

<p><em>A small, elegant catalogue and product manager for a specialty coffee shop.<br>
Search, filter, add, edit and delete, with everything kept in your browser.</em></p>

<img src="src/images/KahveOrman_Ekranlar.png" alt="KahveOrman screens" width="100%">

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## The idea

The web edition of KahveOrman, a course project; the [Flutter version](https://github.com/kutluhangil/KahveOrmanFlutterApp) later rebuilt the same shop for mobile. The brief: a mobile-first catalogue where the shop owner can manage products without a server. So the data starts from a small seed list and lives in LocalStorage; every add, edit and delete survives a refresh.

> **No backend, on purpose.** The first visit writes the seed products to `kahveorman:products`; after that the browser is the database. Clear site data and the shop resets to its starting menu.

<img src="docs/media/divider.svg" width="100%" alt="">

## Features

| | |
|---|---|
| **Sign-in screen** | A simple log-in page that leads to the catalogue (a demo gate with a prefilled password, not real authentication). |
| **Live search** | Filters by name as you type, using Turkish-aware lower-casing (`toLocaleLowerCase('tr')`). |
| **Categories** | Chips for Single Origin, Blend, Cold Brew, Equipment and Accessories. |
| **Full CRUD** | Add, edit and delete from one modal; deleting asks for confirmation. |
| **Persistent** | A `useProducts` hook keeps the list in LocalStorage. |
| **Graceful images** | A product image that fails to load falls back to a coffee placeholder. |
| **Mobile first** | A soft cream palette in a phone-sized column, Tailwind CSS. |

<img src="docs/media/divider.svg" width="100%" alt="">

## How it fits together

```mermaid
flowchart LR
  L[/login/] --> C[/catalog/]
  C --> S[SearchBar · CategoryChips]
  S --> LIST[ProductCard list]
  LIST --> M[ProductFormModal<br/>add · edit · delete]
  M --> H[useProducts]
  H <--> LS[(LocalStorage<br/>kahveorman:products)]
  SEED[seedProducts.ts] -. first visit .-> LS
```

| Seed product | Category | Price |
|---|---|---|
| Ethiopia Yirgacheffe | Single Origin | ₺240 |
| Colombia Huila | Single Origin | ₺220 |
| House Blend | Blend | ₺200 |
| Cold Brew Klasik | Cold Brew | ₺180 |
| V60 Dripper | Equipment | ₺260 |
| Filtre Kağıdı (100'lü) | Accessories | ₺90 |

<sub>Prices are sample data.</sub>

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**KahveOrman**, bir specialty kahve dükkânı için hazırlanmış küçük ve şık bir katalog ve ürün yönetimi uygulaması; bir ders projesi (aynı dükkânın Flutter sürümü de var). Türkçe karakterlere duyarlı anlık arama, kategori çipleri ve tek bir pencereden ürün ekleme, düzenleme, silme var. Veriler tarayıcının LocalStorage'ında tutuluyor, sunucu yok; ilk açılışta örnek ürünler yükleniyor.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build
```

```
src/Pages/        LoginPage, CatalogPage
src/Components/   Navbar, SearchBar, CategoryChips, ProductCard, ProductFormModal, Button, Footer, icons
src/hooks/        useProducts (LocalStorage)
src/data/         seedProducts
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>Course project · see also the Flutter version, KahveOrmanFlutterApp.</sub>
</div>
