import React from "react";
import { GoVerified } from "react-icons/go";
import "./Brand.scss";

const Brand = ({ brand }) => {
  return (
    <div className="brand">
      <h3>{brand.name}</h3>
      {brand.partner && <GoVerified className="partner" />}
    </div>
  );
};

export default Brand;
