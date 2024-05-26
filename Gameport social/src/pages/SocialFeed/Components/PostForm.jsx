import React, { useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import "./PostForm.css";

const PostForm = ({ onPostCreated }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onPostCreated(response.data);
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        required
      />
      <label>
        <FaUpload size={20} style={{ marginRight: "10px" }} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        Upload image
      </label>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default PostForm;
