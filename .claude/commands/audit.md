# /audit — Özerler Market Uyumluluk & Kalite Denetimi

## 1. Alkol/Tütün Marka Adı Taraması
```bash
grep -rin "efes\|tuborg\|heineken\|miller\|corona\|jack daniel\|johnnie walker\|jameson\|absolut\|smirnoff\|marlboro\|winston\|camel\|kent\|parliament\|iqos\|philip morris" --include="*.html" .
```
**Beklenen:** Eşleşme yok.

## 2. Alkol/Tütün Fiyat Taraması
```bash
grep -n "fiyat\|₺\|TL\|price" urunler.html en/products.html
```
Alkol veya tütün bağlamında fiyat bilgisi olmamalı.

## 3. Age Gate Kontrolü
```bash
grep -rL "age-gate" --include="*.html" .
```
**Beklenen:** Yalnızca `404.html` ve `tesekkur.html` listede çıkabilir.

## 4. Footer Yasal Uyarı Kontrolü
```bash
grep -rL "18 yaş altına satılmaz" --include="*.html" .
```
**Beklenen:** Yalnızca `404.html` ve `tesekkur.html` listede çıkabilir.

## 5. sessionStorage Kullanımı (yaş doğrulaması)
```bash
grep -rn "localStorage.*yas\|yas.*localStorage" --include="*.js" .
```
**Beklenen:** Eşleşme yok — yalnızca `sessionStorage` kullanılmalı.

## 6. Canonical ve Meta Description
```bash
grep -rL "canonical" --include="*.html" .
grep -rL 'meta name="description"' --include="*.html" .
```

## 7. hreflang Kontrolü
TR ve EN sayfalarının çapraz `hreflang` etiketleri olduğunu kontrol et:
```bash
grep -rn "hreflang" index.html en/index.html urunler.html en/products.html
```

## 8. WhatsApp Linkleri
Tüm WhatsApp linklerinin doğru numarayı içerdiğini kontrol et:
```bash
grep -rn "wa.me/" --include="*.html" . | grep -v "905462782300"
```
**Beklenen:** Eşleşme yok (hepsi doğru numara).

## 9. Placeholder Görsel Kontrolü
Gerçek görsel bağlanmadan placeholder kalan dosyalar:
```bash
grep -rn "placeholder/urun-genel\|placeholder/blog-kart\|placeholder/magaza-ic" --include="*.html" .
```
Listeye bak — gerçek fotoğraf geldikçe placeholder'ları değiştir.

## 10. Bozuk İç Link Kontrolü
```bash
grep -roh 'href="/[^"]*\.html[^"]*"' --include="*.html" . | sed 's/.*href="//' | sed 's/".*//' | sort | uniq
```
Listeyi gezinerek her dosyanın fiziksel olarak var olduğunu doğrula.

## 11. Alt Text Eksikliği
```bash
grep -rn "<img" --include="*.html" . | grep -v 'alt='
```
**Beklenen:** Eşleşme yok.

## 12. Google Business Reviews Durumu
`data/yorumlar.json` dosyasını kontrol et:
```bash
cat data/yorumlar.json
```
`placeIdConfigured: false` ise Google Business sahipliği henüz doğrulanmamıştır. `js/reviews.js` entegrasyonu beklemede.

## Rapor Formatı
Sorun bulunursa: `dosya:satır — sorunun açıklaması` şeklinde raporla.
