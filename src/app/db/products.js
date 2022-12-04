import { addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase/firebase";
import { TABLES } from "../utils/constants";

export const createProduct = async (product) => {
  let createdProduct;
  try {
    const createdProductRef = await addDoc(
      collection(db, TABLES.products),
      product
    );
    createdProduct = createdProductRef.id;
  } catch (err) {
    console.error(err);
    createdProduct = null;
  }
  return createdProduct;
};
