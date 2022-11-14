import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase/firebase";
import { TABLES } from "../utils/constants";

export const getBrands = async () => {
  const brandsDocs = await getDocs(collection(db, TABLES.brands));
  const brands = [];
  brandsDocs.forEach((doc) => {
    brands.push({ id: doc.id, ...doc.data() });
  });
  return brands;
};


export const createBrand = async (brand) => {
  let createdBrand;
  try {
    const createdBrandRef = await addDoc(collection(db, TABLES.brands), brand);
    createdBrand = createdBrandRef.id;
  } catch (err) {
    createdBrand = null;
  }
  console.log(createdBrand);
  return createdBrand;
};
