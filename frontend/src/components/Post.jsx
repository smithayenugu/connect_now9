import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { useContext, useState, useEffect } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [reactions, setReactions] = useState(post.reactions);
  const [hasReacted, setHasReacted] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleReact = () => {
    if (hasReacted) {
      setReactions(reactions - 1);
      setHasReacted(false);
    } else {
      setReactions(reactions + 1);
      setHasReacted(true);
    }
  };

  return (
    <div className="post" style={{ width: "500px" }}>
      <div className="card post-card">
        {post.image && (
          <div className="image-container">
            <img
              src={post.image}
              className="card-img-top"
              alt={post.title}
              style={{
                height: "300px",
                objectFit: "fill",
                width: "100%",
              }}
              onError={(e) => {
                console.error("Image failed to load");
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
          <p className="card-text">{post.body}</p>
          <div className="tags-container">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge text-bg-light tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="alert alert-success reaction" role="alert">
            {reactions} people reacted
          </div>
          <div className="buttons">
            <a
              href="#"
              className="btn btn-primary react-button"
              onClick={handleReact}
            >
              {hasReacted ? "Remove Reaction" : "React"}
            </a>
            <a href="#" className="btn btn-primary chat-button">
              Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
