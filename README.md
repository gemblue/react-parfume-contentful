# Beast Parfume Landing Page

Landing page untuk Beast Parfume - Parfume Gentleman eksklusif untuk pria dengan nama produk berbahasa Arab (Malik, Maher, dll).

## Fitur

- 🎯 Prinsip AIDA (Attention, Interest, Desire, Action)
- 🔄 Dynamic product list dari Contentful CMS
- 📝 Static content untuk Hero, Why Us, dan Testimonials (easy maintenance)
- 📱 Responsive design
- 💬 WhatsApp integration untuk pemesanan
- ⚡ Built with React + Vite

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` ke `.env` dan isi dengan credentials Contentful Anda:
```bash
cp .env.example .env
```

3. Konfigurasi di `.env`:
```
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
VITE_CONTENTFUL_ENVIRONMENT=master
VITE_WHATSAPP_NUMBER=628123456789
```

4. Run development server:
```bash
npm run dev
```

## Contentful Content Model

**PENTING:** Landing page ini **hanya menggunakan Contentful untuk Product List**. Section lain (Hero, Why, Testimonials) menggunakan data statis untuk kemudahan maintenance.

### Product (contentType: 'parfumes')
- **name** (Text): Nama produk (e.g., Malik, Maher)
- **description** (Rich Text): Deskripsi produk
- **price** (Number): Harga produk
- **image** (Media): Gambar produk
- **featured** (Boolean): Produk unggulan
- **category** (Text): Kategori (e.g., "Gentleman")
- **notes** (Text): Top, middle, base notes

Untuk edit Hero, Why Us, atau Testimonials, edit langsung di file component masing-masing.

## Struktur Komponen

```
src/
├── components/
│   ├── Hero.jsx          # Hero section dengan promo
│   ├── ProductList.jsx   # Dynamic product list
│   ├── WhyUs.jsx         # Penjelasan WHY
│   ├── SocialProof.jsx   # Testimonials
│   └── CTA.jsx           # WhatsApp CTA
├── services/
│   └── contentful.js     # Contentful API service
├── App.jsx               # Main app
└── main.jsx              # Entry point
```

## Deploy

Build untuk production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```
