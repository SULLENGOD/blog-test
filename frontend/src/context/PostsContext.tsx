import { createContext } from "react";
import { PostContextData } from "../models/Pots.models";


export const PostContext = createContext<PostContextData>({
    posts: null,
    isLoading: true
});