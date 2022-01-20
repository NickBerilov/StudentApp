import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const app: Application = express();

const port: number = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
});