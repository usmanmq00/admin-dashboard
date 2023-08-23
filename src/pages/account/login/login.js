import { useState } from "react";
import Account from "../../../components/common/account";
import Form from "../../../components/common/form";
import Lock from "../../../assets/images/account/Lock.png";
import { VscMail } from "react-icons/vsc";
import { CiUnlock } from "react-icons/ci";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LoginFields from "../../../components/common/LoginFields";
import { useContextAPI } from "../../../context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "@mui/material";
import Loader from "../../../components/Loader/Loader";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, SetLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setshowPassword] = useState(false);

  const { email, password } = formData;

  const { setAuth } = useContextAPI();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("email is required.");
    } else if (!password) {
      setEmailError("");
      setPasswordError("password is required.");
    } else {
      try {
        SetLoading(true);
        setMessage(null);
        const response = await axios.post("/auth/admin/login", {
          email,
          password,
        });
        const { data } = response;
        if (data.success) {
          const expirationDate = new Date();
          const expirationTime =
            expirationDate.getTime() + 3 * 24 * 60 * 60 * 1000;
          localStorage.setItem("loginToken", data.data.accessToken);
          localStorage.setItem("user", JSON.stringify(data.data.email));
          localStorage.setItem(
            "expirationTime",
            JSON.stringify(expirationTime)
          );
          setAuth(true);

          navigate("/dashboard");
          SetLoading(false);
        } else {
          setMessage(data.message);
          SetLoading(false);
        }
      } catch (error) {
        toast.error("Something wents wrong!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        console.error("Error logging in:", error);
        SetLoading(false);
      }
    }
  };

  return (
    <section className="w-full">
      {loading && <Loader />}
      <section className="w-100% h-[100vh] flex">
        <Account Img={Lock} />
        <Form
          title="Welome back!"
          desc="Login to your account"
          btnText="Login"
          link="Recover Password"
          path="/account/reset"
          onSubmit={handleSubmit}
        >
          {message && (
            <div className="flexCenter mb-4">
              <Alert severity="error" sx={{ width: "375px" }}>
                {message}
              </Alert>
            </div>
          )}
          <div className="space-y-4">
            <LoginFields
              icon={<VscMail className="fill-gray-500" />}
              placeholder={"Email Address"}
              type={"email"}
              onChange={handleChange}
              name={"email"}
              value={email}
              error={emailError && emailError}
            />
            <LoginFields
              icon={<CiUnlock className="fill-gray-500" />}
              placeholder={"Password"}
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={password}
              name="password"
              error={passwordError && passwordError}
            >
              <button
                className="text-2xl text-gray-100 cursor-pointer"
                onClick={() => setshowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? (
                  <BiHide className="fill-gray-500" />
                ) : (
                  <BiShow className="fill-gray-500" />
                )}
              </button>
            </LoginFields>
          </div>
        </Form>
        <ToastContainer />
      </section>
    </section>
  );
};

export default AdminLogin;
