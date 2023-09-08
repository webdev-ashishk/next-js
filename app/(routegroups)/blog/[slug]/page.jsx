import React from "react";

const DynamicPage = ({ params }) => {
  return (
    <div>
      <h2>Dynamic Page Rendered!!! Hello {params.slug}</h2>
    </div>
  );
};

export default DynamicPage;
