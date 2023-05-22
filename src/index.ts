import express, { Request, Response, Application } from 'express';
import MicroBlog from './entities/microBlog';

const app: Application = express();
const port = 3000;

const microBlog: MicroBlog = new MicroBlog();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.get('/get', async(request: Request, response: Response) => {

})
