import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Addblog = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (value) => {
    setDesc(value);
  };
  return (
    <div>
      <h3 className="mb-4">Add blog</h3>
      <div className="">
        <form action="">
          <CustomInput type="text" label="Enter blog title" />
          <select name="" id="">
            <option value="">Select blog category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Addblog;
