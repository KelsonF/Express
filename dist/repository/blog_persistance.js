"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroBlogPersistente = void 0;
const postImplementation_1 = require("../entities/postImplementation");
class MicroBlogPersistente {
    constructor(database) {
        this.database = database;
    }
    async createPost(post) {
        await this.database.exec(`INSERT INTO POST(POST_ID,POST_TEXT,LIKES) VALUES('${post.id}','${post.text}', ${post.likes})`);
    }
    async retrievePost(id) {
        const data = await this.database.get(`SELECT * FROM POST WHERE POST_ID = '${id}'`);
        if (data == undefined) {
            throw new Error('PostImplementation inexistente');
        }
        else {
            const post = postImplementation_1.PostImplementation.fromMap(data);
            return post;
        }
    }
    async updatePost(updatedPost) {
        const post = await this.retrievePost(updatedPost.id);
        await this.database.exec(`UPDATE POST SET POST_TEXT = '${updatedPost.text}', LIKES = ${updatedPost.likes} WHERE POST_ID = '${updatedPost.id}'`);
    }
    async removerPost(id) {
        await this.database.exec(`DELETE FROM POST WHERE POST_ID = '${id}'`);
    }
    async retrieveAllPosts() {
        const data = await this.database.all(`SELECT * FROM POST`);
        if (data == undefined) {
            throw new Error('PostImplementation inexistente');
        }
        else {
            const values = data;
            const lista = values.map((value) => postImplementation_1.PostImplementation.fromMap(value));
            return lista;
        }
    }
}
exports.MicroBlogPersistente = MicroBlogPersistente;
