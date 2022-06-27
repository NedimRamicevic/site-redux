import React from "react";

function Content({ page }) {
  return (
    <div>
      {page.content.map((content) => (
        <div className="p-12 items-center">
          <div className=" p-6 bg-cyan-500 rounded-3xl grid grid-cols-3">
            <div
              className="bg-cover rounded-xl col-span-1"
              style={{ backgroundImage: `url(${content.img})` }}
            ></div>
            <div className=" col-span-2">
              <h1 className=" text-center">{page.name}</h1>
              <div class="pt-6 md:p-8 text-center md:text-center space-y-4 ">
                <blockquote>
                  <p class="text-lg font-medium text-justify">
                    {content.content}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
