export const fetchPost = async(id: string | undefined) => {
    const url = `http://localhost:3000/v1/posts/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}