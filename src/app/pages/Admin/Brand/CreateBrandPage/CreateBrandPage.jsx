import { async } from "@firebase/util";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { createBrand } from "../../../../db/brands";
import { getCategories } from "../../../../db/category";
import { storage } from "../../../../service/firebase/firebase";
import "./CreateBrandPage.scss";

const CreateBrandPage = () => {
  const [brand, setBrand] = useState(emptyBrand);
  const [categories, setCategories] = useState([]);
  const [logo, setLogo] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

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

  const upoloadLogo = async () => {
    if (logo == null) return false;
    let uploaded = false;
    const logoRef = ref(storage, `images/${logo.name + v4()}`);
    await uploadBytes(logoRef, logo)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setLogoUrl(url);
          console.log(url);
          uploaded = true;
        });
      })
      .catch((err) => {
        console.log(err);
        uploaded = false;
      });
    return uploaded;
  };

  const handleBrandCreate = () => {
    upoloadLogo().then(() => {
      const isCreated =
        validateBrand() &&
        createBrand({
          ...brand,
          imageUrl: logoUrl,
          joined: new Date(),
        });
      if (isCreated) {
        setBrand(emptyBrand);
      }
    });
  };

  const validateBrand = () => brand.name.length > 2;

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

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
        <select name="category" placeholder="Category" onChange={handleChange}>
          <option value="0" disabled>
            --select-category--
          </option>
          {categories.map((category) => {
            return <option value={category.id}>{category.name}</option>;
          })}
        </select>
        <label htmlFor="logo">Choose logo for brand</label>
        <input
          type="file"
          name="logo"
          id="logo"
          onChange={(e) => setLogo(e.target.files[0])}
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
