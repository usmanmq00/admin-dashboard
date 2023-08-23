import { Navigate } from "react-router-dom";
import { useContextAPI } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { auth } = useContextAPI();

  if (!auth) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default RequireAuth;
