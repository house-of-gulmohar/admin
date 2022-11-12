import { useEffect } from "react";
import { getCategories } from "../db/category";

const HomePage = () => {
  useEffect(() => {
    getCategories();
  });
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center px-20 w-screen text-center">
      House Of Gulmohar
    </div>
  );
};

export default HomePage;
