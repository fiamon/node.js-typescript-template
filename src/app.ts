import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

export default app;
