import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.scss";

const ProductsPage = () => {
  return (
    <div className="products">
      <div className="products__main">
        <h1>All Products</h1>
        <div className="product__main--actions">
          <Link to={"/products/create"} className="btn-dark">
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
