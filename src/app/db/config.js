import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase/firebase";
import { TABLES } from "../utils/constants";

export const getAdminRoute = async () => {
  const routeDocRef = doc(db, TABLES.config, "adminRoute");
  const routeDoc = await getDoc(routeDocRef);
  if (routeDoc.exists()) {
    return routeDoc.data().route;
  }else{
    return null
  }
};
