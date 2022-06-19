import React from "react";

function Content({ page }) {
  return (
    <div className="items-center">
      <h1>{page.name}</h1>
      <div class="pt-6 md:p-8 text-center md:text-center space-y-4">
        <blockquote>
          <p class="text-lg font-medium">{page.content}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Content;
