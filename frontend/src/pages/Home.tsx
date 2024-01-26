import { Link } from "react-router-dom";
import PostsList from "../components/PostsList";
import SearchPost from "../components/SearchPost";
import { PostContext } from "../context/PostsContext";
import { usePosts } from "../hooks/usePosts";

const Home = () => {
  const { posts, isLoading } = usePosts("");
  return (
    <PostContext.Provider value={{ posts, isLoading }}>
      <div>
        <div className="p-2">
          <div className="p-3 d-flex justify-content-between">
            Posts:
            <Link to="/posts/create">
              <button className="btn btn-primary">Create</button>
            </Link>
          </div>
          <hr />
          <PostsList />
        </div>
        <div>
          <div className="p-3">Search:</div>
          <hr />
          <SearchPost />
        </div>
      </div>
    </PostContext.Provider>
  );
};

export default Home;
