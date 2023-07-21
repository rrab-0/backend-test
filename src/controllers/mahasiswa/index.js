import { validateMahasiswaExistence } from './utils/validateMahasiswa.js';
import {
  createMahasiswa,
  readMahasiswaByJurusanAndNim,
  readMahasiswa,
  destroyMahasiswaByJurusanAndNim,
  modifyMahasiswa,
} from '../../model/mahasiswa/index.js';

export const addMahasiswa = async (req, res) => {
  try {
    const { nama, nim, jurusan } = req.body;
    const isEmpty = await validateMahasiswaExistence(jurusan, nim);
    const message = `Mahasiswa dengan nama ${nama}, NIM ${nim}, dari jurusan ${jurusan}`;

    if (isEmpty) {
      await createMahasiswa(nama, nim, jurusan);
      res.status(201).json({
        message: `${message} berhasil ditambahkan.`,
      });
    } else {
      res.status(409).json({
        message: `${message} sudah terdaftar`,
      });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getMahasiswaByJurusanAndNim = async (req, res) => {
  try {
    const { jurusan, nim } = req.query;
    const isEmpty = await validateMahasiswaExistence(jurusan, nim);

    if (!isEmpty) {
      let mahasiswa = await readMahasiswaByJurusanAndNim(jurusan, nim);
      mahasiswa = {
        nama: mahasiswa.rows[0].nama,
        jurusan: mahasiswa.rows[0].jurusan,
        nim: mahasiswa.rows[0].nim,
      };

      res.status(200).json({
        nama: mahasiswa.nama,
        jurusan: mahasiswa.jurusan,
        nim: mahasiswa.nim,
      });
    } else {
      res.status(404).json({ message: 'Mahasiswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await readMahasiswa();
    const empty = 0;

    if (mahasiswa.rows[0].length === empty) {
      res.status(404).json({ message: 'Tidak ada mahasiswa yang terdaftar.' });
    } else {
      res.status(200).json({ daftarMahasiswa: mahasiswa.rows[0] });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateMahasiswa = async (req, res) => {
  try {
    const { jurusan, nim } = req.query;
    const isEmpty = await validateMahasiswaExistence(jurusan, nim);
    let mahasiswa = await readMahasiswaByJurusanAndNim(jurusan, nim);

    if (!isEmpty) {
      let { nama, jurusan, nim } = req.body;
      mahasiswa = {
        nama: mahasiswa.rows[0].nama,
        jurusan: mahasiswa.rows[0].jurusan,
        nim: mahasiswa.rows[0].nim,
      };

      if (nama === undefined) {
        nama = mahasiswa.nama;
      }
      if (jurusan === undefined) {
        jurusan = mahasiswa.jurusan;
      }
      if (nim === undefined) {
        nim = mahasiswa.nim;
      }

      await modifyMahasiswa(nama, jurusan, nim);
      res.status(200).json({
        message: 'Mahasiswa berhasil diupdate.',
      });
    } else {
      res.status(404).json({ message: 'Mahasiswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deleteMahasiswaByJurusanAndNim = async (req, res) => {
  try {
    const { jurusan, nim } = req.query;
    const isEmpty = await validateMahasiswaExistence(jurusan, nim);

    if (!isEmpty) {
      await destroyMahasiswaByJurusanAndNim(jurusan, nim);
      res.status(200).json({
        message: 'Mahasiswa berhasil dihapus.',
      });
    } else {
      res.status(404).json({ message: 'Mahasiswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
