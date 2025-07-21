import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "./searchBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "UI", to: "/ui" },
    { label: "Icons", to: "/icons" },
    { label: "Fonts", to: "/fonts" },
    { label: "Colors", to: "/colors" },
    { label: "Tools", to: "/tools" },
    { label: "Logos", to: "/logos" },
    { label: "Command", to: "/commands" },
    { label: "DevAI", to: "/ai" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-stone-900 px-5 md:px-10  h-24 flex  items-center   ">
      
      <img src="./logo1.png" alt="" width={50} className="relative md:bottom-1" />
      <p
        onClick={() => {
          navigate("/");
        }}
        className=" lg:text-xl cursor-pointer font-black font-p2p text-white pl-2 hidden md:block"
        >
        DevToolbox
      </p>
        
      <div className="w-20 flex-1 lg:hidden  flex xl:flex justify-center md:ml-10 ">
        <SearchBar ></SearchBar>
      </div>

      {/* Desktop nav */}
      <div className="  justify-center ml-auto items-center gap-3  border p-3 border-gray-500 text-gray-300 bg-stone-800 rounded-2xl hidden lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`p-2 rounded-lg transition-all ${
              currentPath === item.to
                ? "bg-white text-gray-700"
                : "hover:bg-white hover:text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* {Mobile view} */}
      <div className="lg:hidden ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-transform duration-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
      <div className="absolute top-24 left-0 w-full bg-stone-800 px-6 py-4 z-50 lg:hidden flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-md text-sm ${
                currentPath === item.to
                  ? "bg-white text-gray-800"
                  : "text-white hover:bg-white hover:text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
