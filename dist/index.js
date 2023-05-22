"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const microBlog_1 = __importDefault(require("./entities/microBlog"));
const databaseRepository_1 = require("./repository/databaseRepository");
async function main() {
    const app = (0, express_1.default)();
    const port = 3000;
    const microBlog = new microBlog_1.default();
    const database = await databaseRepository_1.DatabaseRepository.initialize("./database/data.db");
    let blog_persistance;
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
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.send("Hello, TypeScript!");
    });
    app.get("/get", async (request, response) => {
        try {
            const posts = await blog_persistance.retrieveAllPosts();
            response.status(200).json(posts);
        }
        catch (error) {
            response.status(404).send("Can't find posts in the database");
        }
    });
}
main();
