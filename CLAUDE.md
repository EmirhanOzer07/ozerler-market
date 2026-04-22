# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Proje Özeti

**Özerler Market** — Manavgat, Antalya'da faaliyet gösteren ailece işletilen mahalle marketi ve tekel bayisinin tanıtım/katalog web sitesi. Site üzerinden satış yapılmaz; amaç yerel SEO, bilgilendirme ve WhatsApp sipariş yönlendirmesidir.

- **Canlı:** Netlify (GitHub'dan otomatik deploy)
- **Stack:** Saf HTML/CSS/JS — build adımı yok
- **Diller:** Türkçe (kök `/`) + İngilizce (`/en/`)
- **Hedef kitle:** Manavgat yerel halkı + yaz turistleri (TR, EN)
- **Instagram:** [@ozerler.market07](https://www.instagram.com/ozerler.market07/)
- **WhatsApp:** 0546 278 23 00 → `https://wa.me/905462782300`

---

## KRİTİK YASAL KISITLAMALAR

Türkiye 4207 (tütün) ve 4250 (alkol) sayılı kanunlar:

- ❌ Alkol **marka adı** yazma (Efes, Tuborg, Jack Daniel's, Marlboro vb.)
- ❌ Alkol/tütün **fiyatı** gösterme
- ❌ Alkol/tütün **ürün görseli** kullanma
- ✅ Jenerik kategori adı serbesttir ("bira", "şarap", "rakı", "viski", "sigara")
- ✅ "Geniş yelpazemiz için mağazamıza uğrayın / WhatsApp'tan yazın" CTA serbesttir
- ✅ Alkol/tütün dışı tüm kategoriler serbestçe tanıtılabilir

**Her sayfada zorunlu:**
1. `#age-gate` — sessionStorage tabanlı 18+ doğrulama modal'ı (`yas_onaylandi`)
2. Footer'da yasal uyarı: *"Alkollü içecekler ve tütün ürünleri 18 yaş altına satılmaz. Tütün ürünleri sağlığa zararlıdır."*

---

## Dosya Yapısı

```
/
├── index.html              # Ana sayfa (TR) — JSON-LD LocalBusiness
├── hakkimizda.html         # Hakkımızda (TR)
├── urunler.html            # Ürün kataloğu (TR) — 11 hardcoded kategori, sticky nav
├── iletisim.html           # İletişim + Netlify form → /tesekkur.html
├── blog.html               # Blog listesi (TR)
├── sss.html                # SSS / FAQ (TR) — FAQPage JSON-LD, accordion
├── 404.html                # 404 hata sayfası
├── tesekkur.html           # Form gönderim sonrası teşekkür sayfası
├── blog/
│   ├── manavgat-mahalle-market.html
│   ├── yaz-icecek-onerileri.html
│   └── evde-kahvalti.html
├── en/
│   ├── index.html          # Home (EN)
│   ├── about.html          # About (EN)
│   ├── products.html       # Products (EN) — 11 hardcoded categories, sticky nav
│   └── contact.html        # Contact (EN) — Netlify form → /tesekkur.html
├── css/
│   └── style.css           # Global stiller + CSS değişkenleri
├── js/
│   ├── main.js             # Age gate, açık/kapalı countdown, cookie, nav, back-to-top
│   ├── catalog.js          # Artık kullanılmıyor (kategoriler hardcoded HTML'e taşındı)
│   └── reviews.js          # Google Places API iskeleti (sahiplik bekleniyor)
├── data/
│   ├── isletme-bilgi.json  # Adres, telefon, koordinat, maps embed URL
│   ├── calisma-saatleri.json
│   ├── kategoriler.json    # 13 kategori (11 normal + alkol + tütün)
│   ├── kampanyalar.json
│   └── yorumlar.json       # Boş — Google Business sahipliği bekleniyor
├── images/placeholder/
│   ├── urun-genel.svg      # Ürün kartı placeholder
│   ├── blog-kart.svg       # Blog kartı placeholder
│   └── magaza-ic.svg       # Mağaza fotoğrafı placeholder
├── sitemap.xml             # Tüm TR+EN sayfalar + SSS
├── robots.txt
├── manifest.json
├── netlify.toml            # Redirects (.html gizleme), 404, güvenlik başlıkları
└── .claude/commands/
    ├── deploy.md           # /deploy komutu
    └── audit.md            # /audit komutu
```

---

## Çalıştırma

Build adımı yoktur. Herhangi bir HTML dosyasını doğrudan tarayıcıda aç. Yerel sunucu için (fetch olmadığından file:// da çalışır):

```bash
# Node.js (sistem üzerinde mevcut)
node -e "require('http').createServer((req,res)=>{require('fs').createReadStream('.'+req.url.replace(/\?.*$/,'').replace(/\/$/,'/index.html')).pipe(res)}).listen(8000)"
# Sonra: http://localhost:8000
```

---

## Deploy Akışı

```bash
git add <dosyalar>
git commit -m "açıklama"
git push
```

Netlify GitHub'ı izler → otomatik build (build komutu yok, publish dir `.`) → deploy.

**Cache uyarısı:** `/js/*` ve `/css/*` için `Cache-Control: immutable` aktif. JS/CSS değiştirilirse `?v=N` sorgu parametresiyle cache bust yapılmalı (örn. `catalog.js?v=3`).

---

## İçerik Güncelleme Rehberi

### `data/isletme-bilgi.json`
Adres, telefon, WhatsApp numarası, Google Maps embed URL'si, koordinatlar.
> Telefon değişirse hem bu dosyayı hem tüm `tel:` ve `wa.me/` linklerini güncelle (12 HTML dosyası).

### `data/calisma-saatleri.json`
Günlük açılış/kapanış saatleri. `js/main.js → initOpenStatus()` hardcoded `07:00–02:00` mantığını kullanır.
> Saat değişirse JSON'u VE `main.js`'deki `420` (07:00) ve `120` (02:00) sabit değerlerini güncelle.

### `data/kategoriler.json`
13 ürün kategorisi. Alanlar: `id`, `isim_tr`, `isim_en`, `icon`, `aciklama_tr/en`, `alkol_tutun`.
> `alkol_tutun: true` olan kategoriler `urunler.html` ve `en/products.html`'de özel kısıtlı kart olarak gösterilir.
> Kategori HTML'i `urunler.html` içine hardcoded yazılmıştır; JSON yalnızca referans amaçlıdır.

### `data/kampanyalar.json`
Aktif kampanyalar. `aktif`, `baslangic`, `bitis` alanları.

### `data/yorumlar.json`
Google Business yorumları (şu an boş). Google Business sahipliği onaylanınca `js/reviews.js` ile bağlanacak.

---

## Ürünler Sayfası Mimarisi

`urunler.html` ve `en/products.html` artık **hardcoded HTML** kategorileri içermektedir (SEO için). `catalog.js` artık bu sayfalarda kullanılmamaktadır.

Yapı:
1. Sticky kategori navigasyonu (`#kat-nav`) — scroll ile active state güncellenir
2. 11 kategori bölümü (`<section class="kat-section">`) — her biri `id="kategori-adi"` ile anchor
3. Kısıtlı kategori ayırıcı
4. Alkol & tütün kısıtlı kartı — yasal uyarı, mağazaya yönlendirme
5. "Aradığınızı bulamadınız mı?" CTA kutusu

Yeni kategori eklemek için `urunler.html` ve `en/products.html`'e section ekle, sticky nav'a link ekle, `data/kategoriler.json`'ı güncelle.

---

## Tasarım Sistemi

**Renk paleti (`css/style.css` CSS değişkenleri):**
| Değişken | Renk | Kullanım |
|---|---|---|
| `--bg` | `#140e08` | Ana sayfa zemini |
| `--surface` | `#1e1309` | Bölüm zemini |
| `--surface2` | `#2a1b0e` | Kart zemini |
| `--gold` | `#d4a843` | Birincil vurgu |
| `--gold-light` | `#e8c76a` | Hover altın |
| `--crimson` | `#8b1a2e` | İkincil vurgu (bordo) / kısıtlı kategoriler |
| `--cream` | `#f5ede0` | Ana metin |
| `--muted` | `#9a8570` | Yardımcı metin |

Tailwind renk isimleri: `bg`, `surface`, `surface2`, `gold`, `gold-light`, `crimson`, `cream`, `muted`.

**Fontlar:**
- Başlıklar: `Playfair Display` (serif) — class: `font-display`
- Gövde: `Inter` (sans-serif) — varsayılan

**Ortak component sınıfları (`css/style.css`):**
- `.card` — koyu kenarlıklı, hafif surface2 zemini
- `.btn-primary` — altın dolgu buton
- `.btn-outline` — kenarlıklı buton
- `.nav-link` — nav linki (`.active` class ile aktif stil)
- `.status-badge.open/.closed` — açık/kapalı badge
- `.reveal` — IntersectionObserver ile scroll animasyonu
- `.section-divider` — altın dekoratif çizgi

---

## Nav & Footer

Nav ve footer her sayfaya **inline** yazılmıştır (JS injection yok, FOUC riski yok).

Nav değiştiğinde güncellenmesi gereken dosyalar:
- **TR (7 dosya):** `index.html`, `hakkimizda.html`, `urunler.html`, `iletisim.html`, `blog.html`, `sss.html`, `blog/*.html` (3 dosya)
- **EN (4 dosya):** `en/index.html`, `en/about.html`, `en/products.html`, `en/contact.html`
- **Özel (3 dosya):** `404.html`, `tesekkur.html` (sadece logo+nav, tam nav yok)

Aktif nav linki her sayfada ilgili `<a>` etiketine `class="nav-link active"` ile işaretlenmiştir.

---

## Önemli Teknik Notlar

- **Age gate:** `sessionStorage.getItem('yas_onaylandi')` — her oturumda bir kez sorar
- **Cookie banner:** `localStorage.getItem('cerez_kabul')` — kalıcı
- **Açık/kapalı countdown:** `js/main.js → initOpenStatus()` — 07:00–02:00 arası hesaplar, 60 saniyede bir günceller
- **Google Business reviews:** `js/reviews.js` iskelet — `data/yorumlar.json` boş, sahiplik onayı bekleniyor
- **Netlify Forms:** `iletisim.html` + `en/contact.html` — `data-netlify="true"`, honeypot aktif, action `/tesekkur.html`
- **Placeholder görseller:** `/images/placeholder/` — SVG, on-brand koyu tema, "Fotoğraf Yakında" yazılı
- **Sitemap domain:** `https://www.ozerlermarket.com.tr` — domain zaten bağlı olmalı; değişirse sitemap.xml güncelle

---

## Slash Komutları

- `/deploy` → `.claude/commands/deploy.md` — commit + push + Netlify kontrol adımları
- `/audit`  → `.claude/commands/audit.md`  — yasal uyumluluk + SEO + link kontrolü
