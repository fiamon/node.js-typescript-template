import express, { Application, Request, Response } from 'express';
import { env } from './env';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
});
