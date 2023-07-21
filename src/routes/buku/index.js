import express from 'express';
import {
  addBuku,
  //   deleteMahasiswaByJurusanAndNim,
  //   getMahasiswa,
  //   getMahasiswaByJurusanAndNim,
  //   updateMahasiswa,
} from '../../controllers/buku/index.js';

export const bukuRouter = express.Router();

bukuRouter.post('/', addBuku);
// bukuRouter.get('/', getMahasiswaByJurusanAndNim);
// bukuRouter.get('/', getMahasiswa);
// bukuRouter.patch('/', updateMahasiswa);
// bukuRouter.delete('/', deleteMahasiswaByJurusanAndNim);
