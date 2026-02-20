# Hover Content Mapping: Forms (forms.html)

**Instruksi untuk AI Code Writer:** Gunakan struktur di bawah ini untuk mengisi atribut `data-info` (atau `data-title` dan `data-desc`) pada elemen `.interactive-hover` di halaman Forms.

## 1. View Tabs (Mode Tampilan)
* **Item:** Form View Tab
    * **Title:** Form View
    * **Description:** Tampilan utama untuk menggunakan form. Di sini, pengguna berinteraksi langsung dengan form untuk memasukkan, mengedit, atau melihat data. 
* **Item:** Design View Tab
    * **Title:** Design View
    * **Description:** Tampilan khusus bagi pengembang database untuk membangun dan memodifikasi struktur, warna, dan tata letak kontrol di dalam form. 

## 2. Toolbar: Form Tools (Grup Pembuatan Form)
* **Item:** Form (Standard)
    * **Title:** Form (Standard)
    * **Description:** Membuat form standar yang menampilkan satu record per layar secara instan. Tampilannya sederhana dan langsung jadi.
* **Item:** Form Design
    * **Title:** Form Design
    * **Description:** Membuat form kosong baru di layar Design View, memberikanmu kontrol penuh dari awal untuk mendesain tata letak.
* **Item:** Blank Form
    * **Title:** Blank Form
    * **Description:** Membuat form kosong langsung di tampilan Layout View agar bisa disesuaikan sambil melihat datanya.
* **Item:** Form Wizard
    * **Title:** Form Wizard
    * **Description:** Fitur panduan otomatis yang akan menanyakan langkah-demi-langkah *field* apa saja yang ingin kamu masukkan untuk membangun sebuah form.
* **Item:** Multiple Items
    * **Title:** Multiple Items Form
    * **Description:** Mirip tabel biasa, tetapi bisa dikustomisasi dengan tombol atau warna. Menampilkan banyak record sekaligus dalam satu layar (continuous form).
* **Item:** Navigation
    * **Title:** Navigation Form
    * **Description:** Form khusus yang berfungsi sebagai "Menu Utama" atau dashboard. Berisi tab/tombol untuk membuka form atau report lain, membuat aplikasi terlihat seperti website profesional.

## 3. Toolbar: Design Tools (Kontrol Desain)
* **Item:** Text Box
    * **Title:** Text Box Control
    * **Description:** Kontrol utama untuk menampilkan data dari tabel, serta tempat di mana pengguna mengetikkan atau mengedit data baru.
* **Item:** Label
    * **Title:** Label Control
    * **Description:** Menambahkan teks statis seperti judul, petunjuk, atau nama kolom yang posisinya tetap dan tidak bisa diedit oleh pengguna biasa.
* **Item:** Button
    * **Title:** Command Button
    * **Description:** Tombol aksi yang bisa diklik oleh pengguna. Biasanya digunakan untuk Save, Delete, Print Record, atau berpindah halaman.

## 4. Form Canvas (Anatomi Tampilan Form View)
* **Item:** Form Title
    * **Title:** Form Header (Judul)
    * **Description:** Bagian atas form yang sifatnya statis. Biasanya berisi judul utama aplikasi atau logo perusahaan.
* **Item:** Form Heading
    * **Title:** Form Heading
    * **Description:** Teks penjelas (Label) yang membantu pengguna mengetahui kategori informasi atau record apa yang sedang mereka lihat.
* **Item:** Field Label
    * **Title:** Field Label
    * **Description:** Teks statis yang mendeskripsikan informasi apa yang harus dimasukkan ke kotak di sebelahnya. Sebaiknya disamakan dengan nama kolom di tabel agar jelas.
* **Item:** Data Field (Input)
    * **Title:** Data Field (Text Box)
    * **Description:** Kotak input (*Text Box*) yang terikat langsung (*bound*) ke sebuah kolom di dalam tabel. Apa yang diketik di sini akan tersimpan ke dalam database.
* **Item:** Navigation Button
    * **Title:** Navigation Button
    * **Description:** Tombol navigasi untuk berpindah melihat data siswa sebelumnya (*Previous*) atau data siswa selanjutnya (*Next*).
* **Item:** Action Button
    * **Title:** Action Button
    * **Description:** Tombol perintah eksekusi (*Command Button*). Berfungsi untuk mengeksekusi aksi khusus seperti Menambah (*Add*) atau Menghapus (*Delete*) data.

## 5. Design Canvas (Anatomi Tampilan Design View)
* **Item:** Design Band: Form Header
    * **Title:** Form Header Section
    * **Description:** Area paling atas di Design View. Apapun yang diletakkan di sini (seperti judul form) akan selalu terlihat di bagian atas layar form.
* **Item:** Design Area: Detail
    * **Title:** Detail Section
    * **Description:** Area paling penting dalam form. Di sinilah kamu meletakkan Label dan Text Box. Bagian ini akan menampilkan data *record* dari tabel secara dinamis.
* **Item:** Design Area: Text Box Control (Data)
    * **Title:** Text Box Control (Bound)
    * **Description:** Di dalam Design View, kotak ini tidak menampilkan data asli, melainkan hanya menampilkan nama *field* (kolom) yang dihubungkan ke tabel.
* **Item:** Design Area: Form Footer
    * **Title:** Form Footer Section
    * **Description:** Area bawah form. Sangat ideal untuk meletakkan tombol navigasi (*Next/Prev*) atau tombol operasi form (*Save/Close*).

## 6. Button Wizard (Kategori Tombol Perintah)
* **Item:** Category: Record Navigation
    * **Title:** Record Navigation
    * **Description:** Perintah untuk berpindah antar data. Contoh aksinya: *Go To Next Record*, *Go To Previous Record*, atau *Find Record*.
* **Item:** Category: Record Operations
    * **Title:** Record Operations
    * **Description:** Perintah untuk memanipulasi data di tabel. Contoh aksinya: Menambah (*Add New Record*), Menyimpan (*Save Record*), atau Menghapus (*Delete Record*).
* **Item:** Category: Form Operations
    * **Title:** Form Operations
    * **Description:** Perintah yang mengatur form itu sendiri. Contoh aksinya: Membuka form lain (*Open Form*) atau menutup form yang sedang aktif (*Close Form*).
* **Item:** Category: Report Operations
    * **Title:** Report Operations
    * **Description:** Perintah yang berhubungan dengan pencetakan. Contoh aksinya: Membuka pratinjau laporan (*Preview Report*) atau langsung mencetak ke printer (*Print Report*).
* **Item:** Category: Application
    * **Title:** Application
    * **Description:** Berisi perintah tingkat tinggi, seperti *Quit Application* untuk keluar dari program Microsoft Access secara keseluruhan.

## 7. Info Panel (Panel Samping)
* **Item:** Default Forms Info
    * **Title:** Forms
    * **Description:** Form adalah antarmuka (*interface*) agar user bisa menginput data dengan mudah tanpa melihat tabel mentah. Form berfungsi ganda sebagai alat input sekaligus output data. Beralihlah ke tab 'Design View' untuk melihat bagaimana form disusun!