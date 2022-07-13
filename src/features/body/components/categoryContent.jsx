import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { fetchCategories } from "../../../store/actions/categoryActions";

function CategoryContent({ category }) {
  const navigate = useNavigate();
  const [categoryContent, setCategoryContent] = useState(null);


  // ---- using api to get category content ----
  // const dispatch = useDispatch();
  // const categories  = useSelector((state) => state.categories);



    useEffect(() => {
      // ---- fetching categories ----
      //dispatch(fetchCategories());

      setTimeout(() => {
        setCategoryContent(category);
      }, 500);
    }, [category]);
  return (
    
    categoryContent  ?  (
      <div>
        
      {categoryDescription()}
      <div className="category-content flex justify-center  gap-1 mx-auto w-2/4">
        {categoryContent.products.map(product => (
        productItem(product, categoryContent)))}
      </div>
      </div>
    ) :loading() 
  );

  function productItem(product,categoryContent) {
    return <div class="bg-white rounded-lg border cursor-pointer border-gray-200 shadow-md my-3 w-1/4"
    onClick={() => navigate(`/${categoryContent.name}/products/${product.name}`)}
    >
      <img class="rounded-t-lg mx-auto" src={product.image} alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
          {product.name}
        </h5>
      </div>
    </div>;
  }

  function loading() {
    return <div class=" h-full flex justify-center bg-opacity-70 bg-black items-center m-auto">
    <div class="animate-pulse h-auto w-auto  " role="status" >
      <img src="data:image/jpeg;base64,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" alt="" />
    </div>
  </div>;
  }

  function categoryDescription(){
    return(
      <div className="flex max-w-7xl m-auto mt-5 mb-14">
        <div className="w-1/2">
          <div className="m-auto rounded-xl border-[1px] w-2/3">
            <img className="rounded-xl" src={require('../assets/jpg/about.jpg')} alt="aboutUs"/>
          </div>
        </div>
        <div className="w-1/2">
          <div className=" text-5xl font-bold my-5">
            {category.name}
          </div>
          <p className=" leading-7 ">
            {category.description}
          </p>
        </div>
      </div>
    );
  }
}

export default CategoryContent;
