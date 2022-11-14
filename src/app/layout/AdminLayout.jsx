import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BiHomeAlt,
  BiCategoryAlt,
  BiShoppingBag,
  BiWorld,
} from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="adminLayout bg-slate-300">
      <div className="adminLayout__sidebar">
        <Link to={"/"} className="text-4xl">
          <BiHomeAlt />
        </Link>
        <ul>
          <li>
            <Link to={`/categorys`}>
              <BiCategoryAlt />
            </Link>
          </li>
          <li>
            <Link to={`/products`}>
              <BiShoppingBag />
            </Link>
          </li>
          <li>
            <Link to={`/brands`}>
              <BiWorld />
            </Link>
          </li>
        </ul>
        <BsArrowLeft className="text-4xl" onClick={() => navigate(-1)} />
      </div>
      <div className="adminLayout__main">{children}</div>
    </div>
  );
};

export default AdminLayout;
