# Hover Content Mapping: Queries (queries.html)

**Instruksi untuk AI Code Writer:** Gunakan struktur di bawah ini untuk mengisi atribut `data-title` dan `data-desc` pada elemen interaktif di halaman Queries.

## 1. Query Tools (Grup Toolbar Atas)
* **Item:** Query Wizard
    * **Title:** Query Wizard
    * **Description:** Panduan langkah-demi-langkah secara otomatis untuk membuat query sederhana dengan cepat. 
* **Item:** Query Design
    * **Title:** Query Design
    * **Description:** Tampilan manual berbentuk grid untuk menyusun logika query yang kompleks secara visual, seperti menambahkan filter, pengurutan (sort), atau rumus. 

## 2. Query Type (Jenis-Jenis Action Query)
* **Item:** Select Query (btn-select)
    * **Title:** Select Query
    * **Description:** Jenis query default yang paling aman. Fungsinya hanya untuk mencari dan menampilkan data tanpa mengubah isi database sama sekali.
* **Item:** Make Table (btn-make-table)
    * **Title:** Make Table Query
    * **Description:** Menjalankan query dan langsung membuat tabel baru yang berisi hasil pencarian tersebut. Berguna untuk membuat backup data spesifik.
* **Item:** Append (btn-append)
    * **Title:** Append Query
    * **Description:** Menambahkan atau menyalin data hasil query dari satu tabel ke tabel lain yang sudah ada. Sangat berguna untuk mengarsipkan data lama.
* **Item:** Update (btn-update)
    * **Title:** Update Query
    * **Description:** Mengubah data secara massal dalam satu klik. Contoh: Digunakan untuk menaikkan semua harga barang sebesar 10% secara bersamaan.
* **Item:** Crosstab (btn-crosstab)
    * **Title:** Crosstab Query
    * **Description:** Meringkas data dalam bentuk matriks (baris dan kolom), sangat mirip dengan fitur PivotTable di Excel. Memudahkan analisis data yang kompleks.

## 3. Show/Hide (Fitur Tambahan Toolbar)
* **Item:** Totals (btn-totals)
    * **Title:** Totals (Group By)
    * **Description:** Memunculkan baris "Total" untuk menghitung statistik data (seperti Sum, Count, Avg, Min, Max). Contoh: Menghitung total penjualan per Salesman.
* **Item:** Parameters (btn-parameters)
    * **Title:** Parameter Query
    * **Description:** Membuat query yang "bertanya" kepada user sebelum berjalan. Contoh: Saat dijalankan, akan muncul popup box meminta input nama sebelum data dicari.

## 4. QBE Container - Top (Area Tabel)
* **Item:** Table Pane
    * **Title:** Table Pane (Area Tabel)
    * **Description:** Menampilkan tabel-tabel yang digunakan sebagai sumber data query. Kamu bisa melakukan klik ganda (double-click) pada nama *field* di sini untuk memasukkannya ke dalam grid di bawah.

## 5. QBE Container - Bottom (Grid Baris Design)
* **Item:** Field Row
    * **Title:** Baris Field
    * **Description:** Kolom data spesifik yang ingin ditampilkan atau dihitung dalam hasil query.
* **Item:** Table Row
    * **Title:** Baris Table
    * **Description:** Menampilkan informasi asal tabel dari data tersebut (berguna jika query mengambil data dari banyak tabel yang berelasi).
* **Item:** Total Row
    * **Title:** Baris Total
    * **Description:** Digunakan untuk mengelompokkan data (Group By) atau melakukan fungsi matematika seperti menjumlahkan (Sum) dan menghitung jumlah baris (Count).
* **Item:** Crosstab Row
    * **Title:** Baris Crosstab
    * **Description:** Hanya muncul di Crosstab Query. Digunakan untuk menentukan *Row Heading* (Judul Baris), *Column Heading* (Judul Kolom), dan *Value* (Nilai yang dihitung).
* **Item:** Sort Row
    * **Title:** Baris Sort
    * **Description:** Mengurutkan hasil data. Bisa dipilih *Ascending* (A-Z / Kecil ke Besar) atau *Descending* (Z-A / Besar ke Kecil).
* **Item:** Append To Row
    * **Title:** Baris Append To
    * **Description:** Menentukan nama kolom tujuan di tabel lain tempat data ini akan ditempelkan (disalin).
* **Item:** Update To Row
    * **Title:** Baris Update To
    * **Description:** Tempat memasukkan nilai baru atau rumus untuk mengubah data secara massal. Contoh: Ketik `[Harga]*1.1` untuk menaikkan harga 10%.
* **Item:** Show Row
    * **Title:** Baris Show
    * **Description:** Checkbox untuk menyembunyikan atau menampilkan kolom di hasil akhir. Berguna jika sebuah kolom hanya dipakai untuk *filter* tapi tidak ingin ditampilkan.
* **Item:** Criteria Row
    * **Title:** Baris Criteria (Filter)
    * **Description:** Kondisi atau filter data. Contoh: Ketik `="Jakarta"` di bawah kolom Kota untuk hanya menampilkan data pelanggan dari Jakarta.
* **Item:** Or Row
    * **Title:** Baris Or (Atau)
    * **Description:** Baris tambahan di bawah *Criteria* untuk logika "ATAU". Jika salah satu syarat (di baris Criteria ATAU baris Or) terpenuhi, data akan ditampilkan.

## 6. Modals (Kotak Dialog Tambahan)
* **Item:** Modal Make Table
    * **Title:** Dialog Make Table
    * **Description:** Meminta kamu memasukkan nama untuk tabel baru yang akan dibuat berdasarkan hasil query saat ini.
* **Item:** Modal Append
    * **Title:** Dialog Append
    * **Description:** Memilih tabel tujuan yang sudah ada di dalam database untuk ditambahkan *record* baru dari query ini.
* **Item:** Modal Parameters
    * **Title:** Dialog Query Parameters
    * **Description:** Mendefinisikan tipe data spesifik untuk parameter (prompt pertanyaan) agar input dari *user* tidak salah format (misal: membatasi jawaban hanya berupa *Date/Time* atau *Currency*).

## 7. Info Panel (Panel Samping)
* **Item:** Default Query Info
    * **Title:** Query Design
    * **Description:** Query adalah "pertanyaan" atau perintah yang kita kirim ke database untuk memanipulasi data. Jauh lebih fleksibel daripada tabel, fitur *Query By Example* (QBE) memungkinkanmu menyusun query SQL yang rumit secara visual. Arahkan kursor pada **Criteria** atau **Sort** untuk mempelajari fungsinya!