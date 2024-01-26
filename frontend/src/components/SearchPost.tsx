import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";

const SearchPost = () => {
  const [searchType, setSearchType] = useState("content");
  const { query, handleChange } = useForm({
    query: "",
  });
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
  };
  const fullQuery = `${searchType}=${query}`;

  const { posts } = usePosts(fullQuery);

  return (
    <div>
      <form action=".">
        <div className="p-3">
          <input
            type="text"
            className="form-control"
            id="query"
            name="query"
            onChange={handleChange}
            value={query}
            placeholder="post 1..."
          />
        </div>
        <div className="d-flex gap-2 p-3">
          <div>
            <input
              type="radio"
              value="author"
              id="radioAuthor"
              checked={searchType === "author"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radioAuthor" className="ms-2">
              Author
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="title"
              id="radioTitle"
              checked={searchType === "title"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radioTitle" className="ms-2">
              Title
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="content"
              id="radioContent"
              checked={searchType === "content"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radioContent" className="ms-2">
              Content
            </label>
          </div>
        </div>
      </form>
      <div className="p-3">
        {query == "" ? (
          <></>
        ) : (
          posts?.map((post, index) => <PostCard post={post} key={index} />)
        )}
      </div>
    </div>
  );
};

export default SearchPost;
