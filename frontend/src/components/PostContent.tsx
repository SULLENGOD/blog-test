import { useParams } from "react-router-dom"
import { usePost } from "../hooks/usePost"

const PostContent = () => {
    const {id} = useParams()
    const {post, IsLoading} = usePost(id)

  return (
    <div>PostContent:
        <div className="p-3">
        {
            IsLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>{post?.title}</h1>
                    <p>{post?.content}</p>
                    <p>{post?.author}</p>
                    <p>{post?.createdAt}</p>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default PostContent