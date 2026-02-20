## **1\. Homepage: Pengenalan**

### **Apa itu Microsoft Access?**

Microsoft Access adalah aplikasi database relasional yang memungkinkan pengguna untuk memasukkan, mengelola, dan memanipulasi data dalam jumlah besar secara efisien. Berbeda dengan Excel yang fokus pada kalkulasi angka, Access fokus pada pengelolaan informasi yang saling terhubung.

### **Konsep Dasar Database**

Database adalah sekumpulan data yang tersimpan dalam berbagai tabel yang saling berelasi. Struktur dasarnya terdiri dari:

* **Table:** Tempat penyimpanan data utama.  
* **Field (Kolom):** Atribut atau kategori data (misal: Nama, Alamat).  
* **Record (Baris):** Satu kesatuan data utuh (misal: data satu orang siswa lengkap).

### **Perbedaan Database (Access) vs Spreadsheet (Excel)**

Penting bagi siswa untuk memahami kapan menggunakan Access atau Excel:

| Kriteria | Database (Access) | Spreadsheet (Excel) |
| :---- | :---- | :---- |
| **Kunci Data** | Memiliki **Primary Key** & **Foreign Key** untuk identifikasi unik. | Tidak ada sistem kunci (key) yang mengikat data. |
| **Isi** | Terdiri dari atribut dan data record. | Terdiri dari kolom dan baris bebas. |
| **Ukuran** | Kapasitas penyimpanan jauh lebih besar (relatif tidak terbatas). | Kapasitas terbatas pada jumlah baris per sheet. |
| **Relasi** | Relasi antar **Tabel** (menjaga konsistensi data). | Relasi antar **Sheet** (rawan error). |
| **Validasi** | Terdapat **Validation Rules** ketat saat input. | Tidak ada aturan validasi data yang ketat. |
| **Output** | Bisa menghasilkan **Form** dan **Report** profesional. | Input dan Output berada di tampilan yang sama (tabel). |

---

## **2\. Tabel (Tables)**

Tabel adalah pondasi dari database Access. Pembuatan tabel sebaiknya dilakukan melalui **Design View** untuk kontrol penuh.

### **Tipe Data (Data Types)**

Setiap field harus memiliki tipe data yang sesuai agar efisien:

* **Short Text:** Teks pendek (huruf/angka) maksimal 255 karakter. Cocok untuk Nama, Nomor Telepon (karena tidak dihitung).  
* **Long Text:** Teks panjang/catatan detail. Kapasitas hingga 1 GB (misal: Deskripsi Produk).  
* **Number:** Angka untuk perhitungan matematis.  
* **Large Number:** Angka bulat (integer) bernilai sangat besar.  
* **Date/Time:** Menyimpan tanggal dan waktu.  
* **Date/Time Extended:** Menyimpan tanggal dan waktu yang lebih presisi  
* **Currency:** Angka mata uang (Rp/$) dengan standar 2 desimal, akurat untuk keuangan.  
* **AutoNumber:** Angka urut otomatis yang tidak bisa diisi manual (biasanya untuk Primary Key).  
* **Yes/No (Boolean):** Data logika yang hanya punya 2 pilihan (Ya/Tidak, Benar/Salah).  
* **OLE Object:** Menyematkan objek dari aplikasi lain (Word/Excel).  
* **Hyperlink:** Link ke alamat website/URL.  
* **Attachment:** Menyimpan file lampiran (gambar, dokumen).  
* **Calculated:** Field hasil perhitungan otomatis dari field lain.  
* **Lookup Wizard…:** Membuat relasi secara manual

![][image1]

### **Field Properties (Properti Field)**

Di bagian bawah Design View, terdapat pengaturan properti untuk mengontrol perilaku data:

* **Field Size:** Membatasi jumlah karakter maksimum (misal: di-set 10 agar tidak boros memori).  
* **Format:** Mengatur tampilan data di layar (misal: Long Date tampil sebagai "Thursday, November 12, 2015").  
  * *Simbol Format:* \> (Huruf Besar Semua), \< (Huruf Kecil Semua).  
* **Input Mask:** Pola panduan input agar seragam. Contoh: LL-001 (Wajib 2 Huruf diikuti 3 Angka).  
* **Caption:** Judul alias untuk field (misal: field Tgl\_Lhr diberi caption "Tanggal Lahir" agar lebih rapi di Form).  
* **Default Value:** Nilai otomatis yang muncul jika user tidak mengisi apa-apa.  
* **Validation Rule:** Syarat logika agar data dianggap sah.  
  * *Presence Check:* Is Not Null (Data tidak boleh kosong).  
  * *Range Check:* \>=0 and \<100 (Nilai harus di antara 0-100).  
* **Validation Text:** Pesan error yang muncul jika user melanggar aturan Validation Rule.  
* **Required:** Apakah field ini **wajib** diisi? (Yes/No) .  
* **Indexed:** Membuat indeks untuk mempercepat pencarian data, namun bisa memperlambat proses update.

### **Lookup Properties (Properti Lookup)**

Bagian ini mengatur tampilan input data, apakah berupa kotak teks biasa atau menu pilihan.

* **Display Control**: Menentukan bentuk antarmuka untuk input data.  
  * *Text Box*: Kotak input standar (default).  
  * *List Box*: Menampilkan daftar pilihan yang selalu terbuka (memakan tempat di layar).  
  * *Combo Box*: Menampilkan kotak dengan panah *dropdown* (lebih hemat tempat).  
* **Row Source Type**: Menentukan dari mana asal data pilihan tersebut.  
  * *Table/Query*: Data diambil dari tabel atau query lain (paling sering digunakan untuk relasi antar tabel).  
  * *Value List*: Data diketik manual langsung di properti ini (misal: "Pria"; "Wanita").  
  * *Field List*: Mengambil nama-nama field dari sebuah tabel.  
* **Row Source**: Perintah spesifik atau isi datanya.  
  * Jika *Table/Query*: Berisi query SQL (misal: `SELECT ID, Nama FROM Pelanggan`).  
  * Jika *Value List*: Berisi daftar teks yang dipisah titik koma (misal: "Jakarta";"Bandung";"Surabaya").  
* **Bound Column**: Menentukan kolom ke-berapa yang nilainya benar-benar **disimpan** ke dalam database.  
  * *Contoh*: Jika Combo Box menampilkan "ID" (Kolom 1\) dan "Nama Barang" (Kolom 2), biasanya kita set Bound Column ke **1** agar ID yang tersimpan, meskipun user melihat Nama Barang.  
* **Column Count**: Jumlah kolom yang ingin ditampilkan dalam daftar *dropdown*.  
* **Column Widths**: Mengatur lebar masing-masing kolom dalam daftar.  
  * *Tips*: Gunakan nilai **0** (nol) untuk menyembunyikan kolom ID/Bound Column agar tampilan lebih rapi bagi user (misal: `0cm; 3cm`).  
* **List Rows**: Jumlah maksimal baris data yang tampil saat *dropdown* dibuka (agar list tidak terlalu panjang ke bawah).  
* **List Width**: Lebar total kotak *dropdown* saat diklik.  
* **Limit To List**: Aturan validasi input.  
  * *Yes*: User **wajib** memilih salah satu dari daftar (tidak boleh ngetik sendiri).  
  * *No*: User boleh memilih dari daftar atau mengetik data baru yang belum ada.  
* **Allow Multiple Values**: Apakah user boleh memilih lebih dari satu item sekaligus? (Biasanya digunakan untuk keperluan khusus, hasilnya akan menjadi *multivalued field*).  
* **Allow Value List Edits**: Apakah user diizinkan mengedit isi *list* tersebut secara langsung saat sedang mengisi form? (Yes/No).

---

## **3\. Relationships (Hubungan)**

### Topic: Relationships Window
1. **Visual Element: Join Line**
   - Title: "Relationship Line"
   - Description: "Garis yang menghubungkan dua tabel (Primary Key ke Foreign Key). Menunjukkan bahwa data di kedua tabel saling terkait."

2. **Visual Element: '1' symbol**
   - Title: "Relationship Type: One-to-Many"
   - Description: "Simbol '1' dan '∞' menunjukkan bahwa satu baris di Tabel A bisa terhubung ke banyak baris di Tabel B (contoh: 1 Customer punya Banyak Order)."

3. **Checkbox: Enforce Referential Integrity**
   - Title: "Enforce Referential Integrity"
   - Description: "Aturan penjaga data. Mencegah kamu memasukkan data 'anak' (Foreign Key) yang tidak punya 'induk' (Primary Key) yang sah."

4. **Checkbox: Cascade Update**
   - Title: "Cascade Update Related Fields"
   - Description: "Jika kamu mengubah ID di tabel induk, semua data terkait di tabel anak akan otomatis ikut berubah. Tidak perlu edit manual satu-satu."

5. **Checkbox: Cascade Delete**
   - Title: "Cascade Delete Related Records"
   - Description: "Hati-hati! Jika kamu menghapus data induk (misal: Customer), semua data anak (Order) milik customer tersebut akan otomatis terhapus bersih."

### **Komponen Utama Relationship:**

1. **Enforce Referential Integrity:**  
   Aturan "Polisi Data" yang menjaga konsistensi. Jika dicentang, Anda tidak boleh memasukkan data di tabel anak (Foreign Key) yang tidak ada di tabel induk (Primary Key). Contoh: Tidak boleh ada "Pesanan" untuk "Pelanggan" yang datanya belum terdaftar.  
2. **Cascade Update Related Fields:**  
   Jika data Primary Key di tabel induk berubah (misal: ID Pelanggan ganti), maka semua data di tabel anak akan otomatis ikut berubah/ter-update.  
3. **Cascade Delete Related Records:**  
   Jika data di tabel induk dihapus (misal: Pelanggan dihapus), maka semua data transaksi milik pelanggan tersebut di tabel anak akan otomatis terhapus bersih.

*Jenis Relasi:* Umumnya **One-to-Many** (Satu pelanggan bisa punya banyak pesanan).

---

## **4\. Form (Formulir)**

Form adalah antarmuka (interface) agar user bisa menginput data dengan mudah tanpa melihat tabel mentah. Form berfungsi sebagai input sekaligus output.

### **4 Tipe Form Populer:**

1. **Form (Standard):** Menampilkan satu record per layar. Tampilannya sederhana dan langsung jadi.  
2. **Split Form:** Membagi layar menjadi dua bagian. Bagian atas menampilkan Form (satu record), bagian bawah menampilkan Datasheet (tabel list). Ini memudahkan pencarian data sekaligus pengeditan detail.  
3. **Multiple Items Form:** Mirip tabel biasa, tetapi bisa dikustomisasi (diberi tombol, warna, dll). Menampilkan banyak record sekaligus dalam satu layar (continuous form).  
4. **Navigation Form:** Form khusus yang berfungsi sebagai "Menu Utama" atau dashboard. Berisi tab/tombol untuk membuka form atau report lain, membuat aplikasi Access terlihat seperti website profesional.

*Fitur Tambahan Form:*

* **Command Button:** Tombol aksi untuk Save, Delete, atau Print Record.  
* **Calculated Control:** Kotak teks berisi rumus, misal \= \[Item Price\] \* \[Quantity\] untuk menghitung subtotal langsung di layar.

---

## **5\. Query (Kueri)**

Query adalah "pertanyaan" atau perintah yang kita kirim ke database untuk memanipulasi data. Query jauh lebih fleksibel daripada tabel.

### **Cara Membuat Query:**

* **Query Wizard:** Panduan langkah-demi-langkah (otomatis) untuk query sederhana.  
* **Query Design:** Tampilan manual (grid) untuk menyusun logika query yang kompleks (Filter, Sort, Rumus).

### **Komponen Query Design:**

* **Field:** Kolom data yang ingin ditampilkan.  
* **Table:** Asal tabel data tersebut.  
* **Sort:** Mengurutkan data (Ascending A-Z / Descending Z-A).  
* **Show:** Checkbox untuk menyembunyikan/menampilkan kolom.  
* **Criteria:** Filter data. Contoh: Ketik \="Jakarta" di bawah kolom Kota untuk hanya menampilkan data Jakarta.  
* **Or:** Baris di bawah criteria untuk logika "ATAU" (salah satu syarat terpenuhi).

### **Jenis-Jenis Action Query (Query Aksi):**

1. **Select Query:** Hanya menampilkan data (default).  
2. **Update Query:** Mengubah data secara massal. (Contoh: Naikkan semua harga barang sebesar 10%).  
3. **Delete Query:** Menghapus data berdasarkan kriteria tertentu.  
4. **Append Query:** Menambahkan/menyalin data dari satu tabel ke tabel lain.  
5. **Make Table Query:** Membuat tabel baru yang berisi hasil dari query yang dijalankan.

### **Query Lanjutan:**

* **Crosstab Query:** Meringkas data dalam bentuk matriks (baris dan kolom). Mirip PivotTable di Excel.  
  * *Syarat:* Harus menentukan **Row Heading** (Judul Baris), **Column Heading** (Judul Kolom), dan **Value** (Nilai yang dihitung).  
* **Totals (Group By):** Fitur untuk menghitung statistik (Sum, Count, Avg, Min, Max).  
  * *Contoh:* Menghitung total penjualan per Salesman.  
* **Parameter Query:** Query yang "bertanya" kepada user sebelum berjalan.  
  * *Caranya:* Ketik teks dalam kurung siku \[...\] di baris Criteria.  
  * *Contoh:* Di kolom \[Nama\], tulis criteria \[Masukkan Nama Siswa\]. Saat dijalankan, akan muncul popup box meminta input nama.

---

## **6\. Reports (Laporan)**

Report adalah hasil akhir data yang siap dicetak (Hardcopy) atau diekspor (PDF).

* **Fungsi Utama:** Sebagai Output resmi.  
* **Sumber Data:** Bisa diambil langsung dari Tabel atau dari Query (jika butuh data yang sudah diolah/difilter).  
* **Fitur Report:**  
  * **Grouping & Sorting:** Mengelompokkan data (misal: Laporan Penjualan dikelompokkan per Bulan).  
  * **Calculations:** Menambahkan Grand Total, Subtotal, atau Pajak di bagian Footer report menggunakan rumus seperti \=Sum(\[Total\]).