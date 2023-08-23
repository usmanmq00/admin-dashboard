import Topbar from "../../components/common/topbar";
import Button from "../../components/common/button";
import CategoryTable from "./CategoryTable";
import CategoryFilter from "./CategoryFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { ReactComponent as Folder } from "../../assets/images/sidebar/Folder.svg";
import EmptyPage from "../../components/common/emptyPage";

const Category = () => {
  const [categoryData, setCategorysData] = useState([]);
  const [productData, setProductData] = useState([]);
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

  // fetch data of product from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products");
        const { data } = response;
        if (data.success) {
          setProductData(data.data);
          console.log(data.data);
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

  // get the count column
  const countOccurrences = (objectsArray, category) => {
    let count = 0;

    // Loop through each object in the array
    objectsArray.forEach((obj) => {
      // Check if the object has a category property and it is an array
      if (obj.hasOwnProperty("categories") && Array.isArray(obj.categories)) {
        // Use the includes method to check if "high-heeled" is present in the category array
        count += obj.categories.filter((item) => item === category).length;
      }
    });

    return count;
  };

  console.log(countOccurrences(productData));

  return (
    <section className="bg-gray-100 w-full overflow-hidden">
      {loading && <Loader />}
      <ToastContainer />
      <Topbar title="Category Management" path="/category" />

      <section className="mx-5">
        <Button
          title="Product Categories"
          text="Add New Category"
          path="/category/create-category"
        />

        {categoryData && categoryData.length === 0 ? (
          <EmptyPage
            icon={
              <Folder className="fill-gray-400 absolute top-10 left-10 h-[60px] w-[60px]" />
            }
            title="No Categories Yet?"
            desc="Add categories to your category"
            text="New Category"
            path="/category/create-category"
          />
        ) : (
          <section className="w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] my-[20px]">
            <CategoryFilter />
            <CategoryTable
              categoryData={categoryData}
              countOccurrences={countOccurrences}
              productData={productData}
            />
          </section>
        )}
      </section>
    </section>
  );
};

export default Category;
