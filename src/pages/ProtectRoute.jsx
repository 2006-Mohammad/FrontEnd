import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user")); // check user from localStorage

  if (!user) {
    // not logged in, redirect to SignIn page
    return <Navigate to="/signin" replace />;
  }

  // logged in, render the child component
  return children;
}
