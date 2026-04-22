/*
 * ÖZERLER MARKET — reviews.js
 *
 * TODO: Google Business sahipliği doğrulandıktan sonra bu dosyayı tamamla.
 *
 * Gerekli env değişkenleri (Netlify dashboard > Environment Variables):
 *   PUBLIC_GOOGLE_PLACE_ID   — Google Maps Place ID (örn. ChIJ...)
 *   GOOGLE_PLACES_API_KEY    — Places API anahtarı (sunucu taraflı tutulmalı)
 *   PUBLIC_GOOGLE_BUSINESS_URL — İşletme profil URL'si
 *
 * Entegrasyon adımları:
 *   1. Google Cloud Console'dan Places API aktifleştir
 *   2. Place ID'yi bul: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 *   3. Netlify Edge Function veya sunucu taraflı proxy üzerinden yorumları çek
 *      (API key'i hiçbir zaman client-side koda koyma)
 *   4. Bu dosyada fetchReviews() fonksiyonunu tamamla
 *   5. index.html'deki "Deneyiminizi Paylaşın" bölümünü gerçek yorumlarla doldur
 *   6. JSON-LD aggregateRating'i güncelle (ortalama puan ve toplam yorum sayısı)
 *
 * Mevcut durum: Google Business sahipliği bekleniyor.
 */

async function fetchGoogleReviews() {
  // TODO: sahiplik geldiğinde implement et
  // const placeId = 'PUBLIC_GOOGLE_PLACE_ID';
  // const res = await fetch(`/api/reviews?place_id=${placeId}`);
  // return await res.json();
  return { reviews: [], rating: null, totalRatings: 0 };
}

function renderReviewPlaceholder() {
  // Şu an hiçbir şey render etme — bölüm statik HTML ile yönetiliyor
}
