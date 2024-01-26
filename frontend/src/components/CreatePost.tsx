import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { createPost } from "../services/createPost";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { title, content, author, handleChange } = useForm({
    title: "",
    content: "",
    author: "",
  });

  const submitPost = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const post = { title, content, author };
    const res = await createPost(post);
    if (!res.ok) {
      console.log(res);
    } else {
      alert("Succefull");
      navigate("../");
    }
  };

  return (
    <div className="p-3">
      CreatePost:
      <hr />
      <div className="p-5">
        <form onSubmit={submitPost}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              className="form-control"
              id="title"
              placeholder="Some title..."
            />
            <label htmlFor="tilte">Title</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              name="content"
              value={content}
              onChange={handleChange}
              className="form-control"
              id="content"
              placeholder="Some content..."
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="content">Content...</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="author"
              value={author}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="author"
              placeholder="Some title..."
            />
            <label htmlFor="author">Author</label>
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
