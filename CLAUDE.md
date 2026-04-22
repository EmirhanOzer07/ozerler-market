# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Proje Özeti

**Özerler Market** — Manavgat, Antalya'da faaliyet gösteren ailece işletilen mahalle marketi ve tekel bayisinin tanıtım/katalog web sitesi. Site üzerinden satış yapılmaz; amaç yerel SEO, bilgilendirme ve WhatsApp sipariş yönlendirmesidir.

- **Canlı:** Netlify (GitHub'dan otomatik deploy)
- **Stack:** Saf HTML/CSS/JS — build adımı yok
- **Diller:** Türkçe (kök `/`) + İngilizce (`/en/`)
- **Hedef kitle:** Manavgat yerel halkı + yaz turistleri (TR, EN)

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
1. `#age-gate` — sessionStorage tabanlı 18+ doğrulama modal'ı
2. Footer'da yasal uyarı: *"Alkollü içecekler ve tütün ürünleri 18 yaş altına satılmaz. Tütün ürünleri sağlığa zararlıdır."*

---

## Dosya Yapısı

```
/
├── index.html              # Ana sayfa (TR)
├── hakkimizda.html         # Hakkımızda (TR)
├── urunler.html            # Ürün kataloğu (TR)
├── iletisim.html           # İletişim + form (TR)
├── blog.html               # Blog listesi (TR)
├── blog/
│   ├── manavgat-mahalle-market.html
│   ├── yaz-icecek-onerileri.html
│   └── evde-kahvalti.html
├── en/
│   ├── index.html          # Home (EN)
│   ├── about.html          # About (EN)
│   ├── products.html       # Products (EN)
│   └── contact.html        # Contact (EN)
├── css/
│   └── style.css           # Global stiller + CSS değişkenleri
├── js/
│   ├── main.js             # Age gate, open/closed, cookie banner, nav, back-to-top
│   └── catalog.js          # Ürün kataloğu filtreleme (urunler + en/products)
├── data/                   # İçerik güncelleme JSON'ları (aşağıya bak)
│   ├── isletme-bilgi.json
│   ├── calisma-saatleri.json
│   ├── kategoriler.json
│   ├── kampanyalar.json
│   └── yorumlar.json
├── sitemap.xml
├── robots.txt
├── manifest.json
├── netlify.toml            # Netlify redirect + header kuralları
└── .claude/commands/
    ├── deploy.md           # /deploy komutu
    └── audit.md            # /audit komutu
```

---

## Çalıştırma

Build adımı yoktur. Herhangi bir HTML dosyasını doğrudan tarayıcıda aç. Yerel sunucu istersen:

```bash
# Python 3
python -m http.server 8000
# Sonra: http://localhost:8000
```

JS `fetch` çağrısı yoktur (veri JS array'leri ile hardcode), bu yüzden `file://` protokolü de çalışır.

---

## Deploy Akışı

```
git add <dosyalar>
git commit -m "açıklama"
git push
```

Netlify GitHub'ı izler → otomatik build (build komutu yok, publish dir `.`) → deploy.

`netlify.toml` `.html` uzantısını URL'den gizleyen redirect'leri ve güvenlik başlıklarını içerir.

---

## İçerik Güncelleme Rehberi

Tüm değişken içerikler `data/` klasöründeki JSON dosyalarındadır. Bunları elle düzenle:

### `data/isletme-bilgi.json`
Adres, telefon, WhatsApp numarası, domain, Google Maps embed URL'si.
> Telefon değişirse hem bu dosyayı hem tüm `tel:` ve `wa.me/` linklerini güncelle.

### `data/calisma-saatleri.json`
Günlük açılış/kapanış saatleri. `js/main.js` bu veriye göre "Şu an açık/kapalı" badge'ini hesaplar.
> Saatler değişirse JSON'u güncelle — sayfalar otomatik düzeltilir.

### `data/kategoriler.json`
Ürün kategorileri: id, TR/EN isim, ikon, açıklama, `alkol_tutun` bayrağı.
> `alkol_tutun: true` olan kategoriler katalog sayfasında görsel/fiyat içermez.

### `data/kampanyalar.json`
Aktif kampanyalar. `aktif`, `baslangic`, `bitis` alanları vardır.

### `data/yorumlar.json`
Google yorumlarından seçmeler. Yeni yorum eklemek için yeni bir nesne ekle.

### `js/catalog.js` — Ürün Listesi
Ürünler bu dosyanın içindeki `URUNLER` array'indedir. Ürün eklemek için:
```js
{ isim: 'Ürün Adı', kategori: 'soguk', img: 'https://...' }
```
Fiyat alanı yok (katalog sitesi).

---

## Tasarım Sistemi

**Renk paleti (CSS değişkenleri `css/style.css`):**
| Değişken | Renk | Kullanım |
|---|---|---|
| `--bg` | `#140e08` | Ana sayfa zemini |
| `--surface` | `#1e1309` | Bölüm zemini |
| `--surface2` | `#2a1b0e` | Kart zemini |
| `--gold` | `#d4a843` | Birincil vurgu |
| `--gold-light` | `#e8c76a` | Hover altın |
| `--crimson` | `#8b1a2e` | İkincil vurgu (bordo) |
| `--cream` | `#f5ede0` | Ana metin |
| `--muted` | `#9a8570` | Yardımcı metin |

Tailwind renk isimleri: `bg`, `surface`, `surface2`, `gold`, `gold-light`, `crimson`, `cream`, `muted`.

**Fontlar:**
- Başlıklar: `Playfair Display` (serif) — class: `font-display`
- Gövde: `Inter` (sans-serif) — varsayılan

---

## Ortak Komponent Mantığı

Nav ve footer her sayfaya **inline** yazılmıştır (JS injection yok, FOUC riski yok). Nav değiştiğinde güncellenmesi gereken dosyalar:

TR: `index.html`, `hakkimizda.html`, `urunler.html`, `iletisim.html`, `blog.html` + tüm `blog/*.html`  
EN: `en/index.html`, `en/about.html`, `en/products.html`, `en/contact.html`

Aktif nav linki her sayfada ilgili `<a>` etiketine `class="nav-link active"` ile işaretlenmiştir.

---

## Slash Komutları

- `/deploy` → `.claude/commands/deploy.md` — commit + push + Netlify kontrol adımları
- `/audit`  → `.claude/commands/audit.md`  — yasal uyumluluk + SEO + link kontrolü

---

## Önemli Teknik Notlar

- **Age gate:** `sessionStorage.getItem('yas_onaylandi')` — her oturumda bir kez sorar
- **Cookie banner:** `localStorage.getItem('cerez_kabul')` — kalıcı
- **Açık/kapalı:** `js/main.js → initOpenStatus()` — 07:00–02:00 saatlerini JS ile hesaplar. 02:00 ertesi güne taşar (gece yarısı mantığı mevcuttur)
- **Netlify Forms:** `iletisim.html` ve `en/contact.html` formlarında `data-netlify="true"` — backend gerektirmez, Netlify'ın form servisini kullanır
- **Sitemap domain:** `https://www.ozerlermarket.com.tr` — gerçek domain bağlandığında güncelle
