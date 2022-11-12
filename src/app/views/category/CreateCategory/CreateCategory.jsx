import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { createCategory } from "../../../db/category";
import "./CreateCategory.scss";

const CreateCategory = ({ isOpen, close }) => {
  const [category, setCategory] = useState(emptyCategory);
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCategory({
      ...category,
      [key]: value,
    });
  };

  const handleCreateCategory = () => {
    const isValidCategory = validateCategory(category);
    isValidCategory &&
      createCategory(category)
        .then((data) => {
          console.log("created category: ", data);
          setCategory(emptyCategory);
        })
        .catch((err) => {
          console.log("unable to create category");
        });
  };

  const validateCategory = (category) => {
    return (
      category.name.length > 3 &&
      category.coverImg.length > 0 &&
      category.description.length > 30
    );
  };

  return (
    <div className={`category__create ${isOpen && "active"}`}>
      <div className="category__create-form">
        <GrClose className="category__create-close" onClick={close} />
        <div className="category__create-form--image" />
        <div className="category__create-form--fields">
          <h1>Create Category</h1>
          <input
            type="text"
            placeholder="Category Name"
            name="name"
            onChange={handleChange}
            value={category.name}
          />
          <input
            type="text"
            placeholder="Cover Image"
            name="coverImg"
            onChange={handleChange}
            value={category.coverImg}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={category.description}
          ></textarea>
          <button onClick={handleCreateCategory}>Submit</button>
        </div>
      </div>
    </div>
  );
};

const emptyCategory = {
  name: "",
  coverImg: "",
  description: "",
};

export default CreateCategory;
