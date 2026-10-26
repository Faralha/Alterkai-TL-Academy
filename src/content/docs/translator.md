---
title: 'Translator'
description: 'Penjelasan mendetail mengenai posisi Translator/Penerjemah.'
icon: ✏️
heroImage:
  src: /img/translator/translator-header.png
  alt: Contoh file hasil terjemahan
prev:
  link: /perkenalan
  label: Perkenalan
---

Translator bertugas menerjemahkan komik dari bahasa asing ke bahasa Indonesia. Kedengarannya simpel, tapi terjemahan yang bagus itu bukan cuma benar artinya, tapi juga enak dibaca dan terasa natural, seolah-olah komiknya memang ditulis dalam bahasa Indonesia.

- Tingkat kesulitan: `Sedang`
- Estimasi pengerjaan: `1-2 hari/chapter`
- Format pengumpulan: `*.txt`

## Teknis Pengerjaan

Umumnya, manga diterjemahkan per bubble dialog.

![Bubble Dialog](/img/translator/bubble.png)

Bubble yang dimaksud bisa berupa dialog, narasi, ataupun perkataan di dalam hati. Intinya semua teks yang bukan sound effect. Tulisan di papan atau poster boleh diterjemahkan kalau penting buat cerita. Sound effect (SFX) seperti "BOOM!" atau "ドン" biasanya tidak ikut diterjemahkan.

Aturan pengumpulannya:

- Pakai file `.txt`, aplikasinya bebas
- Tulis judul, chapter, dan nama kamu di bagian paling atas
- Beri penanda halaman, bebas mau `HAL. 1` atau cukup `1`
- Terjemahkan sesuai urutan baca manga: kanan ke kiri, atas ke bawah
- Awali tiap baris dengan penggalan kata pertama dari RAW sebagai penanda, misalnya `He: dia mau merampok...`
- Jangan hilangkan satu pun tanda baca dari teks aslinya (`!`, `?`, `...`)

<details>
<summary>Template file .txt</summary>

```
JUDUL: Mahou Shoujo ni Akogarete
CHAPTER: Ch. 10
TRANSLATOR: Faralha

HAL. 1
hi: hai, senang bertemu denganmu
hi: hai, ...

HAL. 2
we: Kita kudu berangkat sekarang
```

</details>

## Contoh Hasil Terjemahan

Penanda di awal baris itu penting. Typesetter jadi gampang mencocokkan teks terjemahan dengan bubble di halaman manga.

### EN ke ID

![Contoh file terjemahan EN-ID](/img/translator/example.png)

<details>
<summary>Contoh lain: Assassin Ch. 10.txt</summary>

```
Assassin and Cinderella
Ch. 10
TL: Faralha

1
(tidak ada teks)

2
let’s: mari kita akhiri pernikahan kontrak ini.
i want: aku ingin menikahimu dengan asli kali ini…
and make: dan membuatmu jadi wanita paling bahagia di dunia.

3
marry: menikah…
for real: beneran…?
what: apa…
are: yang kau…
saying: bicarakan…
huh?
amai-san!
where: mau kemana kita…?
```

</details>

### JP ke ID

![Contoh file terjemahan JP-ID](/img/translator/tl-jp.png)

<details>
<summary>Contoh lain: Gunbured Ch. 16.txt</summary>

```
Gunbured x Sisters
Chapter 16 嫌な予感　・　 Firasat Buruk
TL ria

1
第165話+嫌な予感: Chapter 16 - Firasat Buruk
教皇様。: Bapa Suci.
ムラヴ様の: Mrav-sama telah tiba.
やあやあ: Apa kabar Bapa Suci~?
つい先日ぶり: Baru kemarin kita bertemu~
騒々しいのは: Sebetulnya aku tidak suka keramaian...
燃え逝く命の灯は: Tapi bisa melihat api kehidupan padam... sungguh pemandangan yang mempesona.
これを肴に: Bagaimana kalau kita nikmati dengan sebotol rum?

2
貴様の悪趣味に: Aku tak sudi menemanimu menikmati perbuatan dosa.
それよりも: Yang lebih penting, bukannya kalian sendiri yang berjanji akan menjauhkan mereka dari kota?
無論: Tenang saja. Kami bukannya lupa.
かつては同じ: Dulunya seluruh vampir memang bergerak dengan tujuan kemakmuran spesies kami...
それ故に: Tapi sepertinya pembelot mulai bermunculan.
なあに: Loh loh, jangan tegang begitu~
古き盟約は: Perjanjian Kuno tetap akan berjalan
君たち教団を: Kami tidak akan membiarkan kalian lenyap kok.
本気になれば: Santai saja. Sekali vampir darah murni serius, kami tidak terkalahkan♥
```

</details>

Dari bahasa Jepang ada tantangan tambahan: honorific (`-san`, `-kun`, `-senpai`), tingkat kesopanan, dan partikel yang tidak ada padanannya. Patokannya sederhana: lihat hubungan antar karakter, lalu pilih gaya bahasa yang cocok.

## Do's and Don'ts

### Do's

1. **Terjemahkan per kalimat.** Maksudnya <mark>terjemahkan sebagai satu kalimat utuh</mark>, jangan kata per kata. Satu kalimat bisa berubah artinya kalau diterjemahkan terpisah.
2. **Pahami konteks.** Lagi tegang, romantis, atau komedi? Karakternya cuek atau sopan? "Baka" bisa jadi "bodoh", "dasar", atau "ih, kamu ini" tergantung situasinya.
3. **Cari referensi.** Google Translate dan kamus (KBBI, Jisho.org) boleh dipakai sebagai titik awal. Kadang kalian juga harus buka wiki komiknya, <mark>buat paham dunia serta nama karakternya</mark>. Nama karakter antara RAW dan versi resminya sering beda, misalnya Celestia (Global) dan Xinghui (CN) di STRINOVA.
4. **Jaga konsistensi.** Catat nama karakter, tempat, skill, dan istilah khusus di glossary pribadi, supaya chapter 1 sampai terakhir tetap sama.

### Don'ts

1. Terjemah per kata.
2. Nggak ngerti konteks, lalu asal tebak.
3. Copas mentah-mentah dari Google Translate.
4. Buru-buru dan nggak baca ulang. Typo dan nama yang berubah-ubah itu kelihatan banget di mata pembaca.

:::tip[Pegangan utama]
Bayangkan kamu bukan cuma penerjemah, tapi penulis ulang cerita dalam bahasa Indonesia. Kalau pembaca bisa ikut ketawa atau ikut sedih tanpa sadar ini terjemahan, berarti kamu berhasil.
:::
