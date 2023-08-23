import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../../components/Loader/Loader";

const Categories = ({ setFields }) => {
  const [categoryData, setCategorysData] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch data of categorys from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("loginToken"); // Extract token from localStorage
        const response = await axios.get("/api/categorys", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Use the extracted token
          },
        });
        const { data } = response;
        if (data.success) {
          setCategorysData(data.data);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something wents wrong!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        console.error("Error logging in:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (item) => {
    setFields((prevSelectedItems) => {
      const updatedCategories = prevSelectedItems.categories.includes(item)
        ? prevSelectedItems.categories.filter((category) => category !== item)
        : [...prevSelectedItems.categories, item];

      return { ...prevSelectedItems, categories: updatedCategories };
    });
  };

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      {categoryData.map((item, index) => (
        <div
          key={index}
          className={`${item.parentCategory && "pl-2"} flex items-center gap-1`}
        >
          <input
            className="cursor-pointer"
            type="checkbox"
            onChange={() => handleCheckboxChange(item.title)}
          />
          <label>{item.title}</label>
        </div>
      ))}
    </>
  );
};

export default Categories;
