import { createBook } from '../../model/buku/index.js';

export const addBuku = async (req, res) => {
  try {
    const { judul, penulis, tempatPenyimpanan } = req.body;
    const message = `Buku dengan judul ${judul}, penulis ${penulis}, berhasil ditambahkan pada ${tempatPenyimpanan}`;

    await createBook(judul, penulis, tempatPenyimpanan);
    res.status(201).json({
      message: `${message} berhasil ditambahkan.`,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
