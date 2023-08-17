import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectorAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const { isLoggedIn } = useSelector((state) => state.auth);
  
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };