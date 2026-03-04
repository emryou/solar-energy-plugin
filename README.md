# Solar Energy Plugin - Interface MVP

Bu depo, PVsyst/PVcase/Vitocad benzeri iş akışlarını kapsayacak **masaüstü PV tasarım yazılımı** için ilk arayüz prototipini içerir.

## Bu sürümde olanlar

- Dashboard (kurulu güç, yıllık üretim, performans oranı)
- Saha yerleşimi formu
- Basit enerji simülasyon formu
- Rapor önizleme alanı

## Çalıştırma

```bash
python3 -m http.server 4173
```

Tarayıcı:

- `http://localhost:4173`

## Önemli: Kod neden GitHub'da görünmeyebilir?

Kod önce local branch'te commitlenir. GitHub'a düşmesi için ayrıca `git push` gerekir.

Detaylı açıklama:

- `docs/push-and-branches.md`

## Referans araştırması ve yol haritası

PVsyst, PVcase ve Vitocad referansını temel alan modül matrisi ve mimari plan:

- `docs/reference-matrix.md`

## Sonraki adım

- Bu HTML/JS prototipini gerçek bir masaüstü kabuğuna (Electron/Tauri) taşıma
- CAD/geometry motoru başlangıcı
- String/inverter sizing asistanı
- Gelişmiş simülasyon motoru
