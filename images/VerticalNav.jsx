import { useState } from "react";

import { 
  ChevronLeft, ChevronRight, LayoutDashboard, MessageSquare, BarChart2, Folder, Settings, LogOut 
} from "lucide-react";


function Verticall() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { title: "Messages", icon: <MessageSquare size={20} /> },
    { title: "Analytics", icon: <BarChart2 size={20} /> },
    { title: "File Manager", icon: <Folder size={20} /> },
    { title: "Settings", icon: <Settings size={20} /> },
    { title: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } h-screen p-5 pt-8 duration-300 bg-gray-800 relative`}
      >
        {/* Toggle button */}
       
        <br/>

        {/* Logo */}
        <div className="flex gap-x-2 items-center mb-6">
                 <img
          src="../../images/2021.gif"
          alt="craftapp"
          className="w-20 absolute top-5 left-1/2 transform -translate-x-1/2 mb-8"
        />

          <h1
            className={`text-white origin-left text-xl font-bold duration-300 ${
              !open && "scale-0"
            }`}
          >
            CraftApp
          </h1>
        </div>

        {/* Menu items */}
        <ul className="mt-20">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-700"
            >
              {menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
         <button
          className=" absolute top-0 right-24 w-7 bg-white rounded-full border-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={24} />}
        </button>
      </div>

      {/* Main content */}
      <div className="">
        <h1 className="">Home page</h1>
      </div>
    </div>
  );
}

export default Verticall;
