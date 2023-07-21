import express from 'express';
import cors from 'cors';

import { mahasiswaRouter } from './routes/mahasiswa/index.js';
import { bukuRouter } from './routes/buku/index.js';

const app = express();
// TODO: move port somewhere else (at docker compose maybe)
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'service is up an running.' });
});

app.use('/api/v1/mahasiswa', mahasiswaRouter);
app.use('/api/v1/buku', bukuRouter);

app.listen(PORT, () => {
  console.log(`service listens on http://localhost:${PORT}`);
});
