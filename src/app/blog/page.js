"use client";

import Image from "next/image";

const Blog = () => {
  return (
    <center>
      <h3>~~Blog Blog Blog Blog Blog Blog Blog~~</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in
        quod blanditiis quaerat eum ea alias. Iusto accusamus impedit, ut
        voluptate, quod recusandae repudiandae, vel non laudantium eligendi
        repellendus aliquam.
      </p>
      <Image
        src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="500"
        height="300"
      ></Image>
      <style jsx>
        {`
          h3 {
            color: blue;
          }
          p {
            color: green;
          }
        `}
      </style>
    </center>
  );
};

export default Blog;
