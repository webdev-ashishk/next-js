"use client";

import Image from "next/image";
import FatchPost from "./FatchPost";
const Blog = () => {
  return (
    <>
      <h3>~~Blog Blog Blog Blog Blog Blog Blog~~</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in
        quod blanditiis quaerat eum ea alias. Iusto accusamus impedit, ut
        voluptate, quod recusandae repudiandae, vel non laudantium eligendi
        repellendus aliquam.
      </p>

      <div className="flex flex-wrap justify-center">
        <h1 className="text-blue-900">Blog Posts</h1>
        <FatchPost />
      </div>
    </>
  );
};

export default Blog;
