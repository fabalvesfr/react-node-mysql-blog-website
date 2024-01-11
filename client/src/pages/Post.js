import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [post, setPost] = useState({});

  const getIndividualPost = async () => {
    const result = await fetch(`http://localhost:3001/posts/${id}`);
    const data = await result.json();
    setPost(data);
  };

  useEffect(() => {
    getIndividualPost();
  }, [post]);

  return (
    <div>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <small>{post.userName}</small>
      </div>
    </div>
  );
}

export default Post;
