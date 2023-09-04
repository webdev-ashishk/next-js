"use client";
import React, { useEffect, useState } from "react";

const FatchPost = () => {
  const [postsData, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  async function getPost() {
    const URL = "https://dummyjson.com/posts";
    const res = await fetch(URL);
    const data = await res.json();
    setPost(data?.posts);
    console.log(data?.posts);
  }
  return (
    <div className="border-2 flex flex-wrap p-9 justify-center">
      {postsData?.map((post) => {
        return (
          <div
            key={post?.id}
            style={{
              border: "2px solid green",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              width: "300px",
              height: "100px",
            }}
            className="text-green-200 font-bold hover:bg-blue-700 hover:cursor-pointer"
          >
            <ul className="flex overflow-hidden">
              <li className="mx-2">{post?.id}</li>
              <li>{post?.title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FatchPost;
