import express, { Request, Response, Application } from "express";
import MicroBlog from "./entities/microBlog";
import { DatabaseRepository } from "./repository/databaseRepository";
import { MicroBlogPersistente } from "./repository/blog_persistance";

async function main() {
  const app: Application = express();
  const port = 3000;

  const microBlog: MicroBlog = new MicroBlog();
  const database: DatabaseRepository = await DatabaseRepository.initialize(
    "./database/data.db"
  );
  let blog_persistance: MicroBlogPersistente;

  microBlog.create({
    id: "1",
    text: "Kelson",
    likes: 0,
  });

  microBlog.create({
    id: "2",
    text: "Eduardo",
    likes: 0,
  });

  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript!");
  });

  app.get("/get", async (request: Request, response: Response) => {
    try {
      const posts = await blog_persistance.retrieveAllPosts();

      response.status(200).json(posts);
    } catch (error) {
      response.status(404).send("Can't find posts in the database");
    }
  });
}
main();
