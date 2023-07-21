import { pool } from '../../config/dbConfig.js';

export const createBook = async (judul, penulis, tempatPenyimpanan) => {
  return pool.query(
    'INSERT INTO buku (judul, penulis, tempat_penyimpanan) VALUES ($1, $2, $3)',
    [judul, penulis, tempatPenyimpanan]
  );
};
