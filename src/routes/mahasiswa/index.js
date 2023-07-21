import express from 'express';
import {
  addMahasiswa,
  deleteMahasiswaByJurusanAndNim,
  getMahasiswa,
  getMahasiswaByJurusanAndNim,
  updateMahasiswa,
} from '../../controllers/mahasiswa/index.js';

export const mahasiswaRouter = express.Router();

mahasiswaRouter.post('/', addMahasiswa);
mahasiswaRouter.get('/', getMahasiswaByJurusanAndNim);
mahasiswaRouter.get('/', getMahasiswa);
mahasiswaRouter.patch('/', updateMahasiswa);
mahasiswaRouter.delete('/', deleteMahasiswaByJurusanAndNim);
