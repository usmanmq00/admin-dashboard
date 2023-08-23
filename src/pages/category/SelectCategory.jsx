import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const SelectCategory = ({ handleChange }) => {
  const [categoryTitle, setCategorysTitle] = useState([]);
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
          setCategorysTitle(data.data);
          setLoading(false);
          console.log(data.data);
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

  return (
    <div className="pb-[20px]">
      {loading && <Loader />}
      <ToastContainer />
      <div className="w-full border-[1px] border-[#e1e3ea]">
        <select
          name="parentCategory"
          className="outline-none text-[#ABAFB1] rounded-md p-2 w-[99%] bg-[#F4F5FA]"
          defaultValue="parent category"
          onChange={handleChange}
        >
          <option value="parent category" disabled>
            Parent Category
          </option>
          {categoryTitle.map((item) => (
            <React.Fragment key={item._id}>
              {item.parentCategory === "" && (
                <option value={item.title}>{item.title}</option>
              )}
            </React.Fragment>
          ))}
        </select>
      </div>
      <p className="text-[#A1A5B7] text-xs pt-2">
        Assign a parent term to create a hierarchy. The term Jazz, for example,
        would be the parent of Bebop and Big Band.
      </p>
    </div>
  );
};

export default SelectCategory;
