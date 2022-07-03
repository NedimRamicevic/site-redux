import React from "react";

function CategoryContent({ category }) {

  return (
    console.log(category+"asddddddddddddddd"),
    category  ?  (
      <div className="category-content bg-black">
        <div className="category-content__title">asdasda</div>
        <div className="category-content__description">
         asdasd
        </div>
      </div>
    ) :<div>Loading...</div> 
  );
}

export default CategoryContent;
