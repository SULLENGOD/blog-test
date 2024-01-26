import { Post } from "../models/post.model"
import samplePosts from "./sampleData"

export const seedData = async () => {
    try{
        await Post.bulkCreate(samplePosts);
        console.log('Successfully seeded data');
    } catch (error) {
        console.error(error)
    }
}