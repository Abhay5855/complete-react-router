import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import { useHistory , useLocation } from "react-router-dom";
import { Card } from "antd";

const Posts = () => {


  const history = useHistory();
  const location = useLocation();

  
  

  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get("/posts").then((res) => {
      console.log(res?.data);
      setPosts(res?.data);
    })
    .catch((err) => {
        
        console.log('some err' , err.message);

        

        history.push('/' , {state : {from : location} , replace : true})
         
    })
  };

  if(localStorage.getItem('login-token') === null || !localStorage.getItem('login-token')){

    history.push('/' , {state : {from : location} , replace : true})
  }

  useEffect(() => {
    fetchPosts();

    
  }, []);

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
