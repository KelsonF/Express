import { Database } from "sqlite";
import { PostImplementation } from "../entities/postImplementation";

export class MicroBlogPersistente {
    database!: Database;

    constructor(database: Database) {
        this.database = database;
    }

    async createPost(post: PostImplementation) {
        await this.database.exec(`INSERT INTO POST(POST_ID,POST_TEXT,LIKES) VALUES('${post.id}','${post.text}', ${post.likes})`);
    }

    async retrievePost(id: string) {
        const data: Object | undefined = await this.database.get(`SELECT * FROM POST WHERE POST_ID = '${id}'`)

        if (data == undefined) {
            throw new Error('PostImplementation inexistente')
        } else {
            const post: PostImplementation = PostImplementation.fromMap(data);
            return post
        }
    }

    async updatePost(updatedPost: PostImplementation) {
        const post: PostImplementation = await this.retrievePost(updatedPost.id);

        await this.database.exec(`UPDATE POST SET POST_TEXT = '${updatedPost.text}', LIKES = ${updatedPost.likes} WHERE POST_ID = '${updatedPost.id}'`);
    }

    async removerPost(id: string) {
        await this.database.exec(`DELETE FROM POST WHERE POST_ID = '${id}'`)
    }

    async retrieveAllPosts() {
        const data: Object | undefined = await this.database.all(`SELECT * FROM POST`);
        
        if (data == undefined) {
            throw new Error('PostImplementation inexistente')
        } else {
            const values = <Array<Object>>data;
            const lista: Array<PostImplementation> = values.map((value) => PostImplementation.fromMap(value))
            return lista;
        }
    }
}