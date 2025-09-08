import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend integration can be added here

    //temparay save in loacal storage
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-lg p-12 w-full max-w-sm relative border border-gray-300"
      >
        <h3 className="text-center mb-10 mt-4 text-2xl">Sign up</h3>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border mb-3 px-3 py-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border mb-3 px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border mb-3 px-3 py-2 rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}
