-- DROP TABLE if EXISTS mahasiswa;
-- DROP TABLE if EXISTS buku;

CREATE TABLE mahasiswa(
	nama VARCHAR(50) NOT NULL,
	nim INT NOT NULL,
	jurusan VARCHAR(50),
	id SERIAL PRIMARY KEY
);

CREATE TABLE buku(
	judul VARCHAR(200) NOT NULL,
	penulis VARCHAR(50) NOT NULL,
	kuantitas INT NOT NULL,
	tempat_penyimpanan VARCHAR(30) NOT NULL,
	id SERIAL PRIMARY KEY
);

-- CREATE TABLE peminjaman(
-- 	peminjam VARCHAR(50) NOT NULL,
-- 	judul,
-- 	tanggal_peminjaman,
-- 	batas_pengambilan,
-- 	tanggal_pengambilan
-- );

