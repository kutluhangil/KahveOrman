<div align="center">

<img src="docs/media/hero.svg" alt="KahveOrman — a specialty coffee catalogue and product manager" width="100%">

<p>
  <a href="https://kahveorman.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-open%20the%20catalogue-c47a45?style=for-the-badge&labelColor=120c08"></a>
  <img alt="React" src="https://img.shields.io/badge/React-TypeScript-e8c39e?style=for-the-badge&labelColor=120c08">
  <img alt="Storage" src="https://img.shields.io/badge/storage-LocalStorage-7a9b76?style=for-the-badge&labelColor=120c08">
  <img alt="Backend" src="https://img.shields.io/badge/backend-none-c47a45?style=for-the-badge&labelColor=120c08">
</p>

<p><em>A small, elegant catalogue and product manager for a specialty coffee shop.<br>
Mobile-first, and every bit of data lives in the browser.</em></p>

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## What it is

KahveOrman was built as the final project of a JavaScript web development course. A cream-toned, centred mobile column gives it the feel of a real app. Sign in with any email and password (there is no real authentication), then browse, search and manage the products.

| | |
|---|---|
| **Live search** | Instant filtering by name, aware of Turkish characters. |
| **Categories** | Single Origin, Blend, Cold Brew, Equipment and Accessories. |
| **Full CRUD** | Add, edit and delete from a single modal. |
| **Persistent** | Everything saved in LocalStorage, no server needed. |
| **Graceful images** | Images that fail to load fall back to a coffee placeholder. |
| **Mobile first** | A soft cream palette in a phone-sized column. |

```mermaid
flowchart LR
  L[Login · any credentials] --> C[Catalogue]
  C --> S[Search · category filter]
  C --> M[Modal · add / edit / delete]
  M <--> LS[(LocalStorage)]
```

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**KahveOrman**, bir specialty kahve dükkânı için hazırlanmış küçük ve şık bir katalog ve ürün yönetim uygulaması; JavaScript web geliştirme eğitiminin proje ödevi. Backend yok, tüm veriler tarayıcının LocalStorage'ında duruyor. Türkçe karakter duyarlı canlı arama, kategori filtresi ve tek pencereden ekleme, düzenleme ve silme var.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>Course project · see also the Flutter version, KahveOrmanFlutterApp.</sub>
</div>
