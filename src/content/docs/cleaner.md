---
title: 'Cleaner'
description: 'Penjelasan mendetail mengenai posisi Cleaner.'
icon: 🧹
---

Cleaner bertugas membersihkan komik dari segala teks, mulai dari dialog, narasi, sampai efek, supaya halamannya siap diisi typesetter.

- Tingkat kesulitan: `Susah`
- Estimasi pengerjaan: `1-2 hari/chapter`
- Format pengumpulan: `*.png`, `*.jpg`, atau `*.psb`

## Teknis Pengerjaan

Yaudah sih, intinya mah kalian membersihkan semua teks yang ada :v

Untuk software jujur bebas. Tapi seiring naiknya level (dijelaskan di bawah), aplikasi khusus seperti Adobe Photoshop sangat disarankan, karena fitur Content-Aware Fill-nya sangat membantu.

## Levels!

![Level kesulitan cleaning](/img/cleaner/cleaner-levels.png)

### Level 0: Dialog

Level paling mudah. Di sini kalian hanya <mark>menghapus teks yang berada di dalam bubble dialog.</mark> Aplikasi yang bisa dipakai pun sangat luas. Pakai Paint Windows pun jadi :v

### Level 1: Selain dialog, latar polos

Jatuhnya sama kayak level 0. Pakai eraser atau brush putih/hitam tergantung background pun nggak bakal kelihatan bekasnya :D Paling <mark>butuh ketelitian yang sedikit lebih banyak.</mark>

### Level 2: Selain dialog, latar gradasi

Di sini Paint, IbisPaint, atau aplikasi gambar apapun masih bisa, walau agak ribet buat bikin ulang gradasinya. Bisa, tapi ribet. Mulai dari level ini <mark>sangat disarankan menggunakan Adobe Photoshop</mark> yang sudah ada Content-Aware Fill-nya.

### Level 3: Selain dialog, latar objek + banyak teks

Final boss. Clean bersih <mark>tanpa Adobe Photoshop bisa dibilang mustahil</mark> di sini. Bisa sih nggak pakai Photoshop, tapi bakal kelihatan banget bedanya. Content-Aware Fill sangat-sangat dibutuhkan, begitu juga keahlian memilih sumber referensinya.

## How-to

![Polygonal Lasso dan Content-Aware Fill](/img/cleaner/tools.png)

Kalian harus sangat-sangat familiar dengan dua alat ini: Polygonal Lasso Tool / Rectangular Marquee Tool, dan Content-Aware Fill. Keduanya bakal selalu dipakai untuk cleaning.

### Step 0: Pastikan layer sudah di-rasterize

Kalau opsi Content-Aware Fill nggak bisa dipakai, itu karena layer belum di-rasterize. Caranya: pilih layer, tekan `B` untuk Brush Tool, lalu klik sembarang di gambar. Akan muncul pop-up yang minta layer di-rasterize, seperti di bawah ini.

![Pop-up rasterize layer](/img/cleaner/rasterize.png)

Klik OK, selesai. Lanjut ke step berikutnya.

### Step 1: Seleksi area yang ingin dihapus

![Seleksi area teks](/img/cleaner/step1-1.png)

Pastikan layer yang mau dibersihkan sudah dipilih. Lalu tandai area yang ingin dihapus pakai Polygonal Lasso Tool atau Rectangular Marquee Tool. Bebas mau pakai yang mana.

### Step 2: Content-Aware Fill

Pilih `Edit > Content-Aware Fill` seperti di bawah ini.

![Menu Content-Aware Fill](/img/cleaner/step2.png)

Nanti akan muncul window baru. Pastikan mode **Custom** sudah dipilih seperti gambar di bawah.

![Mode Custom](/img/cleaner/step2-1.png)

Mode ini membiarkan kita menentukan "sumber" atau "referensi" buat AI Photoshop, supaya tahu area seleksinya mau diisi apa. Selanjutnya, pilih area di sekitar objek yang ingin dihapus sebagai referensi.

![Memilih area referensi](/img/cleaner/step2-2.png)

Kalau hasilnya kurang rapi, coba seleksi ulang area referensinya sampai dapat yang cocok. Sebagai patokan, hasil seperti di atas sudah bisa dibilang bagus dan rapi (toh nanti juga bakal ditiban teks lagi). Pilih OK untuk menyelesaikan, lalu tekan `Ctrl + D` untuk deselect.

### Step 3: Practice makes perfect!

Selesai! Inti dari cleaner ya itu aja. Sebagian besar cleaning bisa selesai cuma dengan seleksi lalu Content-Aware Fill kayak di atas. Tapi kadang tetap butuh cleaning manual:

- **Brush** untuk background polos atau merapikan sisa setelah Content-Aware Fill.
- **Clone Stamp** untuk pola yang berulang, misalnya tembok bata, rumput, atau rambut.

Balik lagi, semua tergantung kondisi dan seberapa kreatif kalian pakai selection tool dan Content-Aware Fill.

Bonus, ini hasil cleaning + typeset paling susah kedua menurut gw selama nge-TL di Alterkai.

![Contoh cleaning level 3](/img/cleaner/path.png)

:::danger[Haram: Magic Wand Tool]
HARAM SEKALI HUKUMNYA PAKAI MAGIC WAND TOOL, terutama untuk area luas. Hasilnya dijamin bakal jelek, kayak hasil cleaning MahoAko awal-awal.
:::

Semangat mencoba! Makin lama jam terbang kalian, makin jago juga kok lama-lama!
