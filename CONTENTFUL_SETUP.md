# Contentful CMS Setup Guide untuk Beast Parfume

## Overview
Landing page Beast Parfume **hanya menggunakan Contentful untuk Product List**. 

Semua section lain (Hero, Why Us, Testimonials, CTA) menggunakan **data statis** di code untuk kemudahan maintenance.

---

## Content Model: Product (Parfumes)

**Content Type ID:** `parfumes`

| Field Name | Field ID | Type | Required | Validation |
|------------|----------|------|----------|------------|
| Name | name | Short Text | Yes | Max 100 characters |
| Description | description | Long Text | Yes | Max 500 characters |
| Price | price | Number | Yes | Integer only |
| Image | image | Media | Yes | Images only |
| Featured | featured | Boolean | No | Default: false |
| Category | category | Short Text | No | Max 50 characters |
| Notes | notes | Long Text | No | Fragrance notes |

---

## Setup Steps

### 1. Create Contentful Account & Space
1. Sign up di [contentful.com](https://www.contentful.com/)
2. Create new space: "Beast Parfume"
3. Copy Space ID

### 2. Create Content Model
1. Go to **Content model** > **Add content type**
2. Name: "Parfumes"
3. API identifier: `parfumes` (huruf kecil, penting!)
4. Add fields:

**Field 1: Name**
- Type: Short text
- Required: Yes

**Field 2: Description**
- Type: Long text
- Required: Yes

**Field 3: Price**
- Type: Number
- Format: Integer
- Required: Yes

**Field 4: Image**
- Type: Media
- Validation: Images only
- Required: Yes

**Field 5: Featured**
- Type: Boolean
- Default: false

**Field 6: Category**
- Type: Short text

**Field 7: Notes**
- Type: Long text
- Help text: "Fragrance notes (Top, Middle, Base)"

5. **Save** content model

### 3. Create Sample Products

**Product 1: Malik**
```
Name: Malik
Description: Aroma royal yang memancarkan kepemimpinan dan kharisma. Perfect untuk business meetings dan formal events.
Price: 350000
Image: [Upload gambar parfume]
Featured: true
Category: Gentleman
Notes: Top: Bergamot, Lemon | Middle: Lavender, Sage | Base: Cedarwood, Amber
```

**Product 2: Maher**
```
Name: Maher
Description: Aroma sophisticated untuk pria profesional dengan karakter yang kompleks dan menarik.
Price: 325000
Image: [Upload gambar]
Featured: true
Category: Gentleman
Notes: Top: Lemon, Mint | Middle: Jasmine, Rose | Base: Musk, Patchouli
```

**Product 3: Rashid**
```
Name: Rashid
Description: Aroma clean dan fresh untuk everyday use dengan kesan yang segar sepanjang hari.
Price: 299000
Image: [Upload gambar]
Featured: false
Category: Gentleman
Notes: Top: Mint, Eucalyptus | Middle: Sage, Thyme | Base: Sandalwood, Vetiver
```

**Product 4: Aziz**
```
Name: Aziz
Description: Aroma kuat dan maskulin untuk special occasions dengan kesan yang bold dan memorable.
Price: 375000
Image: [Upload gambar]
Featured: false
Category: Gentleman
Notes: Top: Grapefruit, Black Pepper | Middle: Cardamom, Clove | Base: Leather, Tobacco
```

**Product 5: Karim**
```
Name: Karim
Description: Aroma warm dan inviting yang menciptakan kesan ramah dan approachable.
Price: 340000
Image: [Upload gambar]
Featured: false
Category: Gentleman
Notes: Top: Orange, Cinnamon | Middle: Honey, Nutmeg | Base: Vanilla, Tonka Bean
```

⚠️ **PENTING:** Pastikan semua products di-**Publish** (bukan draft)!

### 4. Get API Credentials
1. Go to **Settings** > **API keys**
2. Click **Add API key**
3. Name: "Beast Parfume Production"
4. Copy:
   - **Space ID**
   - **Content Delivery API - access token**

### 5. Configure Environment Variables

Edit file `.env` di root project:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
VITE_CONTENTFUL_ENVIRONMENT=master
VITE_WHATSAPP_NUMBER=628123456789
```

Ganti `your_space_id_here` dan `your_access_token_here` dengan credentials dari step 4.

### 6. Test
1. Restart dev server: `npm run dev`
2. Buka http://localhost:5173
3. Scroll ke section "Koleksi Parfume Gentleman"
4. Products dari Contentful akan muncul! ✅

---

## Image Guidelines

**Recommended:**
- Format: JPG atau PNG
- Ukuran: 800x800px atau 1000x1000px
- File size: < 500KB
- Background: Putih atau transparan
- Style: Product shot, clean, professional

**Free Image Resources:**
- Unsplash.com (search: "perfume bottle")
- Pexels.com (search: "cologne")
- Atau foto produk sendiri

---

## Troubleshooting

### Products tidak muncul di website

**Check 1: Content Type ID**
```
Content Type ID harus: parfumes (huruf kecil semua)
```

**Check 2: Published Status**
```
Di Contentful, pastikan semua products sudah Published (ada indicator hijau)
```

**Check 3: Environment Variables**
```
File .env sudah diisi dengan benar?
Restart dev server setelah edit .env
```

**Check 4: Browser Console**
```
Buka Developer Tools > Console
Lihat ada error message?
```

**Check 5: Field Names**
```
Field IDs harus match:
- name (bukan Name atau title)
- description (bukan desc)
- price (number, bukan text)
- image (media field)
```

### Images tidak tampil

- Pastikan image sudah di-upload
- Field type adalah "Media" bukan "Short text"
- URL image dari Contentful biasanya dimulai dengan '//'

### Muncul Mock Data Banner

Jika muncul banner kuning "Mode Demo", artinya:
- Contentful belum dikonfigurasi, atau
- Ada error saat fetch data
- App otomatis fallback ke mock data (products dummy)

---

## Static Content (Tidak Perlu Contentful)

Section berikut menggunakan **data statis** di code:

| Section | File Location | Edit |
|---------|---------------|------|
| Hero | `src/components/Hero.jsx` | Langsung edit code |
| Why Us | `src/components/WhyUs.jsx` | Langsung edit code |
| Testimonials | `src/components/SocialProof.jsx` | Langsung edit code |
| CTA | `src/components/CTA.jsx` | Edit WhatsApp number di .env |
| Footer | `src/components/Footer.jsx` | Langsung edit code |

Untuk mengubah content di section tersebut, edit langsung file component-nya.

---

## Keuntungan Setup Ini

✅ **Simple**: Hanya 1 content model  
✅ **Fast**: Tidak perlu setup banyak content types  
✅ **Flexible**: Content statis mudah di-edit langsung  
✅ **Performance**: Lebih cepat karena less API calls  
✅ **Maintainable**: Easy to update products via Contentful  

---

## Next Steps

Setelah setup Contentful:

1. ✅ Upload gambar product yang menarik
2. ✅ Tulis deskripsi yang compelling
3. ✅ Set harga yang competitive
4. ✅ Mark 2-3 products sebagai "Featured"
5. ✅ Test ordering via WhatsApp
6. ✅ Deploy ke production (Vercel/Netlify)

---

**Happy Selling! 🚀**

Jika ada pertanyaan, check dokumentasi di `README.md` atau `QUICK_START.md`.
