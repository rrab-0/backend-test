import { readMahasiswaByJurusanAndNim } from '../../../model/mahasiswa/index.js';

export const validateMahasiswaExistence = async (jurusan, nim) => {
  const mahasiswa = await readMahasiswaByJurusanAndNim(jurusan, nim);
  const empty = undefined;
  const emptyRows = 0;

  if (mahasiswa.rows === empty || mahasiswa.rows.length === emptyRows) {
    return true;
  } else {
    return false;
  }
};
