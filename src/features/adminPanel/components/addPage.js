import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPage } from "../redux/addPageSlice";

function AddPage() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white w-1/2 mx-auto">
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
              setLink(e.target.value);
            }}
            id="exampleInput7"
            placeholder="Nav Title"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-item"
            onKeyUp={(e) => setTitle(e.target.value)}
            id="exampleInput8"
            placeholder="Title"
          />
        </div>
        <button
          type="button"
          class="form-button"
          onClick={() => {
            dispatch(addPage({ name, title, link }));
            console.log("naber" + name);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default AddPage;
