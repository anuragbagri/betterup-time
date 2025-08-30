import express from 'express';
import v1Routes from './routes/V1';

const app = express();
app.post("/api/v1" , v1Routes);

