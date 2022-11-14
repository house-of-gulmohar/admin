import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../../../../db/brands";
import Brand from "../../../../views/brand/Brand/Brand";
import "./BrandsPage.scss";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getBrands().then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <div className="brands">
      <div className="brands__main">
        <h1>All Brands</h1>
        <div className="brands__main--actions">
          <Link to={"/brands/create"}>Add Brand</Link>
        </div>
      </div>
      <div className="brands">
        {brands.map((brand) => (
          <Brand brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
