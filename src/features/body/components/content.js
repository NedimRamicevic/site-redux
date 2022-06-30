import React from "react";

function Content({ page }) {
  return (
    <div>
      {page.content.map((content) => (
        <div class="relative max-w-xs mx-auto xl:max-w-xs min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div class="card items-center m-auto">
            <div class="card-header items-center mx-4 mt-6">
              <a href="/" blur-shadow-image="true">
                <img
                  class="w-auto rounded-lg m-auto"
                  src={content.img}
                  alt="tailwind-card"
                />
              </a>
            </div>
            <div class="card-body p-6">
              <h4 class="font-semibold text-center capitalize">
                {content.title}
              </h4>{" "}
              <p class=" opacity-60 mb-4 leading-none truncate">
                {content.content}
              </p>
              <button
                class="button bg-pink-400 rounded-md text-center p-2"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        // <div className="p-12 items-center">
        //   <div className=" p-6 bg-cyan-500 rounded-3xl grid grid-cols-3">
        //     <div
        //       className=" bg-cover rounded-xl col-span-1"
        //       style={{ backgroundImage: `url(${content.img})` }}
        //     ></div>
        //     <div className=" col-span-2">
        //       <h1 className=" text-center">{page.name}</h1>
        //       <div class="pt-6 md:p-8 text-center md:text-center space-y-4 ">
        //         <blockquote>
        //           <p class="text-lg font-medium text-justify">
        //             {content.content}
        //           </p>
        //         </blockquote>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
}

export default Content;
