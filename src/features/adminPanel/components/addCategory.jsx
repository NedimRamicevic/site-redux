import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/categorySlice";


function AddCategory() {
  const [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white mx-auto w-1/3">
      <div className="text-center pb-6">
        <h1>Add Category </h1>
      </div>
      <form>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-item"
            onKeyUp={(e) => {
              setName(e.target.value);
              setimage(e.target.value);
            }}
            id="exampleInput7"
            placeholder="Category Name"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-item"
            onKeyUp={(e) => setDescription(e.target.value)}
            id="exampleInput8"
            placeholder="Category Description"
          />
        </div>
        <button
          type="button"
          class="form-button"
          onClick={() => {
            dispatch(addCategory({ name, description,}));
            console.log("naber" + name);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
