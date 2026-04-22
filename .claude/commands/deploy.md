# /deploy — Özerler Market

Netlify'a yeni değişiklikleri güvenli şekilde yayınla.

## Adımlar

### 1. Yasal uyumluluk kontrolü
Alkol/tütün marka adı var mı tara:
```bash
grep -rin "efes\|tuborg\|jack daniel\|marlboro\|winston\|camel\|kent\|iqos\|johnnie walker\|heineken\|miller" --include="*.html" .
```
Eşleşme varsa commit etmeden önce düzelt.

### 2. Footer yasal uyarı kontrolü
Tüm HTML dosyalarında yasal uyarı bulunduğunu doğrula:
```bash
grep -rL "18 yaş altına satılmaz" --include="*.html" .
```
Listelenen dosyalara (404.html ve tesekkur.html hariç) uyarı ekle.

### 3. Age gate kontrolü
```bash
grep -rL "age-gate" --include="*.html" .
```
Yalnızca 404.html ve tesekkur.html listede çıkabilir.

### 4. sitemap.xml lastmod güncelle
`sitemap.xml` içindeki değiştirilen sayfaların `lastmod` tarihlerini bugünkü tarihle güncelle.

### 5. Git durumu ve commit
```bash
git status
git diff
git add <değişen dosyalar>
git commit -m "kısa ve açıklayıcı mesaj"
git push
```

### 6. Deploy kontrolü
Push sonrası Netlify otomatik deploy alır. Netlify dashboard: https://app.netlify.com

## Önemli Notlar
- `/js/*` ve `/css/*` dosyaları `immutable` cache ile servis edilir. Değiştirilirse script/link etiketine `?v=N` ekle
- `data/isletme-bilgi.json` değiştirilirse tüm `tel:`, `wa.me/` ve maps embed linklerini de güncelle (12 HTML dosyası)
- Yeni sayfa eklenince `sitemap.xml` ve `netlify.toml`'e redirect ekle
