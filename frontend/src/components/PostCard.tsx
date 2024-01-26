import { FC } from "react";
import { Post } from "../models/Pots.models";
import { Link } from "react-router-dom";
import { truncateText } from "../utils/truncateContent";
import './styles/PostCard.css'

const PostCard: FC<{ post: Post }> = ({ post }) => {
  const text = truncateText(post.content);
  return (
    <div className="div-link p-3">
      <Link to={`/post/${post.id}`} className="link">
        <div>
          <h1>{post.title}</h1>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
