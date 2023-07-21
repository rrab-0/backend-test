import express from 'express';
import cors from 'cors';

const app = express();
// TODO: move port somewhere else (at docker compose maybe)
const PORT = 8080;

app.use(express.json());
