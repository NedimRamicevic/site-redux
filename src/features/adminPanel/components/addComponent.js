// add Component
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComponent } from "../redux/addPageSlice";
import { useSelector } from "react-redux";

function AddComponent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [page, setPage] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const options = useSelector((state) => state.addPage);

  const handleChange = (event) => {
    setPage(event.target.value);
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white w-1/2 mx-auto">
      <div className="text-center pb-6">
        <h1>Add Component </h1>
      </div>
      <form>
        <div class="form-group mb-6 ">
          <div>
            <Dropdown options={options} value={page} onChange={handleChange} />
          </div>
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
              setImage(e.target.value);
              console.log(e.target.value);
            }}
            id="exampleInput7"
            placeholder="Image"
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            class="
        
        block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            onKeyUp={(e) => setContent(e.target.value)}
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Content"
          ></textarea>
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
            dispatch(addComponent({ name, title, content, page, image }));
            console.log("naber" + name);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <div
        class=" block
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
      >
        <select
          className="w-full bg-white bg-clip-padding rounded m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          transition
          ease-in-out"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default AddComponent;
