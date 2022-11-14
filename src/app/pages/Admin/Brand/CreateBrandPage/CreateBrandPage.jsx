import React, { useState } from "react";
import { createBrand } from "../../../../db/brands";
import "./CreateBrandPage.scss";

const CreateBrandPage = () => {
  const [brand, setBrand] = useState(emptyBrand);
  const handleChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if (key === "partner") {
      value = e.target.checked;
    }
    setBrand({
      ...brand,
      [key]: value,
    });
  };

  const handleBrandCreate = () => {
    const isCreated = validateBrand() && createBrand({
      ...brand,
      joined: new Date(),
    });
    if (isCreated) {
      setBrand(emptyBrand);
    }
  };

  const validateBrand = () => brand.name.length > 2;

  return (
    <div className="brand__create">
      <div className="brand__create-main">
        <h1 className="h1">Create Brand</h1>
      </div>
      <div className="brand__create-form">
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={brand.name}
        />
        <textarea
          type="text"
          className="input"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={brand.description}
        />

        <span>
          <input
            type="checkbox"
            name="partner"
            id="partner"
            onChange={handleChange}
            checked={brand.partner}
          />
          &nbsp;
          <label htmlFor="partner">Is Partner</label>
        </span>
        <button className="btn-dark" onClick={handleBrandCreate}>
          Add Partner
        </button>
      </div>
    </div>
  );
};

const emptyBrand = {
  name: "",
  description: "",
  partner: false,
};

export default CreateBrandPage;
