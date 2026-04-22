/* =============================================
   ÖZERLER MARKET — catalog.js
   Ürünler sayfası için kategori filtresi + arama.
   ============================================= */

const KATEGORILER = [
  { id: 'hepsi',      isim_tr: 'Tüm Kategoriler',          isim_en: 'All Categories' },
  { id: 'soguk',      isim_tr: 'Soğuk Meşrubatlar',        isim_en: 'Cold Beverages' },
  { id: 'kuruyemis',  isim_tr: 'Kuruyemiş & Atıştırmalık', isim_en: 'Nuts & Snacks' },
  { id: 'kahvaltilik',isim_tr: 'Kahvaltılık & Şarküteri',  isim_en: 'Breakfast & Deli' },
  { id: 'temel',      isim_tr: 'Temel Gıdalar',             isim_en: 'Basic Groceries' },
  { id: 'temizlik',   isim_tr: 'Temizlik & Hijyen',         isim_en: 'Cleaning & Hygiene' },
  { id: 'evcil',      isim_tr: 'Evcil Hayvan',              isim_en: 'Pet Supplies' },
];

// etiket: 'popüler' | 'yeni' | 'mevsimlik' | null
const URUNLER = [

  // ── SOĞUK MEŞRUBATLAR ──────────────────────────────────────────
  { isim: 'Kaynak Suyu (0.5L)',         kategori: 'soguk', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Büyük Boy Su (1.5L)',        kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1548514814-1f3c7be8e0ac?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Soda Suyu (200ml)',          kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Maden Suyu (Aromalı)',       kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kola (330ml Kutu)',          kategori: 'soguk', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Portakal Gazoz (330ml)',     kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Limonlu Gazoz (330ml)',      kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Enerji İçeceği (250ml)',     kategori: 'soguk', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Meyve Suyu – Vişne',        kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Meyve Suyu – Şeftali',      kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Meyve Suyu – Kayısı',       kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Ayran (300ml)',              kategori: 'soguk', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1571119756982-3eb91c59e1b4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kefir (500ml)',              kategori: 'soguk', etiket: null,
    img: 'https://images.unsplash.com/photo-1571119756982-3eb91c59e1b4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Soğuk Çay – Şeftali',       kategori: 'soguk', etiket: 'mevsimlik',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Soğuk Çay – Limon',         kategori: 'soguk', etiket: 'mevsimlik',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Soğuk Kahve (250ml)',        kategori: 'soguk', etiket: 'yeni',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Limonata (330ml)',           kategori: 'soguk', etiket: 'mevsimlik',
    img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=400&auto=format&fit=crop' },

  // ── KURUYEMIŞ & ATIŞTIRMALIK ───────────────────────────────────
  { isim: 'Patates Cipsi (Sade)',       kategori: 'kuruyemis', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1566478989037-e924e50cb0ee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Patates Cipsi (Ketçaplı)',   kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1566478989037-e924e50cb0ee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Mısır Cipsi (Acılı)',        kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Peynirli Patlak Mısır',      kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Popcorn (Tereyağlı)',        kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Sütlü Çikolata',            kategori: 'kuruyemis', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Bitter Çikolata',           kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Fındıklı Çikolata',         kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Gofret (Çikolatalı)',        kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Bisküvi (Sade / Kremalı)',   kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kraker Çeşitleri',           kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Jelibon & Yumuşak Şeker',   kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Sakız Çeşitleri',            kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kavrulmuş Ayçekirdeği',     kategori: 'kuruyemis', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kavrulmuş Mısır (Leblebi)', kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tuzlu Fıstık',              kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Antep Fıstığı',             kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Karışık Kuruyemiş',         kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Fındık (Kabuklu)',          kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kaju (Kavrulmuş)',          kategori: 'kuruyemis', etiket: null,
    img: 'https://images.unsplash.com/photo-1599599810069-87c2b62143ea?q=80&w=400&auto=format&fit=crop' },

  // ── KAHVALTILIK & ŞARKÜTERİ ────────────────────────────────────
  { isim: 'Beyaz Peynir (200g)',        kategori: 'kahvaltilik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kaşar Peyniri (200g)',       kategori: 'kahvaltilik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tulum Peyniri',             kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çeçil Peyniri (Tel)',        kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Lor Peyniri',               kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Siyah Zeytin',              kategori: 'kahvaltilik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1559181567-c3190bfed2c0?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yeşil Zeytin',              kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1559181567-c3190bfed2c0?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kangal Sucuk',              kategori: 'kahvaltilik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Dilimli Salam',             kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Reçel – Çilek',            kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Reçel – Kayısı',           kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Reçel – Kiraz',            kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Süzme Bal',                kategori: 'kahvaltilik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tereyağı (200g)',          kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çikolatalı Fındık Kreması',kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tahin & Pekmez',          kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Günlük Meze Çeşitleri',   kategori: 'kahvaltilik', etiket: null,
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=400&auto=format&fit=crop' },

  // ── TEMEL GIDALAR ───────────────────────────────────────────────
  { isim: 'Günlük Ekmek',             kategori: 'temel', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tost Ekmeği',              kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tam Yağlı Süt (1L)',       kategori: 'temel', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yarım Yağlı Süt (1L)',     kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yumurta (10\'lu)',          kategori: 'temel', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yumurta (15\'li)',          kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Ayçiçek Yağı (1L)',        kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Zeytinyağı (500ml)',        kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Makarna – Spagetti',       kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Makarna – Penne',          kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Makarna – Erişte',         kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Pirinç (1kg)',             kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9b1f4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Şeker (1kg)',              kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tuz (500g)',               kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Un (1kg)',                 kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kırmızı Biber Salçası',   kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1589927986089-35812378533e?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Domates Konservesi (400g)',kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1589927986089-35812378533e?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Ton Balığı Konservesi',    kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kırmızı Mercimek (500g)', kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9b1f4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Nohut (500g)',             kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9b1f4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kuru Fasulye (500g)',      kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9b1f4?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Dökme Çay (500g)',         kategori: 'temel', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Türk Kahvesi (100g)',      kategori: 'temel', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Hazır Kahve (100g)',       kategori: 'temel', etiket: null,
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop' },

  // ── TEMİZLİK & HİJYEN ──────────────────────────────────────────
  { isim: 'Sıvı Bulaşık Deterjanı',   kategori: 'temizlik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çamaşır Deterjanı (Toz)',  kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çamaşır Yumuşatıcısı',    kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Çamaşır Suyu',            kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Yüzey Temizleyici',       kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Tuvalet Kağıdı (8\'li)',   kategori: 'temizlik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1583947215259-3ea7bc41a73c?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kağıt Havlu',             kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1583947215259-3ea7bc41a73c?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Mutfak Bezi',             kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Sünger & Çelik Tel',      kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Sıvı El Sabunu',          kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Islak Mendil (72\'li)',    kategori: 'temizlik', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1584820927498-cafe4c10a377?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Diş Macunu',              kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1559591937-abc3a1d65d5a?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Diş Fırçası',            kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1559591937-abc3a1d65d5a?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Şampuan Çeşitleri',       kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Duş Jeli',                kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Deodorant Çeşitleri',     kategori: 'temizlik', etiket: null,
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop' },

  // ── EVCİL HAYVAN ────────────────────────────────────────────────
  { isim: 'Kedi Maması (Yaş – Pouch)', kategori: 'evcil', etiket: 'popüler',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kedi Maması (Kuru – 1kg)', kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kedi Kumu (İnce Taneli)',  kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Köpek Maması (Kuru)',      kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Köpek Ödülü (Snack)',      kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kuş Yemi',                kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=400&auto=format&fit=crop' },
  { isim: 'Kemirgen Maması',         kategori: 'evcil', etiket: null,
    img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=400&auto=format&fit=crop' },
];

// ── Rozet renkleri ──────────────────────────────────────────────
const ETIKET_STILI = {
  'popüler':  'bg-gold/20 text-gold',
  'yeni':     'bg-emerald-500/20 text-emerald-400',
  'mevsimlik':'bg-sky-500/20 text-sky-400',
};
const ETIKET_LABEL = {
  'popüler':   { tr: 'Popüler',   en: 'Popular' },
  'yeni':      { tr: 'Yeni',      en: 'New' },
  'mevsimlik': { tr: 'Mevsimlik', en: 'Seasonal' },
};

// ── Geçerli kategori id'leri ─────────────────────────────────────
const GECERLİ_KAT = KATEGORILER.map(k => k.id);

// ── Mevcut durum ─────────────────────────────────────────────────
let aktifKat  = 'hepsi';
let aramaMetni = '';

// ── İlk yükleme ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const isEn = document.documentElement.lang === 'en';

  renderSidebar(isEn);
  renderArama(isEn);

  const hash = window.location.hash.replace('#', '');
  aktifKat = GECERLİ_KAT.includes(hash) ? hash : 'hepsi';
  renderUrunler(isEn);
});

// ── Arama kutusu ─────────────────────────────────────────────────
function renderArama(isEn) {
  const wrapper = document.getElementById('arama-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = `
    <div class="relative mb-6">
      <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] text-sm pointer-events-none"></i>
      <input
        id="arama-input"
        type="search"
        placeholder="${isEn ? 'Search products…' : 'Ürün ara…'}"
        class="w-full bg-[var(--surface)] border border-gold/10 rounded-xl py-3 pl-10 pr-4 text-sm text-[var(--cream)] placeholder-[var(--muted)] focus:outline-none focus:border-gold/40 transition"
      >
    </div>
  `;

  document.getElementById('arama-input').addEventListener('input', e => {
    aramaMetni = e.target.value.toLowerCase().trim();
    renderUrunler(isEn);
  });
}

// ── Sidebar ──────────────────────────────────────────────────────
function renderSidebar(isEn) {
  const ul = document.getElementById('kat-list');
  if (!ul) return;

  ul.innerHTML = KATEGORILER.map(k => {
    const sayi = k.id === 'hepsi'
      ? URUNLER.length
      : URUNLER.filter(u => u.kategori === k.id).length;

    return `
      <li>
        <button
          id="kat-${k.id}"
          onclick="filterProducts('${k.id}', ${isEn})"
          class="kat-btn w-full text-left py-3 px-4 rounded-lg text-sm transition-all duration-200 flex items-center justify-between text-[var(--muted)] hover:text-[var(--cream)] hover:bg-[var(--surface2)]"
        >
          <span>${isEn ? k.isim_en : k.isim_tr}</span>
          <span class="text-xs bg-[var(--surface2)] rounded-full px-2 py-0.5 ml-2">${sayi}</span>
        </button>
      </li>
    `;
  }).join('');
}

// ── Kategori filtresi (dışarıdan çağrılabilir) ───────────────────
function filterProducts(katId, isEn) {
  aktifKat   = katId;
  aramaMetni = '';
  const input = document.getElementById('arama-input');
  if (input) input.value = '';

  history.replaceState(null, '', `#${katId}`);
  renderUrunler(isEn);
}

// ── Aktif buton stilini güncelle ─────────────────────────────────
function setAktifButon(katId) {
  document.querySelectorAll('.kat-btn').forEach(btn => {
    btn.classList.remove('text-[var(--gold)]', 'bg-[var(--surface2)]', 'font-semibold', 'border-l-2', 'border-[var(--gold)]');
    btn.classList.add('text-[var(--muted)]');
  });
  const aktif = document.getElementById(`kat-${katId}`);
  if (aktif) {
    aktif.classList.remove('text-[var(--muted)]');
    aktif.classList.add('text-[var(--gold)]', 'bg-[var(--surface2)]', 'font-semibold', 'border-l-2', 'border-[var(--gold)]');
  }
}

// ── Ana render fonksiyonu ─────────────────────────────────────────
function renderUrunler(isEn) {
  setAktifButon(aktifKat);

  // Kategori başlığı
  const kat    = KATEGORILER.find(k => k.id === aktifKat);
  const baslik = document.getElementById('kat-baslik');
  if (baslik && kat) baslik.textContent = isEn ? kat.isim_en : kat.isim_tr;

  // Filtrele
  let liste = aktifKat === 'hepsi' ? URUNLER : URUNLER.filter(u => u.kategori === aktifKat);
  if (aramaMetni) {
    liste = liste.filter(u => u.isim.toLowerCase().includes(aramaMetni));
  }

  // Ürün sayısı
  const sayiEl = document.getElementById('urun-sayisi');
  if (sayiEl) sayiEl.textContent = isEn ? `${liste.length} items` : `${liste.length} ürün`;

  // Grid
  const grid = document.getElementById('urun-grid');
  if (!grid) return;

  if (liste.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-20 text-center text-[var(--muted)]">
        <i class="fa-solid fa-box-open text-4xl mb-4 opacity-40"></i>
        <p class="text-sm">${isEn ? 'No products found.' : 'Ürün bulunamadı.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = liste.map(u => {
    const rozetHtml = u.etiket
      ? `<span class="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${ETIKET_STILI[u.etiket] || ''}">
           ${isEn ? ETIKET_LABEL[u.etiket]?.en : ETIKET_LABEL[u.etiket]?.tr}
         </span>`
      : '';

    return `
      <div class="card overflow-hidden group">
        <div class="relative h-44 overflow-hidden bg-[var(--surface2)]">
          <img
            src="${u.img}"
            alt="${u.isim}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          >
          ${rozetHtml}
        </div>
        <div class="p-4 text-center">
          <h4 class="text-sm font-medium text-[var(--cream)] leading-snug">${u.isim}</h4>
          <p class="text-xs text-[var(--muted)] mt-1">${isEn ? 'Ask for price' : 'Fiyat için sorunuz'}</p>
        </div>
      </div>
    `;
  }).join('');
}
