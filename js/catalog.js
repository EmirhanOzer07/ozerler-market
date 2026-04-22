/* =============================================
   ÖZERLER MARKET — catalog.js
   Kategori showcase kartları + WhatsApp yönlendirme.
   ============================================= */

const KATEGORILER = [
  {
    id: 'soguk',
    isim_tr: 'Soğuk Meşrubatlar',
    isim_en: 'Cold Beverages',
    icon: 'fa-solid fa-bottle-water',
    aciklama_tr: 'Su, maden suyu, soda, kola, gazoz, meyve suyu, enerji içeceği, ayran, kefir, soğuk çay ve daha fazlası.',
    aciklama_en: 'Water, sparkling water, cola, soda, fruit juices, energy drinks, ayran, kefir, iced tea and more.',
    ornekler_tr: ['Kaynak Suyu', 'Enerji İçeceği', 'Meyve Suları', 'Ayran & Kefir', 'Soğuk Çay'],
    ornekler_en: ['Spring Water', 'Energy Drinks', 'Fruit Juices', 'Ayran & Kefir', 'Iced Tea'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Soğuk meşrubat siparişi vermek istiyorum.',
    wa_en: 'I would like to order cold beverages.',
  },
  {
    id: 'kuruyemis',
    isim_tr: 'Kuruyemiş & Atıştırmalık',
    isim_en: 'Nuts & Snacks',
    icon: 'fa-solid fa-cookie-bite',
    aciklama_tr: 'Cipsi, çikolata, gofret, bisküvi, kuruyemiş çeşitleri, jelibon, popcorn ve tatlı-tuzlu her şey.',
    aciklama_en: 'Chips, chocolate, wafers, biscuits, all kinds of nuts, gummies, popcorn and everything sweet or salty.',
    ornekler_tr: ['Patates Cipsi', 'Çikolata Çeşitleri', 'Kuruyemiş', 'Gofret & Bisküvi', 'Popcorn'],
    ornekler_en: ['Potato Chips', 'Chocolate', 'Mixed Nuts', 'Wafers & Biscuits', 'Popcorn'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Kuruyemiş ve atıştırmalık siparişi vermek istiyorum.',
    wa_en: 'I would like to order nuts and snacks.',
  },
  {
    id: 'kahvaltilik',
    isim_tr: 'Kahvaltılık & Şarküteri',
    isim_en: 'Breakfast & Deli',
    icon: 'fa-solid fa-egg',
    aciklama_tr: 'Beyaz peynir, kaşar, tulum, zeytin çeşitleri, sucuk, salam, reçel, bal, tereyağı ve meze çeşitleri.',
    aciklama_en: 'White cheese, kashar, olives, salami, jam, honey, butter and a variety of mezes.',
    ornekler_tr: ['Beyaz Peynir', 'Kaşar Peyniri', 'Zeytin Çeşitleri', 'Kangal Sucuk', 'Bal & Reçel'],
    ornekler_en: ['White Cheese', 'Kashar Cheese', 'Olive Varieties', 'Sucuk Sausage', 'Honey & Jam'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Kahvaltılık ürün siparişi vermek istiyorum.',
    wa_en: 'I would like to order breakfast products.',
  },
  {
    id: 'temel',
    isim_tr: 'Temel Gıdalar',
    isim_en: 'Basic Groceries',
    icon: 'fa-solid fa-basket-shopping',
    aciklama_tr: 'Ekmek, süt, yumurta, yağ, makarna, pirinç, bakliyat, şeker, un, konserve ve mutfağın temelleri.',
    aciklama_en: 'Bread, milk, eggs, oil, pasta, rice, legumes, sugar, flour, canned goods and all kitchen staples.',
    ornekler_tr: ['Günlük Ekmek', 'Süt & Yumurta', 'Makarna & Pirinç', 'Bakliyat', 'Çay & Kahve'],
    ornekler_en: ['Fresh Bread', 'Milk & Eggs', 'Pasta & Rice', 'Legumes', 'Tea & Coffee'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Temel gıda siparişi vermek istiyorum.',
    wa_en: 'I would like to order basic groceries.',
  },
  {
    id: 'temizlik',
    isim_tr: 'Temizlik & Kişisel Bakım',
    isim_en: 'Cleaning & Personal Care',
    icon: 'fa-solid fa-spray-can-sparkles',
    aciklama_tr: 'Bulaşık deterjanı, çamaşır ürünleri, tuvalet kağıdı, el sabunu, şampuan, diş macunu ve hijyen ürünleri.',
    aciklama_en: 'Dish soap, laundry products, toilet paper, hand soap, shampoo, toothpaste and hygiene essentials.',
    ornekler_tr: ['Deterjan Çeşitleri', 'Tuvalet Kağıdı', 'Islak Mendil', 'Şampuan', 'Diş Macunu'],
    ornekler_en: ['Detergents', 'Toilet Paper', 'Wet Wipes', 'Shampoo', 'Toothpaste'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Temizlik ürünü siparişi vermek istiyorum.',
    wa_en: 'I would like to order cleaning products.',
  },
  {
    id: 'evcil',
    isim_tr: 'Evcil Hayvan',
    isim_en: 'Pet Supplies',
    icon: 'fa-solid fa-paw',
    aciklama_tr: 'Kedi maması (yaş & kuru), kedi kumu, köpek maması, kuş yemi ve kemirgen ürünleri.',
    aciklama_en: 'Cat food (wet & dry), cat litter, dog food, bird seed and small animal products.',
    ornekler_tr: ['Kedi Maması', 'Kedi Kumu', 'Köpek Maması', 'Kuş Yemi', 'Kemirgen Maması'],
    ornekler_en: ['Cat Food', 'Cat Litter', 'Dog Food', 'Bird Seed', 'Small Animal Food'],
    img: '/images/placeholder/urun-genel.svg',
    wa_tr: 'Evcil hayvan ürünü siparişi vermek istiyorum.',
    wa_en: 'I would like to order pet supplies.',
  },
];

const WA_BASE = 'https://wa.me/905462782300?text=';

document.addEventListener('DOMContentLoaded', () => {
  const isEn = document.documentElement.lang === 'en';
  renderKatalog(isEn);
});

function renderKatalog(isEn) {
  const grid = document.getElementById('katalog-grid');
  if (!grid) return;

  grid.innerHTML = KATEGORILER.map(k => {
    const ornekler = (isEn ? k.ornekler_en : k.ornekler_tr)
      .map(o => `<span class="inline-block bg-[var(--surface)] border border-gold/10 rounded-full px-3 py-1 text-xs text-[var(--muted)]">${o}</span>`)
      .join('');

    const waMsg = encodeURIComponent(isEn ? k.wa_en : k.wa_tr);
    const btnLabel = isEn ? 'Order via WhatsApp' : 'WhatsApp\'tan Sipariş Ver';

    return `
      <div class="card overflow-hidden flex flex-col group">
        <div class="relative h-48 overflow-hidden bg-[var(--surface2)]">
          <img
            src="${k.img}"
            alt="${isEn ? k.isim_en : k.isim_tr}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 flex items-center gap-2">
            <div class="w-9 h-9 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
              <i class="${k.icon} text-gold text-sm"></i>
            </div>
            <h3 class="font-display text-lg font-bold text-cream leading-tight">
              ${isEn ? k.isim_en : k.isim_tr}
            </h3>
          </div>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-muted text-sm leading-relaxed mb-4">
            ${isEn ? k.aciklama_en : k.aciklama_tr}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${ornekler}
          </div>
          <a
            href="${WA_BASE}${waMsg}"
            target="_blank"
            rel="noopener"
            class="mt-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition"
          >
            <i class="fa-brands fa-whatsapp text-base"></i>
            ${btnLabel}
          </a>
        </div>
      </div>
    `;
  }).join('');
}
