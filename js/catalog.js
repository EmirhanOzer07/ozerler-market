/* =============================================
   ÖZERLER MARKET — catalog.js
   Ürünler sayfası için kategori filtresi.
   ============================================= */

const KATEGORILER = [
  { id: 'hepsi',     isim_tr: 'Tüm Kategoriler',         isim_en: 'All Categories' },
  { id: 'soguk',     isim_tr: 'Soğuk Meşrubatlar',       isim_en: 'Cold Beverages' },
  { id: 'kuruyemis', isim_tr: 'Kuruyemiş & Atıştırmalık', isim_en: 'Nuts & Snacks' },
  { id: 'kahvaltilik',isim_tr: 'Kahvaltılık & Şarküteri', isim_en: 'Breakfast & Deli' },
  { id: 'temel',     isim_tr: 'Temel Gıdalar',            isim_en: 'Basic Groceries' },
  { id: 'temizlik',  isim_tr: 'Temizlik & Hijyen',        isim_en: 'Cleaning & Hygiene' },
  { id: 'evcil',     isim_tr: 'Evcil Hayvan',             isim_en: 'Pet Supplies' },
];

// Ürün listesi — fiyat yok (tanıtım kataloğu)
const URUNLER = [
  // Soğuk Meşrubatlar
  { isim: 'Doğal Kaynak Suyu (0.5L)', kategori: 'soguk', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Gazlı İçecekler (330ml)',  kategori: 'soguk', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Enerji İçeceği (250ml)',   kategori: 'soguk', img: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Meyve Suyu Çeşitleri',     kategori: 'soguk', img: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Ayran (300ml)',             kategori: 'soguk', img: 'https://images.unsplash.com/photo-1571119756982-3eb91c59e1b4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Soğuk Çay Çeşitleri',      kategori: 'soguk', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Maden Suyu',               kategori: 'soguk', img: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Büyük Boy Su (1.5L)',       kategori: 'soguk', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' },

  // Kuruyemiş & Atıştırmalık
  { isim: 'Patates Cipsi',             kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1566478989037-e924e50cb0ee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Mısır Cipsi',               kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1566478989037-e924e50cb0ee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kavrulmuş Ayçekirdeği',     kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Karışık Kuruyemiş',         kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Antep Fıstığı',             kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tuzlu Fıstık',              kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çikolata Çeşitleri',        kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Jelibon & Şeker',           kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Bisküvi & Kraker',          kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Gofret Çeşitleri',          kategori: 'kuruyemis', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },

  // Kahvaltılık & Şarküteri
  { isim: 'Beyaz Peynir',              kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kaşar Peyniri',             kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Siyah Zeytin',              kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1559181567-c3190bfed2c0?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kangal Sucuk',              kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Reçel Çeşitleri',           kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Bal',                       kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tereyağı',                  kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Günlük Meze Çeşitleri',     kategori: 'kahvaltilik', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=400&auto=format&fit=crop' },

  // Temel Gıdalar
  { isim: 'Ekmek (Günlük)',            kategori: 'temel', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tam Yağlı Süt (1L)',        kategori: 'temel', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yumurta (15\'li)',          kategori: 'temel', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Ayçiçek Yağı (1L)',         kategori: 'temel', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Makarna Çeşitleri',         kategori: 'temel', img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çay (Paket)',               kategori: 'temel', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },

  // Temizlik & Hijyen
  { isim: 'Sıvı Bulaşık Deterjanı',    kategori: 'temizlik', img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çamaşır Suyu',             kategori: 'temizlik', img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tuvalet Kağıdı (16\'lı)',   kategori: 'temizlik', img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kağıt Havlu',               kategori: 'temizlik', img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Islak Mendil',              kategori: 'temizlik', img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },

  // Evcil Hayvan
  { isim: 'Kedi Maması (Yaş)',         kategori: 'evcil', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kedi Maması (Kuru)',        kategori: 'evcil', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kedi Kumu',                 kategori: 'evcil', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Köpek Maması',              kategori: 'evcil', img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=400&auto=format&fit=crop' },
];

document.addEventListener('DOMContentLoaded', () => {
  const lang  = document.documentElement.lang === 'en' ? 'en' : 'tr';
  const isEn  = lang === 'en';

  renderSidebar(isEn);

  const hash = window.location.hash.replace('#', '');
  const valid = KATEGORILER.map(k => k.id);
  filterProducts(valid.includes(hash) ? hash : 'hepsi', isEn);
});

function renderSidebar(isEn) {
  const ul = document.getElementById('kat-list');
  if (!ul) return;

  ul.innerHTML = KATEGORILER.map(k => `
    <li>
      <button
        id="kat-${k.id}"
        onclick="filterProducts('${k.id}', ${isEn})"
        class="kat-btn w-full text-left py-3 px-4 rounded-lg text-sm transition-all duration-200 text-[var(--muted)] hover:text-[var(--cream)] hover:bg-[var(--surface2)]"
      >${isEn ? k.isim_en : k.isim_tr}</button>
    </li>
  `).join('');
}

function filterProducts(katId, isEn) {
  // Aktif buton stilini güncelle
  document.querySelectorAll('.kat-btn').forEach(btn => {
    btn.classList.remove('text-[var(--gold)]', 'bg-[var(--surface2)]', 'font-semibold', 'border-l-2', 'border-[var(--gold)]');
    btn.classList.add('text-[var(--muted)]');
  });
  const activeBtn = document.getElementById(`kat-${katId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-[var(--muted)]');
    activeBtn.classList.add('text-[var(--gold)]', 'bg-[var(--surface2)]', 'font-semibold', 'border-l-2', 'border-[var(--gold)]');
  }

  // Başlık
  const kat = KATEGORILER.find(k => k.id === katId);
  const baslik = document.getElementById('kat-baslik');
  if (baslik && kat) baslik.textContent = isEn ? kat.isim_en : kat.isim_tr;

  // Filtreleme
  const liste = katId === 'hepsi' ? URUNLER : URUNLER.filter(u => u.kategori === katId);
  const sayiEl = document.getElementById('urun-sayisi');
  if (sayiEl) sayiEl.textContent = isEn ? `${liste.length} items` : `${liste.length} ürün`;

  // Grid
  const grid = document.getElementById('urun-grid');
  if (!grid) return;

  grid.innerHTML = liste.map(u => `
    <div class="card overflow-hidden group">
      <div class="h-44 overflow-hidden bg-[var(--surface2)] flex items-center justify-center">
        <img
          src="${u.img}"
          alt="${u.isim}"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        >
      </div>
      <div class="p-4 text-center">
        <h4 class="text-sm font-medium text-[var(--cream)] leading-snug">${u.isim}</h4>
        <p class="text-xs text-[var(--muted)] mt-1">${isEn ? 'Ask for price' : 'Fiyat için sorunuz'}</p>
      </div>
    </div>
  `).join('');

  // URL hash güncelle
  history.replaceState(null, '', `#${katId}`);
}
