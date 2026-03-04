# Kod Nerede? GitHub'a Neden Otomatik Düşmüyor?

## Kısa Cevap
Kod **önce yerel git branch'inde** oluşur. GitHub'a otomatik gitmez; `git push` gerekir.

## Bu repodaki tipik akış

1. Kod değişikliği yapılır
2. `git add .`
3. `git commit -m "..."`
4. `git push origin <branch>`
5. GitHub'da PR açılır / güncellenir

## Kontrol komutları

```bash
git branch -vv
git remote -v
git log --oneline -n 5
```

## Sık karşılaşılan durum

- Yerelde `work` branch'inde commit vardır.
- GitHub arayüzünde `main` branch'i görüntüleniyordur.
- Bu yüzden dosyalar "yokmuş" gibi görünür.

Çözüm:

```bash
git push -u origin work
```

veya branch stratejine göre `main`e merge/push.
