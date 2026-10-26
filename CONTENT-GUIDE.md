# Panduan Gaya Konten

Panduan singkat untuk menulis atau mengedit halaman tutorial di `src/content/docs/`. Tujuannya satu: halaman enak dibaca sebagai panduan, bukan brosur.

## Suara

- Bahasa Indonesia santai, seperti ngobrol sama teman satu tim. "Kalian" atau "kamu", boleh "gw" kalau itu cerita pribadi penulis.
- Langsung ke inti. Kalau satu kalimat cukup, jangan jadi satu paragraf.
- Istilah teknis boleh pakai bahasa Inggris kalau memang itu yang dipakai di lapangan (typeset, cleaning, Content-Aware Fill). Selain itu, pakai bahasa Indonesia.
- Jangan mengarang pengalaman pribadi atas nama orang lain.

## Panjang dan struktur

- Target 400-900 kata prosa per halaman (blok kode tidak dihitung).
- Urutan halaman posisi: pembuka singkat → teknis pengerjaan → contoh → Do's and Don'ts.
- Tidak perlu bagian "Kriteria Ideal", "Memulai Karir", "Monetisasi", atau "Pesan Penutup" yang isinya umum. Penutup personal boleh, asal ditulis sendiri.

## Format

- **Spesifikasi posisi** (kesulitan, estimasi, format) ditulis di frontmatter, bukan di isi:

  ```yaml
  spec:
    difficulty: "Sedang"
    time: "1-2 hari/chapter"
    format: "*.txt"
  ```

- **Do's and Don'ts** pakai komponen `DoDont` (dua kolom, otomatis bertumpuk di HP). Halamannya harus `.mdx`, lalu import komponennya di bawah frontmatter. Beri baris kosong di dalam tiap `<div>` supaya list-nya tetap dibaca sebagai Markdown:

  ```mdx
  import DoDont from '../../components/DoDont.astro';

  ## Do's and Don'ts

  <DoDont>
  <div slot="do">

  1. Terjemahkan per kalimat.

  </div>
  <div slot="dont">

  1. Terjemah per kata.

  </div>
  </DoDont>
  ```

  Di file `.mdx`, karakter `{`, `}`, dan `<` di luar blok kode punya arti khusus. Kalau perlu menulisnya, taruh di dalam `` `kode` ``.

- **Emoji** hanya di frontmatter `icon` (muncul di depan judul). Jangan pakai emoji di heading.
- **Bold** untuk istilah atau poin kunci saja, maksimal satu per paragraf. Untuk frasa yang benar-benar penting, pakai `<mark>...</mark>`, dan jangan lebih dari beberapa per halaman.
- **Callout** (`:::tip`, `:::note`, `:::caution`, `:::danger`) maksimal satu per section. Kalau semuanya penting, tidak ada yang penting.
- **`<details>`** hanya untuk contoh panjang (template, file `.txt` lengkap). Beri baris kosong setelah `</summary>` dan sebelum `</details>`, dan jangan pakai Markdown di dalam `<summary>`.
- **Gambar** taruh di `public/img/<halaman>/` dan rujuk dengan path absolut, misalnya `/img/translator/bubble.png`. Selalu isi alt text.

## Pengecekan otomatis

`pnpm build` menjalankan `pnpm check:content` lebih dulu.

- **Error** (build gagal): Markdown di dalam `<summary>`, baris kosong yang hilang di `<details>`, shortcode emoji seperti `:star:`.
- **Peringatan** (build tetap jalan): emoji di heading, lebih dari satu callout dalam satu section, prosa di atas 900 kata, dan heading `### Do's` / `### Don'ts` yang belum memakai `DoDont`.
