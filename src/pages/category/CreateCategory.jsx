import React, { useEffect, useState } from "react";
import Topbar from "../../components/common/topbar";
import { Fields, TextArea } from "../../components/common/Fields";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { Alert } from "@mui/material";
import SelectCategory from "./SelectCategory";

const CreateCategory = () => {
  const [fields, setFields] = useState({
    title: "",
    slug: "",
    parentCategory: "",
    description: "",
  });
  const [titleError, setTitleError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // function to add in fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fields.title === "") {
      setTitleError("This field is required.");
      return;
    }

    try {
      const token = localStorage.getItem("loginToken"); // Extract token from localStorage
      const response = await axios.post("/api/categorys", fields, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the extracted token
        },
      });
      const { data } = response;
      setLoading(false);
      // Handle the response

      if (data.success) {
        navigate("/category");
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

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <form
      className="bg-gray-100 w-full overflow-hidden"
      onSubmit={handleSubmit}
    >
      {loading && <Loader />}
      <Topbar title="Category Management" path="/category" />

      <section className="mx-5">
        <section className="flex h-[36px] w-full justify-between items-center py-8 mt-[19px]">
          <h1 className="text-[#181C32] text-lg leading-5 font-semibold">
            Add new category
          </h1>
          <div className="flex items-center">
            <input
              className="ml-[28px] rounded-[6.18px] bg-[#2F4EF7] text-white w-[161px] h-[44px] font-medium cursor-pointer"
              type="submit"
              value="Save & Publish"
            />
          </div>
        </section>

        <section className="w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] mb-[20px]">
          {message && (
            <div className="w-full flex justify-center items-center my-4">
              <Alert severity="error" sx={{ width: "100%" }}>
                {message}
              </Alert>
            </div>
          )}

          <section className="mb-[27px]">
            <div className="pb-[20px]">
              <Fields
                label={""}
                placeholder={"Name"}
                description={"The name is how it appears on your site."}
                width={"100%"}
                value={fields.title}
                onChange={handleChange}
                name={"title"}
                error={titleError && titleError}
              />
            </div>
            <div className="pb-[20px]">
              <Fields
                label={""}
                placeholder={"Slug"}
                description={
                  "The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens."
                }
                width={"100%"}
                value={fields.slug}
                onChange={handleChange}
                name={"slug"}
              />
            </div>

            <SelectCategory handleChange={handleChange} />

            <div className="pb-[20px]">
              <TextArea
                label={""}
                placeholder={"Description"}
                description={
                  "The description is not prominent by default; however, some themes may show it."
                }
                width={"100%"}
                height={"200px"}
                value={fields.description}
                onChange={handleChange}
                name={"description"}
              />
            </div>
          </section>
        </section>
      </section>
      <ToastContainer />
    </form>
  );
};

export default CreateCategory;
