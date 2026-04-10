import { Post } from "../helpers/index.js"

export const createPosts = (body) => {
    Post('posts', body);
}