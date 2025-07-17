
import { Link, useLocation, useNavigate } from "react-router-dom"
import { SearchBar } from "./searchBar";

export const Navbar=()=>{
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { label: "Home", to:"/"},
        { label: "UI", to:"/ui"},
        { label: "Icons", to:"/icons"},
        { label: "Fonts", to:"/fonts"},
        { label: "Colors", to:"/colors"},
        { label: "Tools", to:"/tools"},
        { label: "Logos", to:"/logos"},
        { label: "Command", to:"/commands"},
        { label: "DevAI", to:"/ai"}
    ]

    const navigate = useNavigate();
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-stone-900 px-10  h-24 flex items-center   ">
            <p onClick={()=>{
                navigate("/");
            }} className="text-xl cursor-pointer font-black font-p2p text-white">DevToolbox</p>
            <SearchBar></SearchBar>
            
            <div className=" flex justify-center ml-auto items-center gap-3  border p-3 border-gray-500 text-gray-300 bg-stone-800 rounded-2xl">
                {navItems.map((item)=>(
                    <Link
                        key={item.to}
                        to={item.to}
                        className={`p-2 rounded-lg transition-all ${
                            currentPath === item.to ? "bg-white text-gray-700" : "hover:bg-white hover:text-gray-700"
                        }`}
                        >{item.label}</Link>
                ))}
            </div>
            </div>
        
    )
}