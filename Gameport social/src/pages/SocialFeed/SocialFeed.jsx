import React, { useState } from "react";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import "./SocialFeed.css";

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="sidebar left-sidebar">
          <h2>Widget 1</h2>
          <p>Content for widget 1...</p>
        </div>
        <div className="main-content">
          <PostForm onPostCreated={handlePostCreated} />
          <PostList posts={posts} />
        </div>
        <div className="sidebar right-sidebar">
          <h2>Widget 2</h2>
          <p>Content for widget 2...</p>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
