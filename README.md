<div align="center">

# ☕ KahveOrman

### Specialty kahve kataloğu & ürün yönetim paneli

Mobil tasarımlı, tamamen tarayıcıda çalışan bir **ürün yönetim** uygulaması.
Backend yok — tüm veriler tarayıcının **LocalStorage**'ında yaşar.

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Yay%C4%B1nda-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

**[🌐 Canlı Demo →](https://kahveorman.vercel.app)**  ·  **[📂 Kaynak Kod →](https://github.com/kutluhangil/KahveOrman)**

</div>

---

## ✨ Hakkında

**KahveOrman**, specialty bir kahve dükkânı için tasarlanmış küçük ve şık bir katalog uygulamasıdır. Krem tonlu, ortalanmış mobil kolon düzeniyle gerçek bir mobil uygulama hissi verir; üzerine **tam CRUD** (Ekle · Listele · Güncelle · Sil) yönetimi ekler. Sayfa yenilense bile veriler kaybolmaz — her şey LocalStorage'da saklanır.

<br/>

<div align="center">

| | |
|:---:|:---:|
| <img src="src/images/Giri%C5%9F%20Ekran%C4%B1.png" width="280"/> | <img src="src/images/%C3%9Cr%C3%BCn%20Listesi.png" width="280"/> |
| **Giriş Ekranı** | **Ürün Listesi** |
| <img src="src/images/%C3%9Cr%C3%BCn%20Ekleme.png" width="280"/> | <img src="src/images/%C3%9Cr%C3%BCn%20D%C3%BCzenleme%20ve%20Detay%20Sayfas%C4%B1.png" width="280"/> |
| **Ürün Ekleme** | **Ürün Düzenleme** |
| <img src="src/images/Silme%20%C4%B0%C5%9Flemi.png" width="280"/> | <img src="src/images/%C3%9Cr%C3%BCn%20Listesi%20Kontrol.png" width="280"/> |
| **Silme İşlemi** | **Liste Kontrolü** |

</div>

---

## 🚀 Özellikler

- 🔍 **Canlı arama** — ürün ismine göre anlık filtreleme (Türkçe karakter duyarlı).
- 🏷️ **Kategori filtresi** — Single Origin, Blend, Cold Brew, Equipment, Accessories.
- ➕ **Ekle / ✏️ Güncelle / 🗑️ Sil** — tek modal üzerinden tam CRUD.
- 💾 **LocalStorage** — kalıcı veri, sunucu gerektirmez.
- 🖼️ **Akıllı görsel** — yüklenemeyen görseller zarif bir kahve ikonu placeholder'ına düşer.
- 📱 **Mobil-öncelikli** tasarım, yumuşak krem paleti.

---

## 🔐 Giriş

> **Kayıt olmana gerek yok.** Giriş ekranı yalnızca demo amaçlıdır.

**Herhangi bir e-posta adresi ve şifre** yazıp **"Giriş Yap"** demen yeterli — doğrudan kataloğa yönlendirilirsin. Gerçek bir doğrulama / API yoktur. (Alanları boş bırakırsan yalnızca küçük bir uyarı görürsün.)

---

## 🧭 Kullanım

### ➕ Nasıl ürün eklenir?
1. Katalog ekranında **"Öne çıkanlar"** başlığının yanındaki **"+ Ürün Ekle"** butonuna tıkla.
2. Açılan boş formu doldur: ad, fiyat, kategori, görsel URL, açıklamalar, kavrum, menşe, gramaj.
3. **"Kaydet"** → ürün anında listeye ve LocalStorage'a eklenir.

### ✏️ Nasıl ürün güncellenir?
1. Listeden herhangi bir **ürün kartına tıkla**.
2. Form, o ürünün bilgileriyle **dolu** olarak açılır.
3. İstediğin alanı değiştir → **"Kaydet"** → ürün güncellenir.

### 🗑️ Nasıl ürün silinir?
1. Ürün kartına tıklayıp düzenleme penceresini aç.
2. Alttaki **"Sil"** butonuna bas.
3. Çıkan **onay** kutusunu kabul et → ürün LocalStorage'dan kaldırılır.

### 🖼️ Nasıl görsel eklenir?
Formdaki **"Görsel URL"** alanına bir **doğrudan görsel bağlantısı** yapıştır.

> **Önemli:** Bağlantı, bir görsel dosyasına işaret etmelidir; bir web sayfasına değil.
>
> | Tip | Örnek | Çalışır mı? |
> |---|---|:---:|
> | ✅ Görsel dosyası | `https://images.unsplash.com/photo-...` | ✔️ |
> | ❌ Sayfa linki | `https://unsplash.com/photos/...` | ✖️ |
>
> Unsplash'te fotoğrafa **sağ tık → "Resim adresini kopyala"** ile doğru linki alabilirsin. Bağlantı geçersizse kart otomatik olarak kahve ikonlu placeholder gösterir.

---

## 🗂️ Proje Yapısı

```
src/
├── Components/    Navbar · SearchBar · CategoryChips · ProductCard · ProductFormModal · Button · Footer
├── Pages/         LoginPage · CatalogPage
├── Interfaces/    product.ts  (Product & Category tipleri)
├── hooks/         useProducts.ts  (LocalStorage CRUD)
├── data/          seedProducts.ts  (başlangıç ürünleri)
└── images/        ekran görüntüleri
```

---

## 🛠️ Teknolojiler

- 📦 **Veriler LocalStorage'da saklanır**
- ⚛️ **React + TypeScript + Vite + Tailwind CSS**
- 🌐 **Vercel ile yayına alınmıştır**

---

## 💻 Kurulum & Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu (http://localhost:5173)
npm run dev

# Üretim derlemesi
npm run build
npm run preview
```

---

## 🎨 Tasarım

Arayüz, Figma'da hazırlanmış mobil tasarıma **birebir sadık** kalınarak geliştirildi.

- **Düzen:** Krem zemin üzerinde ortalanmış, ~390px genişliğinde mobil kolon.
- **Tipografi:** Inter (Regular + Medium).
- **Renk paleti:**

  | Token | Renk | Token | Renk |
  |---|---|---|---|
  | `cream` | `#FAF4EC` | `espresso` | `#2C211B` |
  | `caramel` | `#BB6A3C` | `coffee` | `#4A3528` |
  | `soft` | `#F4E5D7` | `muted` | `#81756F` |

- **Bileşenler:** 12–16px köşe yarıçapı, 8'in katı boşluklar, yumuşak gölgeli kartlar.

---

## ✅ Ödev Gereksinimleri

| Gereksinim | Durum |
|---|:---:|
| Modern JS kütüphanesi (React) | ✅ |
| `Components`, `Pages`, `Interfaces` klasörleri | ✅ |
| Tailwind CSS kullanımı | ✅ |
| TODO App benzeri uygulama mantığı | ✅ |
| **Ekle** işlemi | ✅ |
| **Listeleme** işlemi | ✅ |
| **Güncelleme** işlemi | ✅ |
| **Silme** işlemi | ✅ |
| LocalStorage ile veri saklama | ✅ |
| En az 1 ekran görüntüsü | ✅ |
| Public GitHub deposu | ✅ |
| Yayına alma (Vercel) | ✅ |

<div align="center">

<br/>

**☕ KahveOrman** — küçük bir katalog, sağlam temeller.

</div>
