export const fethcPosts = async(query: string | null) => {
    const url = `http://localhost:3000/v1/posts?${query}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}