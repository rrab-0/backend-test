import { pool } from '../../config/dbConfig.js';

export const createMahasiswa = async (nama, nim, jurusan) => {
  return pool.query(
    'INSERT INTO mahasiswa (nama,nim ,jurusan) VALUES ($1, $2, $3)',
    [nama, nim, jurusan]
  );
};

export const readMahasiswa = async () => {
  return pool.query('SELECT nama, nim, jurusan FROM mahasiswa');
};

export const readMahasiswaByJurusanAndNim = async (jurusan, nim) => {
  return pool.query(
    'SELECT nama, jurusan, nim FROM mahasiswa WHERE jurusan = $1 AND nim = $2',
    [jurusan, nim]
  );
};

export const destroyMahasiswaByJurusanAndNim = async (jurusan, nim) => {
  return pool.query('DELETE FROM mahasiswa WHERE jurusan = $1 AND nim = $2', [
    jurusan,
    nim,
  ]);
};

export const modifyMahasiswa = async (nama, jurusan, nim) => {
  return pool.query(
    'UPDATE mahasiswa SET nama = $1, jurusan = $2, nim = $3 WHERE jurusan = $2 AND nim = $3',
    [nama, jurusan, nim]
  );
};
