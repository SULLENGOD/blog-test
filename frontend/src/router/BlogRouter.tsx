import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import PostContent from "../components/PostContent"
import CreatePost from "../components/CreatePost"

const BlogRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<PostContent />}/>
        <Route path="/posts/create" element={<CreatePost />}/>
    </Routes>
  )
}

export default BlogRouter