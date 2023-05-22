"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MicroBlog {
    constructor() {
        this._posts = [];
    }
    create(post) {
        this._posts.push(post);
        return post;
    }
    retrieve(id) {
        const post = this._posts.find((post) => post.id === id);
        return post ? post : null;
    }
    update(updatedPost) {
        const index = this._posts.findIndex((post) => post.id === updatedPost.id);
        if (index !== -1) {
            this._posts[index] = updatedPost;
            return updatedPost;
        }
        else {
            return null;
        }
    }
    delete(id) {
        const postIndex = this._posts.findIndex((post) => post.id === id);
        if (postIndex !== -1) {
            const deleted = this._posts.splice(postIndex, 1);
            return deleted[0];
        }
        else {
            return null;
        }
    }
    retrieveAll() {
        return this._posts;
    }
}
exports.default = MicroBlog;
