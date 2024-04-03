import express from "express";
import cors from 'cors';
import routerApi from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
routerApi(app);


app.listen(3000);
console.log("Server started on port 3000");