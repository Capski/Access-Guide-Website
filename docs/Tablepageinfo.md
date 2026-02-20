# Hover Content Mapping: Tables (tables.html)

**Instruksi untuk AI Code Writer:** Gunakan struktur di bawah ini untuk mengisi atribut `data-title` dan `data-desc` pada setiap item yang dapat di-hover di halaman Tables. Pastikan setiap item berdiri sendiri.

## 1. View Types (Mode Tampilan)
* **Item:** Datasheet View
    * **Title:** Datasheet View
    * **Description:** Tampilan standar berbentuk grid (baris dan kolom) untuk melihat, menambah, atau mengedit data secara langsung.
* **Item:** Design View
    * **Title:** Design View
    * **Description:** Tampilan "di balik layar" untuk mengontrol dan merancang struktur tabel secara penuh. Di sini kamu menentukan nama kolom dan aturan datanya.

## 2. Datasheet Elements (Elemen Tabel)
* **Item:** Field (Column/Kolom)
    * **Title:** Field (Kolom)
    * **Description:** Kategori atau atribut spesifik dari sebuah data. Contoh: Kolom "Nama", "Alamat", atau "Nomor Telepon".
* **Item:** Record (Row/Baris)
    * **Title:** Record (Baris)
    * **Description:** Satu kesatuan data utuh yang saling terkait. Contoh: Satu baris horizontal berisi data lengkap milik satu orang siswa.
* **Item:** Cell (Sel)
    * **Title:** Cell (Sel Data)
    * **Description:** Titik temu antara Field dan Record. Tempat di mana satu nilai data tunggal disimpan.

## 3. Design View: Data Types (Tipe Data)
* **Item:** Short Text
    * **Title:** Short Text
    * **Description:** Teks pendek (huruf/angka) dengan maksimal 255 karakter. Sangat cocok untuk Nama atau Nomor Telepon karena tidak digunakan untuk perhitungan matematis.
* **Item:** Long Text
    * **Title:** Long Text
    * **Description:** Digunakan untuk teks panjang atau catatan detail. Kapasitas penyimpanannya sangat besar, hingga 1 GB.
* **Item:** Number
    * **Title:** Number
    * **Description:** Menyimpan angka yang akan digunakan untuk perhitungan matematis.
* **Item:** Large Number
    * **Title:** Large Number
    * **Description:** Menyimpan angka bulat (integer) yang bernilai sangat besar.
* **Item:** Date/Time
    * **Title:** Date/Time
    * **Description:** Tipe data khusus untuk menyimpan informasi tanggal dan waktu secara akurat.
* **Item:** Currency
    * **Title:** Currency
    * **Description:** Format angka untuk mata uang (seperti Rp atau $). Tipe ini menjaga standar 2 desimal agar perhitungan keuangan tetap akurat.
* **Item:** AutoNumber
    * **Title:** AutoNumber
    * **Description:** Angka urut yang dihasilkan secara otomatis oleh sistem dan tidak bisa diisi manual. Sering digunakan sebagai Primary Key.
* **Item:** Yes/No
    * **Title:** Yes/No (Boolean)
    * **Description:** Data logika yang hanya memiliki dua pilihan, seperti Ya/Tidak atau Benar/Salah. Biasanya tampil sebagai checkbox.
* **Item:** OLE Object
    * **Title:** OLE Object
    * **Description:** Digunakan untuk menyematkan objek dari aplikasi eksternal, seperti dokumen Word atau spreadsheet Excel.
* **Item:** Hyperlink
    * **Title:** Hyperlink
    * **Description:** Menyimpan tautan (link) yang bisa diklik menuju alamat website/URL atau file tertentu.
* **Item:** Attachment
    * **Title:** Attachment
    * **Description:** Memungkinkan kamu menyimpan file lampiran secara langsung di dalam database, seperti foto atau dokumen.
* **Item:** Calculated
    * **Title:** Calculated
    * **Description:** Field yang nilainya dihasilkan secara otomatis dari perhitungan matematika field lainnya. Contoh: [Harga] * [Jumlah].
* **Item:** Lookup Wizard
    * **Title:** Lookup Wizard
    * **Description:** Alat bantu untuk membuat relasi manual atau membuat daftar pilihan (dropdown) dari tabel lain.

## 4. Field Properties (Tab General)
* **Item:** Field Size
    * **Title:** Field Size
    * **Description:** Membatasi jumlah karakter maksimum yang bisa diinput. Contoh: Di-set 10 agar ukuran database tidak boros memori.
* **Item:** New Values
    * **Title:** New Values
    * **Description:** Menentukan bagaimana nilai untuk tipe data AutoNumber dihasilkan saat record baru ditambahkan. Pilihannya adalah Increment (berurutan 1, 2, 3) atau Random (angka acak).
* **Item:** Format
    * **Title:** Format
    * **Description:** Mengatur tampilan visual data di layar tanpa mengubah data aslinya. Contoh: Long Date membuat tanggal tampil sebagai "Thursday, November 12, 2015".
* **Item:** Decimal Places
    * **Title:** Decimal Places
    * **Description:** Menentukan jumlah angka di belakang koma (desimal) yang ingin ditampilkan. Sangat berguna untuk merapikan tampilan tipe data Number atau Currency.
* **Item:** Input Mask
    * **Title:** Input Mask
    * **Description:** Pola panduan yang memaksa user mengetik dalam format seragam. Contoh: LL-001 memaksa input berupa 2 huruf yang diikuti 3 angka.
* **Item:** Caption
    * **Title:** Caption
    * **Description:** Nama alias untuk sebuah field agar terlihat lebih rapi di Form atau Report. Contoh: Field Tgl_Lhr diberi caption "Tanggal Lahir".
* **Item:** Default Value
    * **Title:** Default Value
    * **Description:** Nilai otomatis yang akan langsung terisi jika user membiarkan kolom tersebut kosong.
* **Item:** Validation Rule
    * **Title:** Validation Rule
    * **Description:** Aturan atau syarat logika agar data yang dimasukkan dianggap sah. Contoh: >=0 and <100 memastikan nilai yang diinput hanya dari 0 hingga 100.
* **Item:** Validation Text
    * **Title:** Validation Text
    * **Description:** Pesan peringatan (error) kustom yang akan muncul jika user melanggar aturan dari Validation Rule.
* **Item:** Required
    * **Title:** Required
    * **Description:** Menentukan apakah field ini wajib diisi (Yes) atau boleh dibiarkan kosong (No).
* **Item:** Allow Zero Length
    * **Title:** Allow Zero Length
    * **Description:** Jika diatur ke Yes, sistem mengizinkan input berupa teks kosong ("") yang berbeda dengan status Null (tidak ada data sama sekali).
* **Item:** Indexed
    * **Title:** Indexed
    * **Description:** Membuat indeks internal untuk mempercepat proses pencarian data. Namun, penggunaan indeks yang terlalu banyak bisa memperlambat proses update data.
* **Item:** Unicode Compression
    * **Title:** Unicode Compression
    * **Description:** Jika diaktifkan (Yes), sistem akan memampatkan teks yang diketik agar ukuran file database tidak membengkak. Sangat dianjurkan untuk Short Text dan Long Text.
* **Item:** IME Mode
    * **Title:** IME Mode
    * **Description:** Mengontrol status aktifnya Input Method Editor (IME). Biasanya digunakan jika kamu membuat database yang membutuhkan input karakter bahasa Asia Timur (seperti Jepang atau Korea).
* **Item:** IME Sentence Mode
    * **Title:** IME Sentence Mode
    * **Description:** Mengatur fase konversi kalimat khusus untuk penggunaan Input Method Editor (IME) bahasa Asia Timur. Biasanya dibiarkan secara default jika menggunakan huruf Latin.
* **Item:** Text Format
    * **Title:** Text Format
    * **Description:** Menentukan apakah teks di dalam kolom (biasanya Long Text) hanya berupa teks biasa (Plain Text) atau bisa diformat seperti di Word (Rich Text, di mana teks bisa di-bold, miring, atau diwarnai).
* **Item:** Text Align
    * **Title:** Text Align
    * **Description:** Mengatur perataan visual teks di dalam cell atau form. Pilihannya sama seperti di Word: General, Left (kiri), Center (tengah), Right (kanan), atau Distribute.
* **Item:** Append Only
    * **Title:** Append Only
    * **Description:** Fitur khusus untuk Long Text. Jika diatur ke Yes, Access akan menyimpan riwayat (log) semua teks yang pernah dimasukkan tanpa menghapus teks lamanya.
* **Item:** Show Date Picker
    * **Title:** Show Date Picker
    * **Description:** Menentukan apakah ikon kalender kecil (Date Picker) akan otomatis muncul saat user mengklik kolom bertipe Date/Time, sehingga user bisa memilih tanggal tanpa harus mengetik manual.

## 5. Field Properties (Tab Lookup)
* **Item:** Display Control
    * **Title:** Display Control
    * **Description:** Menentukan bentuk antarmuka input data. Bisa berupa Text Box biasa, List Box yang selalu terbuka, atau Combo Box bergaya dropdown.
* **Item:** Row Source Type
    * **Title:** Row Source Type
    * **Description:** Menentukan dari mana asal pilihan data. Bisa diambil dari tabel/query lain, atau Value List (diketik manual).
* **Item:** Row Source
    * **Title:** Row Source
    * **Description:** Berisi perintah sumber datanya. Bisa berupa perintah SQL (contoh: SELECT ID, Nama FROM Pelanggan) atau teks manual.
* **Item:** Bound Column
    * **Title:** Bound Column
    * **Description:** Menentukan kolom ke-berapa dari dropdown yang nilainya benar-benar akan disimpan secara permanen ke dalam database.
* **Item:** Column Count & Widths
    * **Title:** Column Count & Widths
    * **Description:** Mengatur berapa banyak kolom yang muncul di dropdown dan seberapa lebarnya. Kamu bisa mengatur lebar 0cm untuk menyembunyikan kolom ID.
* **Item:** Limit To List
    * **Title:** Limit To List
    * **Description:** Jika diatur ke Yes, user wajib memilih data yang ada di daftar dan tidak boleh mengetik nilai baru secara manual.

* **Item:** Column Heads
    * **Title:** Column Heads
    * **Description:** Menampilkan judul kolom di baris paling atas pada daftar pilihan (dropdown). Sangat berguna jika dropdown kamu memiliki lebih dari satu kolom agar user tahu persis arti dari setiap data yang ditampilkan.
* **Item:** List Rows
    * **Title:** List Rows
    * **Description:** Menentukan jumlah maksimal baris data yang tampil saat dropdown dibuka, agar daftar pilihan tidak memanjang terlalu jauh ke bawah dan tetap rapi di layar.
* **Item:** List Width
    * **Title:** List Width
    * **Description:** Mengatur lebar total kotak dropdown secara keseluruhan saat diklik atau dibuka oleh user.