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
        <h1>Add Product </h1>
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
            class="form-item"
            onKeyUp={(e) => setTitle(e.target.value)}
            id="exampleInput8"
            placeholder="Title"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-item"
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
            class="form-item"
            onKeyUp={(e) => setContent(e.target.value)}
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Content"
          ></textarea>
        </div>
        <button
          type="button"
          class="form-button"
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
    <div class="form-item">
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
  );
};

export default AddComponent;
