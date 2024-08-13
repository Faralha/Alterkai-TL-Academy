---
title: 'Cleaner'
description: 'Penjelasan mendetail mengenai posisi Cleaner.'
---

::intro
---
image: '/img/typesetter/typesetter-header.png'
text: 'Cleaner'
desc: 'Membersihkan komik dari segala teks mulai dari dialog hingga efek'
---
::

- Tingkat kesulitan? `Susah`
- Estimasi pengerjaan `1-2 Hari/chapter`
- Format pengumpulan? `*.png, *.jpg, *.psb`

## Teknis Pengerjaan
:line

Yaudah sih, intinya mah anda membersihkan semua teks yang ada `:v` Untuk software jujur bebas, namun seiring bertambahnya level `(Dijelaskan dibawah)`, penggunaan aplikasi khusus seperti Adobe Photoshop sangat disarankan `Lantaran fitur Content Aware fillnya yang sangat membantu.`


## Levels!
:line

![img](/img/cleaner/cleaner-levels.png)

### Level 0: Dialog

Level paling mudah. Disini kalian hanya [menghapus teks yang berada didalam bubble dialog.]{style="background-color: #e76f51; color: black;"} Aplikasi yang digunakan pun sangat luas. `Pake paint windows pun jadi :v`


### Level 1: Selain Dialog latar polos/mudah

Jatuhnya sama kayak level 0. Pakai tool eraser atau brush putih/item tergantung background pun gaakan keliatan bekasnya `:D`
Paling [butuh ketelitian yang sedikit lebih banyak.]{style="background-color: #e76f51; color: black;"}


### Level 2: Selain dialog latar gradasi

Disini pakai paint atau ibis atau aplikasi gambar apapun masih bisa, ` walau agak ribet buat bikin ulang gradasinya`. Bisa, tapi ribet. Mulai dari level ini [sangat disarankan menggunakan Adobe Photoshop]{style="background-color: #e76f51; color: black;"} yang udah ada Content-aware fillnya.


### Level 3: Selain dialog latar objek + banyak teks

Final boss. Melakukan clean bersih[tanpa menggunakan Adobe Photoshop bisa dibilang mustahil]{style="background-color: #e76f51; color: black;"} disini. Bisa gapake Photoshop, tapi bakal keliatan banget bedanya. Disini `Content Aware Fill` sangat-sangatlah dibutuhkan, juga keahlian memilih sumber content aware fillnya sangat berguna.


## How-to
:line

![img](/img/cleaner/tools.png)

Kalian harus sangat-sangat pake banget familiar dengan dua alat ini: "Polygonal Lasso Tool/Rectangular Marquee Tool" dan "Content Aware Fill". Keduanya akan selalu dipakai untuk cleaning.

### Step 0: Pastikan layer sudah di rasterize.

Kalau opsi Content-aware fillmu ga bisa dipakai, itu karena layer belum di rasterize. Caranya tinggal pilih layer, ketik `CTRL + B` untuk tool Brush, lalu klik sembarang pada gambar. Sebuah pop up windows akan muncul meminta untuk Rasterize layer, seperti dibawah ini.

![img](/img/cleaner/rasterize.png)

Klik ok, dan selesai. Lanjut step selanjutnya.

### Step 1: Seleksi area yang ingin dihapus

![img](/img/cleaner/step1-1.png)

Pastikan layer yang ingin dihapus sudah diseleksi. Kemudian tandai area yang ingin dihapus dengan `Polygonal Marquee Tool` atau `Rectangular Marquee Tool`. Bebas mau pakai yang mana.

### Step 2: Content aware fill

Pilih `Edit > Content Aware Fill` seperti dibawah ini.

![img](/img/cleaner/step2.png)

Nantinya akan muncul sebuah window baru. Sebelumnya pastikan mode custom sudah dipilih seperti gambar dibawah:

![img](/img/cleaner/step2-1.png)

mode ini membiarkan penggunanya menentukan "sumber" atau "referensi" bagi AI photoshop untuk mengetahui akan diisi apa area seleksinya. Selanjutnya kita pilih area disekitar objek yang ingin dihapus seperti biasa.

![img](/img/cleaner/step2-2.png)

Kalau dirasa hasilnya kurang rapih, boleh coba seleksi ulang area referensinya sampai dapat yang cocok. Untuk patokan, hasil seperti diatas sudah bisa dibilang bagus dan rapih `(karena endingnya juga bakal ditiban teks lagi)` Pilih OK untuk menyelesaikan prosesnya.

Kalau sudah keluar, pencet `CTRL + D` untuk deselect area seleksi.

### Step 3: Practice makes perfect!

Selesai! Inti dari cleaner itu aja. Sebagian besar cleaning bisa selesai hanya dengan Seleksi > content aware fill kayak diatas, tapi terkadang juga dibutuhkan cleaning manual pakai brush! Balik lagi, semua tergantung kondisi dan seberapa kreatif kalian dalam menggunakan selection tools dan content aware fill.

Bonus, ini hasil cleaning + typeset kedua paling susah menurut gw selama nge-TL di Alterkai.

![img](/img/cleaner/path.png)

Semangat mencoba! Semakin lama jam terbang kalian, semakin jago juga kok lama-lama!

Oiya, HARAM SEKALI HUKUMNYA PAKAI WAND MAGIC TOOL. `Terutama untuk daerah luas, hasilnya dijamin bakalan jelek (kayak hasil cleaning MahoAko awal-awal.)`

::navigator
---
nextLink: '/redraw'
nextText: 'Redraw'
nextDesc: 'Penjelasan mendetail mengenai posisi Redraw.'
prevLink: '/typesetter'
prevText: 'Typesetter'
prevDesc: 'Penjelasan mendetail mengenai posisi Typesetter..'
---
::
