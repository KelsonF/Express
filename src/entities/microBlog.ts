import Post from "../models/post";

export default class MicroBlog {
  private _posts: Post[];

  constructor() {
    this._posts = [];
  }

  create(post: Post): Post {
    this._posts.push(post);

    return post;
  }

  retrieve(id: string): Post | null {
    const post = this._posts.find((post) => post.id === id);
    return post ? post : null;
  }

  update(updatedPost: Post): Post | null {
    const index = this._posts.findIndex((post) => post.id === updatedPost.id);

    if (index !== -1) {
      this._posts[index] = updatedPost;
      return updatedPost;
    } else {
      return null;
    }
  }

  delete(id: string): Post | null {
    const postIndex = this._posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      const deleted = this._posts.splice(postIndex, 1);
      return deleted[0];
    } else {
      return null;
    }
  }

  retrieveAll(): Post[] {
    return this._posts;
  }
}
