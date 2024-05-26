import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <p>{post.content}</p>
          {post.imageUrl && (
            <img src={`http://localhost:5000${post.imageUrl}`} alt="Post" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
