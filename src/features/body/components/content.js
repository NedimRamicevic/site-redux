import React from "react";

function Content({ page }) {
  return (
    <div className="p-12 items-center">
      <div className=" pt-6 bg-cyan-500 rounded-3xl">
        <h1>{page.name}</h1>
        <div class="pt-6 md:p-8 text-center md:text-center space-y-4 ">
          <blockquote>
            <p class="text-lg font-medium">{page.content}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Content;
