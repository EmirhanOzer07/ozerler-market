# /content-update — İçerik Güncelleme Rehberi

Siteye sık yapılan içerik güncellemeleri için adım adım rehber.

---

## Telefon / WhatsApp Numarası Değişikliği

Numara değişirse iki aşamada güncelle:

**Aşama 1 — JSON:**
```bash
# data/isletme-bilgi.json dosyasını güncelle
```

**Aşama 2 — Tüm HTML dosyaları (toplu):**
```bash
node -e "
const fs=require('fs'),path=require('path');
const ESK='905462782300', YEN='90XXXXXXXXXX';
function tara(dir){
  fs.readdirSync(dir).forEach(f=>{
    const tam=path.join(dir,f);
    if(fs.statSync(tam).isDirectory()&&!f.startsWith('.')){tara(tam)}
    else if(f.endsWith('.html')){
      let i=fs.readFileSync(tam,'utf8');
      if(i.includes(ESK)){fs.writeFileSync(tam,i.replaceAll(ESK,YEN));console.log('OK:',tam)}
    }
  });
}
tara('.');
"
```

---

## Çalışma Saati Değişikliği

1. `data/calisma-saatleri.json` güncelle
2. `js/main.js → initOpenStatus()` içindeki `420` (07:00) ve `120` (02:00) sabit değerlerini güncelle
3. Tüm HTML dosyalarındaki footer "Her gün 07:00 – 02:00" metnini güncelle
4. `index.html` JSON-LD `openingHoursSpecification` güncelle

---

## Yeni Ürün Kategorisi Ekleme

1. `data/kategoriler.json`'a yeni kategori nesnesi ekle
2. `urunler.html`'e yeni `<section id="yeni-kat" class="kat-section card ...">` bloğu ekle
3. `urunler.html #kat-nav`'a yeni link ekle
4. `en/products.html`'ye İngilizce eşdeğerini ekle
5. `sitemap.xml`'e gerek yoktur (urunler sayfası zaten listelendi)

---

## Blog Yazısı Ekleme

1. `blog/` altına yeni HTML dosyası oluştur — mevcut blog yazılarından birini şablon al
2. `blog.html`'deki kart listesine yeni kartı ekle
3. `sitemap.xml`'e yeni URL ekle:
```xml
<url>
  <loc>https://www.ozerlermarket.com.tr/blog/yeni-yazi-slug</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.6</priority>
</url>
```
4. `netlify.toml`'e redirect ekle:
```toml
[[redirects]]
  from = "/blog/yeni-yazi-slug"
  to   = "/blog/yeni-yazi-slug.html"
  status = 200
```

---

## Google Business Reviews Entegrasyonu (Sahiplik Onaylandıktan Sonra)

1. Google Cloud Console → Places API'yi aktifleştir
2. Place ID'yi bul (Google Maps Place ID Finder)
3. Netlify Dashboard → Environment Variables:
   - `PUBLIC_GOOGLE_PLACE_ID` = `ChIJ...`
   - `GOOGLE_PLACES_API_KEY` = API anahtarı (Netlify Edge Function içinde kullan, client-side'a koyma)
4. `js/reviews.js`'deki `fetchGoogleReviews()` fonksiyonunu implement et
5. `data/yorumlar.json`'da `placeIdConfigured: true` yap
6. `index.html`'deki Google Business placeholder bölümünü gerçek yorumlarla doldur

---

## Fotoğraf Ekleme

Gerçek mağaza/ürün fotoğrafları hazır olduğunda:

- Ürün kategorisi görseli → `images/kategoriler/<id>.jpg` (WebP tercih edilir)
- Blog yazısı görseli → `images/blog/<slug>.jpg`
- Mağaza içi fotoğraf → `images/magaza/<dosya>.jpg`

`images/placeholder/` dosyaları silinmeden önce ilgili HTML'deki `src` değerlerini güncelle.
Tavsiye edilen boyutlar: Blog kart 600×400, kategori 800×500, hero 1200×600 (WebP, max 200KB).
