---
name: "SAID RUN Design System"
description: "Sistem desain modern, energik, dan terstruktur untuk platform manajemen event lari SAID RUN UIN Raden Mas Said Surakarta."
---

## Overview

SAID RUN adalah platform manajemen event lari tahunan yang diselenggarakan oleh Pusat Pengembangan Bisnis UIN Raden Mas Said Surakarta. Sistem desain ini menggabungkan energi olahraga lari yang dinamis dan kompetitif dengan kejelasan informasi khas portal akademik modern.

Desain ini ditujukan untuk dua kelompok pengguna utama: **Peserta & Pengunjung** (mahasiswa, civitas akademika, alumni, dan masyarakat umum) yang membutuhkan alur informasi dan pendaftaran ringkas maksimal 4 tahap, serta **Admin & Panitia** yang membutuhkan dashboard operasional padat data, verifikasi pembayaran, dan pemindaian QR race pack yang cepat di lapangan. Gaya visual mengadopsi **Modern Athletic Editorial** dalam mode terang (*light mode*): ruang bernapas lega, tipografi tegas dengan angka tabular untuk waktu dan nomor BIB, serta hierarki permukaan berbasis kontras tonal.

## Colors

Palet warna berakar pada **Emerald Track** (`#00543A`) sebagai warna utama yang merepresentasikan identitas UIN Raden Mas Said Surakarta dan kesegaran lari luar ruang, dipadukan dengan **Start-Line Ember** (`#A73A00` / `#FD651E`) sebagai aksen energi untuk penanda kuota, promo *early bird*, dan aksi sekunder. Status pendaftaran dan pengambilan *race pack* menggunakan token semantik khusus agar peserta dan panitia langsung mengenali status *Terverifikasi*, *Menunggu Pembayaran*, *Perlu Pemeriksaan*, maupun *Kedaluwarsa*.

- **Primary:** Identitas utama, tombol aksi primer, dan navigasi aktif.
- **Secondary:** Penanda promo *early bird*, sisa kuota terbatas, dan sorotan kategori lomba.
- **Surface tiers:** Permukaan berlapis dari `#F9F9FF` hingga `#FFFFFF` untuk memisahkan area konten tanpa garis batas berlebihan.

```yaml
colors:
  success: "#0D6E4E"
  on-success: "#FFFFFF"
  success-container: "#BDFFDD"
  on-success-container: "#003826"
  warning: "#9A4A00"
  on-warning: "#FFFFFF"
  warning-container: "#FFDBCE"
  on-warning-container: "#5A1C00"
  light:
    primary: "#00543A"
    on-primary: "#FFFFFF"
    primary-container: "#0D6E4E"
    on-primary-container: "#98EDC5"
    secondary: "#A73A00"
    on-secondary: "#FFFFFF"
    secondary-container: "#FD651E"
    on-secondary-container: "#571A00"
    tertiary: "#793230"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#974946"
    on-tertiary-container: "#FFD1CE"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#F9F9FF"
    on-background: "#111C2D"
    surface: "#F9F9FF"
    surface-dim: "#CFDAF2"
    surface-bright: "#F9F9FF"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#F0F3FF"
    surface-container: "#E7EEFF"
    surface-container-high: "#DEE8FF"
    surface-container-highest: "#D8E3FB"
    on-surface: "#111C2D"
    surface-variant: "#DAE5DD"
    on-surface-variant: "#3F4943"
    outline: "#6F7A73"
    outline-variant: "#BEC9C1"
    inverse-surface: "#263143"
    inverse-on-surface: "#ECF1FF"
    inverse-primary: "#83D7B0"
  dark:
    primary: "#83D7B0"
    on-primary: "#003826"
    primary-container: "#0D6E4E"
    on-primary-container: "#98EDC5"
    secondary: "#FFB599"
    on-secondary: "#5A1C00"
    secondary-container: "#F66018"
    on-secondary-container: "#320C00"
    tertiary: "#FFB3AF"
    on-tertiary: "#5A1A1A"
    tertiary-container: "#974946"
    on-tertiary-container: "#FFD1CE"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#081425"
    on-background: "#D8E3FB"
    surface: "#081425"
    surface-dim: "#081425"
    surface-bright: "#2F3A4C"
    surface-container-lowest: "#040E1F"
    surface-container-low: "#111C2D"
    surface-container: "#152031"
    surface-container-high: "#1F2A3C"
    surface-container-highest: "#2A3548"
    on-surface: "#D8E3FB"
    surface-variant: "#3F4943"
    on-surface-variant: "#BEC9C1"
    outline: "#88938C"
    outline-variant: "#3F4943"
    inverse-surface: "#D8E3FB"
    inverse-on-surface: "#263143"
    inverse-primary: "#086C4C"
```

## Typography

Tipografi memadukan **Instrument Sans** untuk judul yang tegas dan atletis, **Alata** untuk keterbacaan teks antarmuka yang bersih dan ramah, serta **Red Hat Mono** untuk nomor BIB, catatan waktu tempuh (`00:24:38`), kode QR, dan nominal transaksi agar kolom angka sejajar presisi (`tabular-nums`).

```yaml
typography:
  display-lg:
    fontFamily: "Instrument Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 54px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Instrument Sans"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Instrument Sans"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.25px
  headline-lg-mobile:
    fontFamily: "Instrument Sans"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.15px
  headline-md:
    fontFamily: "Instrument Sans"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.1px
  title-lg:
    fontFamily: "Instrument Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 26px
    letterSpacing: 0px
  title-md:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Alata"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: "Alata"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.25px
  mono-md:
    fontFamily: "Red Hat Mono"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  mono-lg:
    fontFamily: "Red Hat Mono"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 26px
    letterSpacing: 0px
```

## Layout & Spacing

Tata letak desktop menggunakan **Fixed-Max-Width 12-Column Grid** (`max-w-7xl` / `1280px`) dengan margin halaman `24px` (`gutter-lg`) dan jarak antar kolom `24px`. Untuk layar ponsel (`< 768px`), grid menyusut menjadi 1 kolom penuh dengan margin `16px`. Skala spasi dibangun di atas kelipatan `4px` dan `8px` untuk menjaga ritme vertikal yang konsisten antara komponen internal (tombol, input, kartu) dan jarak antar bagian halaman.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 48px
  page-margin: 24px
```

## Elevation & Depth

Hierarki kedalaman mengandalkan **Tonal Layers** (perbedaan tingkat warna permukaan dari `surface` ke `surface-container-lowest` `#FFFFFF`) serta garis tepi halus (`outline-variant`) beropasitas rendah. Bayangan lembut (*ambient shadow*) hanya digunakan secara terbatas pada elemen mengambang seperti modal persetujuan *waiver*, kartu *e-ticket* QR, dan menu dropdown. Hindari *backdrop-blur* atau bayangan berat pada kartu tabel dan formulir.

## Shapes

Bahasa bentuk memadukan ketegasan garis lintasan lari dengan sudut membulat modern. Kartu konten dan panel dashboard menggunakan radius sedang (`12px`–`16px`), tombol dan kolom input menggunakan radius `8px` agar terasa kokoh saat diklik, sedangkan lencana status (*badge*) dan *chip* kategori menggunakan radius penuh (`9999px`).

```yaml
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
```

## Motion & Micro-interaction

Animasi bersifat cepat, fungsional, dan tidak mengganggu alur pendaftaran maupun pemindaian QR di lapangan. Perubahan status tombol dan tab terjadi seketika (`100ms`), sedangkan transisi antar tahap formulir atau kemunculan panel detail menggunakan kurva deselerasi (`200ms`). Hanya properti `transform`, `opacity`, dan warna yang dianimasikan; tidak ada animasi berulang tanpa interaksi pengguna.

```yaml
motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Nada suara:** Ramah, jelas, suportif, dan terstruktur. Menggunakan Bahasa Indonesia baku yang natural untuk konteks acara kampus dan olahraga lari.
- **Kapitalisasi:** *Sentence case* untuk judul bagian, label formulir, dan pesan status; *Title Case* hanya untuk nama acara resmi (**SAID RUN**), kategori lomba (**5K Fun Run**, **10K Competitive**), dan nama menu utama.
- **Terminologi konsisten:** Gunakan istilah **BIB** (bukan nomor punggung), **Race Pack** (bukan paket lomba), **E-Ticket**, **E-Certificate**, dan status pendaftaran resmi (**Menunggu Pembayaran**, **Terverifikasi**, **Perlu Pemeriksaan**, **Ditolak**, **Kedaluwarsa**).
- **Label aksi:** Gunakan kata kerja spesifik yang menjelaskan hasil, seperti *Daftar Sekarang*, *Lanjut ke Pembayaran*, *Unduh E-Certificate*, *Konfirmasi Penyerahan*, atau *Ekspor Data Peserta*.
- **Format angka & tanggal:** Gunakan format Rupiah (`Rp 150.000`), tanggal Indonesia (`19 September 2026`), dan waktu tempuh tabular (`00:24:38`).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html` — `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html` — `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Input Field** → `@components/input-field.html` — `input-field-text`, `input-field-icon`
- **Table** → `@components/table.html` — `table-standard`, `table-interactive`, `table-selectable`
