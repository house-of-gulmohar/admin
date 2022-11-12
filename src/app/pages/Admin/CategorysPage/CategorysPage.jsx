import React, { useEffect, useState } from "react";
import { getCategories } from "../../../db/category";
import CreateCategory from "../../../views/category/CreateCategory/CreateCategory";
import "./CategoryPage.scss";

const CategorysPage = () => {
  const [openCategoryCreate, setOpenCategoryCreate] = useState(false);
  const [categories, setCategories] = useState([]);

  const initiateCategoryCreate = () => setOpenCategoryCreate(true);
  const abortCategoryCreate = () => setOpenCategoryCreate(false);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <div className="categories">
      <div className="categories__main">
        <h1>All Categories</h1>
        <button onClick={initiateCategoryCreate}>Add Category</button>
      </div>
      {categories.map((category, index) => (
        <div className="text-slate-900" key={category.id}>
          {category.name}
        </div>
      ))}
      <CreateCategory isOpen={openCategoryCreate} close={abortCategoryCreate} />
    </div>
  );
};

export default CategorysPage;
