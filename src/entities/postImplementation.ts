import Post from "../models/post";
import { v1 as uuidv1 } from "uuid";

export class PostImplementation implements Post {
  constructor(public id: string, public text: string, public likes: number) {
    this.id = id;
    this.text = text;
    this.likes = likes;
  }

  static fromMap(data: Object): Post {
    const values: any[] = Object.values(data);

    return new PostImplementation(values[0], values[1], values[2]);
  }
}
