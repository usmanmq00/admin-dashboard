import React, { createContext, useState, useContext } from "react";
import initialState from "../pages/inventory/initialState";
import axios from "axios";

// Create a new context
const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [fields, setFields] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  // function to add in fileds
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleUploadMedia = async () => {
    try {
      const formData = new FormData();
      selectedMedia.forEach((file) => {
        formData.append("media", file);
      });

      const token = localStorage.getItem("loginToken"); // Extract token from localStorage
      const res = await axios.post("/api/uploadmedia", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Use the extracted token
        },
      });

      const { data } = res;
      if (data.success) {
        setFields((prevFields) => ({
          ...prevFields,
          media: data.data.imagePaths,
        }));
        console.log(data.data.imagePaths);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadThumbnail = async () => {
    try {
      const formData = new FormData();
      formData.append("thumbnail", selectedThumbnail);

      const token = localStorage.getItem("loginToken"); // Extract token from localStorage
      const res = await axios.post("/api/uploadthumbnail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Use the extracted token
        },
      });

      const { data } = res;
      if (data.success) {
        setFields((prevFields) => ({
          ...prevFields,
          thumbnail: data.data.filename,
        }));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        fields,
        setFields,
        formErrors,
        setFormErrors,
        handleChange,
        selectedMedia,
        setSelectedMedia,
        handleUploadMedia,
        handleUploadThumbnail,
        setSelectedThumbnail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
