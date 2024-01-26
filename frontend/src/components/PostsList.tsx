import { useContext } from "react"
import { PostContextData } from "../models/Pots.models"
import { PostContext } from "../context/PostsContext"
import PostCard from "./PostCard";

const PostsList = () => {
    const { posts } = useContext<PostContextData>(PostContext);
  return (
    <div className="p-3">
        <ul>
            {
                posts?.map((post, index) => (
                    <PostCard post={post} key={index} />
                ))
            }
        </ul>
    </div>
  )
}

export default PostsList