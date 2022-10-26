import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`🍁 Server started at http://localhost:${port}`));
