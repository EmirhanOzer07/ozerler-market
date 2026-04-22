# Audit — Yasal Uyumluluk & Kalite Kontrolü

## 1. Alkol/Tütün Marka Adı Taraması
HTML dosyalarında marka adı olup olmadığını kontrol et:
```
grep -rin "efes\|tuborg\|heineken\|miller\|corona\|jack daniel\|johnnie walker\|jameson\|absolut\|smirnoff\|marlboro\|winston\|camel\|kent\|parliament\|iqos\|lm\|philip morris" --include="*.html" .
```
**Beklenen sonuç:** Eşleşme yok.

## 2. Alkol/Tütün Fiyat Taraması
Alkol/tütün kategorilerinde fiyat bilgisi var mı:
```
grep -n "fiyat\|₺\|TL\|price" urunler.html en/products.html
```
Alkol veya tütün ile birlikte fiyat bilgisi olmamalı.

## 3. 18+ Modal Kontrolü
Her sayfada `age-gate` div'i var mı:
```
grep -rL "age-gate" --include="*.html" .
```
**Beklenen sonuç:** Boş liste (tüm sayfalarda var).

## 4. Footer Yasal Uyarı Kontrolü
Her sayfada yasal uyarı var mı:
```
grep -rL "18 yaş altına satılmaz" --include="*.html" .
```
**Beklenen sonuç:** Boş liste.

## 5. sessionStorage Kontrolü (localStorage değil)
Yaş doğrulaması sessionStorage ile yapılıyor mu:
```
grep -rn "localStorage.*yas\|yas.*localStorage" --include="*.js" .
```
**Beklenen sonuç:** Eşleşme yok — yalnızca `sessionStorage` kullanılmalı.

## 6. Canonical ve Meta Açıklama
Her sayfada canonical ve meta description var mı:
```
grep -rL "canonical" --include="*.html" .
grep -rL "meta name=\"description\"" --include="*.html" .
```

## 7. Alt Text Kontrolü
Resim etiketlerinde alt text eksik mi:
```
grep -rn "<img" --include="*.html" . | grep -v "alt="
```
**Beklenen sonuç:** Eşleşme yok.

## 8. Bozuk Iç Link Kontrolü
Tüm href'lerin var olan dosyalara işaret ettiğini elle kontrol et veya:
```
grep -roh 'href="[^"]*\.html[^"]*"' --include="*.html" . | sort | uniq
```
Listeyi gezinerek her dosyanın var olduğunu doğrula.

## Rapor
Sorun bulunursa: dosya adı + satır numarası + sorunun açıklaması şeklinde raporla.
