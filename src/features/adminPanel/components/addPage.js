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
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
      <div className="text-center pb-6">
        <h1>Add Page </h1>
      </div>
      <form>
        <div class="form-group mb-6">
          <input
            type="text"
            class="
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            class="
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onKeyUp={(e) => setTitle(e.target.value)}
            id="exampleInput8"
            placeholder="Title"
          />
        </div>
        <button
          type="button"
          class="
          button
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
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
