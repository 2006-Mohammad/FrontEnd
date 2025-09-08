import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  MessageSquare,
  BarChart2,
  Folder,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Chat",
      icon: <MessageSquare size={20} />,
      path: "/dashboard/chat",
    },
    { title: "About", icon: <BarChart2 size={20} />, path: "/dashboard/about" },
    {
      title: "Postpage",
      icon: <Folder size={20} />,
      path: "/dashboard/postpage",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
    { title: "Signout", icon: <LogOut size={20} />, path: "/signout" }, // if outside dashboard
  ];

  return (
    <>
      {/* Horizontal Navbar */}
      <Navbar />
      <div className="flex flex-col h-screen ">
        {/* Main area: Sidebar + Content */}
        <div className="flex flex-1">
          {/* Vertical Sidebar */}
          <div
            className={`${
              sidebarOpen ? "w-70" : "w-20"
            }  bg-gray-800 duration-300 relative`}
          >
            <button
              className="absolute top-2 right-0  bg-white rounded-full border-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>

            {/* Logo */}
            <div className="flex gap-x-2 items-center p-5 mt-8">
              <img src="../../images/2021.gif" className="w-20 " />
              <h1
                className={`text-white text-xl duration-300 ${
                  !sidebarOpen && "scale-0"
                }`}
              >
                CraftApp
              </h1>
            </div>

            {/* Menu items */}
            <ul className="mt-20 ml-6">
              {Menus.map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={menu.path}
                    end={menu.path === "/dashboard"} // only exact /dashboard makes it active
                    className={({ isActive }) =>
                      `text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md 
     ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700"}`
                    }
                  >
                    {menu.icon}
                    <span
                      className={`${
                        !sidebarOpen && "hidden"
                      } origin-left duration-200`}
                    >
                      {menu.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Page content */}
          <div className="flex-1 p-7 overflow-auto">
            <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
