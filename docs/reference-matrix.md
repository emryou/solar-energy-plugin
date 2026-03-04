# Referans Matrisi (PVsyst + PVcase + Vitocad)

Bu belge, geliştireceğimiz masaüstü yazılımda referans alınacak ana işlevleri toplar.

> Not: Bu ortamda dış web erişim denemeleri 403 ile engellendiği için (kurumsal/proxy limiti), doğrulama için resmi ürün dokümantasyon linkleri de eklendi.

## 1) Hedef Modül Seti

1. **CAD/Geometri & Yerleşim**
   - Poligon saha tanımı
   - Engel/obstacle tanımı
   - String-aware otomatik panel dizilimi
   - Topografya (eğim/azimut) uyarlama
2. **Enerji Simülasyonu**
   - Saatlik/meteo tabanlı üretim modeli
   - POA, sıcaklık, kayıp kırılımları
   - Gölgeleme ve mismatch etkisi
3. **Elektrik Tasarım**
   - İnverter + MPPT kısıt kontrolü
   - String pencere kontrolü (Vmin/Vmax, Isc)
   - Kablo ve kayıp hesabı
4. **Raporlama ve Export**
   - Proje özeti (kWp, MWh, PR)
   - Kayıp ağacı (loss tree)
   - BOQ ve finansal özet

## 2) Referans Araçlardan Takip Edilecek Yetkinlikler

| Referans | Odak | Bizde karşılığı |
|---|---|---|
| PVsyst | Enerji modelleme, kayıp analizi, simülasyon | `simulation-engine` + `loss-tree` + `reporting` |
| PVcase | CAD üzerinde saha yerleşimi/otomasyon | `layout-engine` + `geometry-core` |
| Vitocad | CAD çizim/planlama iş akışı | `desktop-cad-workspace` + çizim katmanları |

## 3) İlk Teknik Mimari (Masaüstü)

- **Desktop Shell:** Electron (UI + local file access)
- **Frontend:** React + TypeScript + Zustand
- **Compute Engine:** Python servis (FastAPI) veya Rust çekirdek
- **Data:** SQLite proje dosyası + JSON import/export
- **Geometry:** `shapely`/`pygeos` benzeri yaklaşım (veya Rust geometry crate)

## 4) Geliştirme Fazları

### Faz-1 (şu an)
- Proje/sekme tabanlı arayüz
- Input formları
- Basit üretim tahmini

### Faz-2
- Gerçek layout motoru (row spacing, setback, obstacle avoidance)
- İnverter/string tasarım asistanı

### Faz-3
- Saatlik simülasyon motoru
- Gelişmiş rapor ve çıktı

## 5) Doğrulama İçin Resmi Kaynaklar

- PVsyst: https://www.pvsyst.com/
- PVcase: https://pvcase.com/
- Vitocad: https://www.vitocad.com/
