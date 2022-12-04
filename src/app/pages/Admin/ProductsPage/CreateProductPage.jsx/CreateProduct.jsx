import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import FileUpload from "../../../../components/FileUpload/FileUpload";
import { getCategories } from "../../../../db/category";
import { createProduct } from "../../../../db/products";
import { storage } from "../../../../service/firebase/firebase";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const [product, setProduct] = useState(emptyProduct);
  const [isUsingDiscount, setIsUsingDiscount] = useState(false);
  const [navigateBack, setNavigateBack] = useState(true);
  const [categories, setCategories] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [initializeCreate, setInitializeCreate] = useState(false);
  const [clearFiles, setClearFiles] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;

    if (key === "onSale" || key === "available") {
      value = e.target.checked;
    }

    setProduct({
      ...product,
      [key]: value,
    });
  };

  const getDiscount = () => {
    let discount = 0;
    const MRP = parseFloat(product.mrp);
    const price = parseFloat(product.price);
    discount = 100 - (price / MRP) * 100;
    if (isNaN(discount)) {
      discount = 0;
    }
    return discount.toFixed(2);
  };

  const getPrice = () => {
    let price = 0;
    const MRP = parseFloat(product.mrp);
    const discount = parseFloat(product.discount);
    price = MRP - (discount / 100) * MRP;
    if (isNaN(price)) {
      price = 0;
    }
    return price.toFixed(2);
  };

  const onFileChange = (files) => {
    setProductImages(files);
  };

  const uploadImages = async () => {
    let images = [];
    for (const image of productImages) {
      const imageRef = ref(storage, `images/products/${image.name + v4()}`);
      await uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          images.push(url);
        });
      });
    }
    return images;
  };

  const handleCreateProduct = async () => {
    setInitializeCreate(true);
    await uploadImages().then((images) => {
      let newProduct;
      if (isUsingDiscount) {
        newProduct = {
          ...product,
          price: getPrice(),
        };
      } else {
        newProduct = {
          ...product,
          discount: getDiscount(),
        };
      }
      newProduct = {
        ...newProduct,
        images: images,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      console.log(newProduct);
      // setInitializeCreate(false);
      createProduct(newProduct)
        .then((data) => {
          if (data) {
            setInitializeCreate(false);
            setProduct(emptyProduct);
            setProductImages([]);
            setClearFiles(true);
            navigateBack && navigate("/products");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    let clearTimer;
    if (clearFiles) {
      clearTimer = setTimeout(() => {
        setClearFiles(false);
      }, 1000);
    }
    return () => clearTimeout(clearTimer);
  }, [clearFiles]);

  return (
    <div className="product__create">
      <div className="product__create-main">
        <h1>Create Product</h1>
      </div>
      <div className="product__create-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={product.name}
        />
        <select
          name="category"
          placeholder="Category"
          defaultValue={product.category}
          onChange={handleChange}
        >
          <option value="0" disabled>
            --select-category--
          </option>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={handleChange}
          value={product.description}
        ></textarea>
        <div className="product__create-form--sale">
          <span>
            <input
              type="checkbox"
              name="available"
              id="available"
              onChange={handleChange}
              checked={product.available}
            />
            &nbsp;
            <label htmlFor="available">In Stock</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="onSale"
              id="onSale"
              onChange={handleChange}
              checked={product.onSale}
            />
            &nbsp;
            <label htmlFor="onSale">On Sale</label>
          </span>
        </div>
        <input
          type="number"
          placeholder="MRP"
          name="mrp"
          onChange={handleChange}
          value={product.mrp}
        />
        <div className="product__create-form--type">
          <span>
            <input
              type="radio"
              name="type"
              id="price"
              onChange={() => setIsUsingDiscount(false)}
              checked={!isUsingDiscount}
            />
            &nbsp;
            <label htmlFor="price">Selling Price</label>
          </span>
          <span>
            <input
              type="radio"
              name="type"
              id="discount"
              onChange={() => setIsUsingDiscount(true)}
              checked={isUsingDiscount}
            />
            &nbsp;
            <label htmlFor="discount">Use Discount</label>
          </span>
        </div>
        {!isUsingDiscount && (
          <span>
            <input
              type="number"
              placeholder="Price"
              id="price"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
            <br />
            <label htmlFor="price">
              Total Discount is <b>{getDiscount()} %</b>
            </label>
          </span>
        )}
        {isUsingDiscount && (
          <span>
            <input
              type="number"
              placeholder="Discount"
              name="discount"
              max={90}
              onChange={handleChange}
              value={product.discount}
            />

            <br />
            <label htmlFor="price">
              Selling Price is <b>{getPrice()} ₹</b>
            </label>
          </span>
        )}
        <div className="product__create-form--replacement">
          <input
            type="number"
            placeholder="Replacement Period"
            name="replacementPeriod"
            onChange={handleChange}
            value={product.replacementPeriod}
          />

          <select
            name="replacementPeriodType"
            onChange={handleChange}
            value={product.replacementPeriodType}
          >
            {replacementPeriodTypeOptions.map((option) => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className="product__create-form--warranty">
          <input
            type="number"
            placeholder="Warranty Period"
            name="warrantyPeriod"
            onChange={handleChange}
            value={product.warrantyPeriod}
          />

          <select
            name="warrantyPeriodType"
            onChange={handleChange}
            value={product.warrantyPeriodType}
          >
            {warrantyPeriodTypeOptions.map((option) => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className="product__create-form--images">
          <FileUpload
            onFileChange={(files) => onFileChange(files)}
            clear={clearFiles}
          />
        </div>
        <button
          className="btn-dark"
          onClick={handleCreateProduct}
          disabled={initializeCreate}
        >
          {initializeCreate ? "Adding..." : "Add Product"}
        </button>
        <span>
          <input
            type="checkbox"
            id="navigateBack"
            onChange={() => {
              setNavigateBack(!navigateBack);
            }}
            checked={navigateBack}
          />
          &nbsp;
          <label htmlFor="navigateBack">
            Navigate back after product create
          </label>
        </span>
      </div>
    </div>
  );
};

const emptyProduct = {
  name: "",
  description: "",
  available: true,
  category: 0,
  price: "",
  mrp: "",
  discount: "",
  replacementPeriod: "",
  replacementPeriodType: "day",
  warrantyPeriod: "",
  warrantyPeriodType: "year",
  onSale: false,
};

const replacementPeriodTypeOptions = ["day", "month"];
const warrantyPeriodTypeOptions = ["month", "year"];

export default CreateProduct;
