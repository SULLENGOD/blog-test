import { useEffect, useState } from "react"
import { fethcPosts } from "../services/fetchPosts";
import { Post } from "../models/Pots.models";

export const usePosts = (query: string | null) => {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPosts = async() => {
            try {
                const res = await fethcPosts(query);
                setPosts(res);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        getPosts();
    }, [query]);

    return {
        posts,
        isLoading
    }
}