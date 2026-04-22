# Deploy — Özerler Market

Netlify'a yeni değişiklikleri yayınla.

## Adımlar

1. **Yasal uyumluluk kontrolü** — alkol/tütün marka adı ya da fiyat var mı tara:
   ```
   grep -ri "efes\|jack daniel\|marlboro\|winston\|tekel\|johnnie" --include="*.html" .
   ```
   Eşleşme varsa commit etmeden önce düzelt.

2. **Footer yasal uyarısı kontrolü** — tüm HTML dosyalarında bulunduğunu doğrula:
   ```
   grep -rL "18 yaş altına satılmaz" --include="*.html" .
   ```
   Listelenen dosyalara uyarı ekle.

3. **Git durumu**:
   ```
   git status
   git diff
   ```

4. **Commit** (anlamlı mesaj):
   ```
   git add <değişen dosyalar>
   git commit -m "kısa açıklama"
   ```

5. **Push** → Netlify otomatik deploy alır:
   ```
   git push
   ```

6. Netlify dashboard'dan deploy durumunu kontrol et.
   URL: https://app.netlify.com

## Notlar
- `data/*.json` dosyalarını değiştirince sayfaları yeniden test et
- `sitemap.xml` içindeki `lastmod` tarihlerini güncelle
- Domain henüz bağlı değilse Netlify subdomain üzerinden test et
