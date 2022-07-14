// about page
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();

  return (
    <div class="py-16 bg-white">
      <div className="category-content flex justify-center flex-wrap gap-1 mx-auto w-3/4">
        {categories.map((category) => categoryItem(category))}
      </div>
    </div>
  );

  function categoryItem(category) {
    return (
      <div
        class="bg-white rounded-lg border border-gray-200 shadow-md my-3 w-1/4 cursor-pointer"
        onClick={() => navigate(`/categories/${category.id}`)}
      >
        <img class="rounded-t-lg mx-auto" src={category.image} alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
            {category.name}
          </h5>
          <p class="mb-3 text-center font-normal text-gray-700 ">
            {category.description}
          </p>
        </div>
      </div>
    );
  }
}
export default Categories;
