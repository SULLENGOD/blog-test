import { useEffect, useState } from "react"
import { newPost } from "../models/Pots.models"
import { createPost } from "../services/createPost";

export const useNewPost = (body: newPost) => {
    const [response, setResponse] = useState<Response | null>(null);
    const [error, setError] = useState<string | null>('');

    useEffect(() => {
        const newPost = async() => {
            try {
                const res = await createPost(body);
                setResponse(res);
                setError(null);
            } catch (error) {
                console.error(error);
                setError('Something wrong...');
            }
        }
        newPost();
    },[body]);

    return {
        response,
        error
    }
}