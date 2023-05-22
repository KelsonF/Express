"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostImplementation = void 0;
class PostImplementation {
    constructor(id, text, likes) {
        this.id = id;
        this.text = text;
        this.likes = likes;
        this.id = id;
        this.text = text;
        this.likes = likes;
    }
    static fromMap(data) {
        const values = Object.values(data);
        return new PostImplementation(values[0], values[1], values[2]);
    }
}
exports.PostImplementation = PostImplementation;
