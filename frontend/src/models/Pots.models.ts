export interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    createdAt: string;
}

export interface PostContextData {
    posts: Post[] | null;
    isLoading: boolean;
}

export interface newPost {
    title: string;
    content: string;
    author: string;
}