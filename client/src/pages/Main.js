import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPosts = async () => {
    const result = await fetch("http://localhost:3001/posts");
    const data = await result.json();
    //Set state with the fetched data
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  const like = async (postId) => {
    // TODO 1. Make request to the backend
    // TODO 2. Update frontend
    const result = await fetch(`http://localhost:3001/posts/like/${postId}`, {
      method: "PUT",
    });
    const data = await result.json();
    return data;
  };

  return (
    <div className="mainPage">
      {posts.map((post, key) => {
        return (
          <div
            className="post"
            key={key}
            onClick={() => {
              navigate(`/${post.id}`);
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <small>{post.userName}</small>
            <button
              onClick={() => {
                like(post.id);
              }}
            >
              Like
            </button>
            <small>{post.likes}</small>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
