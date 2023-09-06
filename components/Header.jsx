import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href="/" className="m-2 p-2 text-4xl">
        Home
      </Link>
      <Link href="/blog" className="m-2 p-2 text-4xl">
        Blog
      </Link>
      <Link href="/contact" className="m-2 p-2 text-4xl">
        contact
      </Link>
      <Link href="/nitin" className="m-2 p-2 text-4xl">
        nitin
      </Link>
      <Link href="/nitin/setting" className="m-2 p-2 text-4xl">
        setting
      </Link>
    </>
  );
};

export default Header;
