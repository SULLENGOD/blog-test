import { newPost } from "../models/Pots.models";

export const createPost = async (body: newPost) => {
    const url = 'http://localhost:3000/v1/posts/';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });

    return res;
}