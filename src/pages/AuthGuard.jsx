import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthGuard({ children, useToken = false }) {
  // check either token or user
  const authData = useToken
    ? localStorage.getItem("token")
    : JSON.parse(localStorage.getItem("user"));

  const location = useLocation();

  if (!authData) {
    // redirect to /signin,
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
}
