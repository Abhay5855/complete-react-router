import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Card } from "antd";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get("/posts").then((res) => {
      console.log(res?.data);
      setPosts(res?.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div>
      {posts.map((item, idx) => (
        <Card>
          <p>{item.title}</p>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
