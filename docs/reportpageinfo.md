# Hover Content Mapping: Reports (reports.html)

**Instruksi untuk AI Code Writer:** Gunakan struktur di bawah ini untuk mengisi atribut `data-info` (atau `data-title` dan `data-desc`) pada setiap elemen `.interactive-hover` di halaman Reports.

## 1. View Tabs (Mode Tampilan)
* **Item:** Report View Tab
    * **Title:** Report View
    * **Description:** Tampilan cepat untuk melihat data asli yang sudah diformat sebagai laporan di layar komputermu. 
* **Item:** Print View Tab
    * **Title:** Print Preview
    * **Description:** Tampilan pratinjau cetak. Memperlihatkan secara pasti bagaimana laporan akan terlihat dengan margin dan tata letak fisik saat dicetak di atas kertas.
* **Item:** Design View Tab
    * **Title:** Design View
    * **Description:** Tampilan untuk mengedit struktur laporan (header, footer, kolom, dan tata letak data) secara bebas. 

## 2. Toolbar: Report Tools (Alat Laporan)
* **Item:** Report
    * **Title:** Report (Laporan Standar)
    * **Description:** Membuat laporan sederhana secara instan yang menampilkan semua data dari tabel yang dipilih.
* **Item:** Report Design
    * **Title:** Report Design
    * **Description:** Membuat laporan kosong baru langsung di Design View untuk memberikan kontrol tata letak penuh dari nol kepada desainer.
* **Item:** Blank Report
    * **Title:** Blank Report
    * **Description:** Membuat laporan kosong di Layout View, memungkinkanmu menambahkan kolom satu per satu sambil langsung melihat datanya.
* **Item:** Report Wizard
    * **Title:** Report Wizard
    * **Description:** Panduan otomatis langkah-demi-langkah untuk membuat laporan. Sangat berguna untuk mengelompokkan data (Grouping & Sorting) dengan mudah.

## 3. Toolbar: Print Tools (Alat Cetak)
* **Item:** Print
    * **Title:** Print
    * **Description:** Mengirim laporan langsung ke mesin printer untuk dicetak (Hardcopy).
* **Item:** Size
    * **Title:** Paper Size
    * **Description:** Memilih ukuran kertas fisik yang akan digunakan (misalnya: A4, Letter, atau Legal).
* **Item:** Margins
    * **Title:** Margins
    * **Description:** Mengatur jarak batas tepi halaman kertas (margin atas, bawah, kiri, dan kanan) agar cetakan terlihat rapi.
* **Item:** Portrait
    * **Title:** Portrait Orientation
    * **Description:** Mengatur orientasi kertas menjadi vertikal (memanjang ke atas). Cocok untuk laporan standar.
* **Item:** Landscape
    * **Title:** Landscape Orientation
    * **Description:** Mengatur orientasi kertas menjadi horizontal (mendatar). Sangat cocok jika tabel datamu memiliki banyak kolom yang lebar.

## 4. Toolbar: Design Tools (Alat Desain)
* **Item:** Page Numbers
    * **Title:** Page Numbers
    * **Description:** Menyisipkan nomor halaman otomatis, biasanya diletakkan di bagian Page Footer.
* **Item:** Logo
    * **Title:** Logo
    * **Description:** Menambahkan gambar atau logo instansi ke bagian Report Header.
* **Item:** Title
    * **Title:** Title Label
    * **Description:** Menambahkan teks statis sebagai judul utama laporan.
* **Item:** Date and Time
    * **Title:** Date and Time
    * **Description:** Menyisipkan format tanggal dan waktu saat ini secara otomatis ke dalam laporan.
* **Item:** Text Box
    * **Title:** Text Box Control
    * **Description:** Menambahkan field (kotak) yang terhubung ke tabel/query untuk menampilkan baris data secara dinamis.
* **Item:** Label
    * **Title:** Label Control
    * **Description:** Menambahkan teks statis, biasanya digunakan sebagai judul kolom (Column Heading) di bagian Page Header.

## 5. Report Canvas & Design Sections (Anatomi Laporan)
* **Item:** Report Header (Title Header / Design Band)
    * **Title:** Report Header
    * **Description:** Bagian paling atas dari laporan. Hanya dicetak satu kali di halaman pertama. Biasanya berisi judul utama atau logo perusahaan.
* **Item:** Page Header (Col Header / Design Band)
    * **Title:** Page Header
    * **Description:** Bagian yang dicetak berulang di bagian paling atas pada setiap halaman kertas. Sangat berguna untuk meletakkan teks judul kolom agar tabel mudah dibaca di setiap halaman.
* **Item:** Detail (Report Row / Design Band)
    * **Title:** Detail Section
    * **Description:** Bagian inti laporan. Area ini akan terus berulang (repeats) ke bawah untuk menampilkan setiap baris data (record) dari sumber tabel atau query.
* **Item:** Page Footer (Report Page Footer / Design Band)
    * **Title:** Page Footer
    * **Description:** Dicetak berulang di bagian paling bawah pada setiap halaman. Paling sering digunakan untuk meletakkan nomor halaman atau tanggal cetak.
* **Item:** Report Footer (Design Band)
    * **Title:** Report Footer
    * **Description:** Bagian paling akhir dari laporan dan hanya dicetak satu kali di halaman terakhir. Sering digunakan untuk fitur Calculations (Kalkulasi), seperti menambahkan Grand Total atau Subtotal menggunakan rumus `=Sum([Total])`.

## 6. Functions (Fungsi Khusus di Design View)
* **Item:** Function =Now()
    * **Title:** Date/Time Function
    * **Description:** Rumus otomatis di Access untuk menampilkan tanggal dan waktu saat ini (saat laporan dicetak atau dibuka).
* **Item:** Function =Page()
    * **Title:** Page Function
    * **Description:** Rumus otomatis untuk menampilkan nomor halaman saat ini secara berurutan.

## 7. Print View Canvas
* **Item:** Printed Page (Kertas Pratinjau)
    * **Title:** Printed Page
    * **Description:** Menyimulasikan tampilan fisik kertas. Report adalah hasil akhir data (Output resmi) yang siap dicetak menjadi dokumen (Hardcopy) atau diekspor menjadi file PDF.

## 8. Info Panel (Panel Samping)
* **Item:** Default Reports Info
    * **Title:** Reports (Laporan)
    * **Description:** Report adalah hasil akhir data yang berfungsi sebagai Output resmi dan siap dicetak (Hardcopy) atau diekspor (PDF). Sumber datanya bisa diambil langsung dari Tabel atau dari Query jika butuh data yang sudah diolah/difilter. Di sini kamu bisa menggunakan fitur Grouping & Sorting untuk mengelompokkan data (misal: Laporan Penjualan per Bulan).