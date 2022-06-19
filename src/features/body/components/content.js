import React from "react";

function Content({ page }) {
  return (
    <div className="Content">
      <h1>{page.name}</h1>
      <h3>{page.content}</h3>
    </div>
  );
}

export default Content;
