import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase/firebase";
import { TABLES } from "../utils/constants";

export const getCategories = async () => {
  const categoryDocs = await getDocs(collection(db, "category"));
  const categories = [];
  categoryDocs.forEach((doc) => {
    categories.push({ id: doc.id, ...doc.data() });
  });
  return categories;
};

export const createCategory = async (category) => {
  let createdCategory;
  try {
    const createdCategoryRef = await addDoc(
      collection(db, TABLES.category),
      category
    );
    createdCategory = createdCategoryRef.id;
  } catch (err) {
    createdCategory = null;
  }
  return createdCategory;
};
