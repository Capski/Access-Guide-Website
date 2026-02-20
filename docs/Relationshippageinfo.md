# Hover Content Mapping: Relationships (relationships.html)

**Instruksi untuk AI Code Writer:** Gunakan struktur di bawah ini untuk mengisi atribut `data-title` dan `data-desc` pada setiap item interaktif (`.interactive-area` dan `.interact-hover`) di halaman Relationships.

## 1. Design View: Table Fields & Keys (Elemen Kunci Tabel)
* **Item:** Primary Key (ID Anggota / Kode Buku)
    * **Title:** Primary Key (Kunci Utama)
    * **Description:** Identifikasi unik untuk setiap baris data di dalam tabel. Nilai *Primary Key* tidak boleh kosong dan tidak boleh ada yang kembar.
* **Item:** Foreign Key (ID Anggota FK / Kode Buku FK)
    * **Title:** Foreign Key (Kunci Tamu)
    * **Description:** Kolom yang menghubungkan tabel "anak" ke tabel "induk". Kolom ini berisi nilai yang merujuk langsung ke *Primary Key* di tabel lain untuk menjalin relasi.

## 2. Design View: Relationship Lines (Garis Relasi)
* **Item:** Line Hit Area (Anggota -> Peminjaman)
    * **Title:** Relationship Line (Garis Relasi)
    * **Description:** Garis yang menghubungkan dua tabel (Primary Key ke Foreign Key). Garis ini secara visual menunjukkan bahwa data di kedua tabel tersebut saling terkait.
* **Item:** Line Hit Area (Buku -> Peminjaman)
    * **Title:** Relationship Line (Garis Relasi)
    * **Description:** Garis yang menghubungkan dua tabel (Primary Key ke Foreign Key). Garis ini secara visual menunjukkan bahwa data di kedua tabel tersebut saling terkait.

## 3. Edit View: Integrity Rules (Aturan Integritas Data)
* **Item:** Enforce Referential Integrity Checkbox
    * **Title:** Enforce Referential Integrity
    * **Description:** Aturan "Polisi Data" yang menjaga konsistensi. Mencegah kamu memasukkan data "anak" (Foreign Key) yang tidak punya "induk" (Primary Key) yang sah. Contoh: Tidak boleh ada "Pesanan" untuk "Pelanggan" yang datanya belum terdaftar.
* **Item:** Cascade Update Related Fields Checkbox
    * **Title:** Cascade Update Related Fields
    * **Description:** Jika kamu mengubah ID di tabel induk, semua data terkait di tabel anak akan otomatis ikut berubah. Kamu tidak perlu mengedit data manual satu per satu.
* **Item:** Cascade Delete Related Records Checkbox
    * **Title:** Cascade Delete Related Records
    * **Description:** Hati-hati! Jika data di tabel induk dihapus (misal: Pelanggan dihapus), maka semua data transaksi milik pelanggan tersebut di tabel anak akan otomatis terhapus bersih.

## 4. Edit View: Relationship Type (Jenis Hubungan)
* **Item:** Relationship Type Display
    * **Title:** Relationship Type: One-to-Many
    * **Description:** Menunjukkan bahwa satu baris di Tabel Induk bisa terhubung ke banyak baris di Tabel Anak. Contoh: 1 Customer (Satu) bisa punya Banyak Order (Many). Ini adalah jenis relasi yang paling umum digunakan.