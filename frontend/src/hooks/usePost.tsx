import { useEffect, useState } from "react";
import { Post } from "../models/Pots.models"
import { fetchPost } from "../services/fetchPost";

export const usePost = (id: string | undefined) => {
    const [post, setPost] = useState<Post | null>(null);
    const [IsLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPost = async() => {
            try {
                const res = await fetchPost(id);
                setPost(res);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getPost();
    }, [id]);

    return {
        post,
        IsLoading
    }
}