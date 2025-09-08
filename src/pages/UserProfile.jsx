import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    profilePic: null,
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    //Temporarily save in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
    if (user && user.firstName) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-gray-100 rounded-lg p-8 shadow-sm w-96 border border-gray-300">
        <h2 className="text-2xl  text-center mb-6 text-green-600">
          User Profile
        </h2>

        {/* Profile picture */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.profilePic || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2 border border-green-600"
          />
          {editMode && (
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          )}
        </div>

        <form className="space-y-3">
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded px-3 py-2"
          />
        </form>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setEditMode(!editMode)}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
