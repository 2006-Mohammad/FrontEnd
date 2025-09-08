import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    let validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    setError(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signin failed");
        setLoading(false);
        return;
      }
      // Save user & token in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/LandingPage");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 rounded-lg p-12 w-full max-w-sm relative border border-gray-300">
        {/* Back button */}
        <button
          className="absolute top-1 left-1 bg-white rounded-full p-1 shadow hover:bg-gray-100"
          onClick={handleBack}
        >
          <ArrowLeftIcon className="w-4 h-4 text-green-600" />
        </button>

        {/* Logo */}
        <img
          src="../../images/2021.gif"
          alt="craftapp"
          className="w-20 absolute top-5 left-1/2 transform -translate-x-1/2 mb-8"
        />

        <h3 className="text-center mb-14 mt-14 text-3xl">SignIn</h3>

        <form className="bg-gray-100 p-6 rounded w-80" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              className="w-full border border-green-600 rounded px-3 py-2 focus:outline-none mb-8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            {error.email && (
              <div className="text-red-500 text-sm mt-1">{error.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="w-full border border-green-600 rounded px-3 py-2 focus:outline-none mb-8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {error.password && (
              <div className="text-red-500 text-sm mt-1">{error.password}</div>
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-green-600 border-green-500 rounded"
            />
            <p className="text-sm">Remember me?</p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Signing in..." : "SignIn"}
          </button>

          {/* Sign up link */}
          <p className="mt-3 mb-4 text-center text-black">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-700 font-bold">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
