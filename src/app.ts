import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import postsRouter from './router/posts.router'

const app: Application = express();

app.set('port', 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/v1/posts', postsRouter)

export default app;