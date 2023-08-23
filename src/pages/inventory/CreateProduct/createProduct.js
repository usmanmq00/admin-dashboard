import React, { useEffect, useState } from "react";
import Topbar from "../../../components/common/topbar";
import AddHeader from "../../../components/common/addHeader";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../components/Loader/Loader";
import { Alert } from "@mui/material";
import validateForm from "./validateForm";
import { useProductContext } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  const navigate = useNavigate();

  const { fields, setFormErrors, handleUploadMedia, handleUploadThumbnail } =
    useProductContext();

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(fields);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setMessage(null);
      await handleUploadMedia();
      await handleUploadThumbnail();
      setSubmitStatus(true);
    }
  };

  useEffect(() => {
    const submit = async () => {
      try {
        const token = localStorage.getItem("loginToken"); // Extract token from localStorage
        const response = await axios.post("/api/products", fields, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Use the extracted token
          },
        });
        const { data } = response;
        setLoading(false);
        // Handle the response

        if (data.success) {
          navigate("/inventory");
        } else {
          setMessage(data.message);
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

    if (submitStatus) {
      submit();
    }
  }, [fields, navigate, submitStatus]);

  return (
    <section className="bg-gray-100 w-full overflow-hidden">
      {loading && <Loader />}
      <Topbar title="Inventory" path="/inventory" />

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <section className="mx-5">
          <AddHeader title="Product Form" />
        </section>

        {message && (
          <div className="w-full flex justify-center items-center my-4">
            <Alert severity="error" sx={{ width: "375px" }}>
              {message}
            </Alert>
          </div>
        )}

        <section className="px-5 mt-6 flex gap-5">
          <LeftSide />
          <RightSide />
        </section>
      </form>
      <ToastContainer />
    </section>
  );
};

export default CreateProduct;
