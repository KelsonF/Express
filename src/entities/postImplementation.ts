import Post from "../models/post";
import {v1 as  uuidv1} from 'uuid';
export class PostImplementation implements Post {
    id: string;
    text: string;
    likes: number;

    constructor( text: string) {
        this.id = uuidv1();
        this.text = text;
        this.likes = 0;        
    }
}