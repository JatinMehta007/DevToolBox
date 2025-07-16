
import { label } from "motion/react-client";
import { Link, useLocation } from "react-router-dom"

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
        { label: "Command", to:"/commands"}
    ]
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-stone-900 px-20  h-24 flex items-center justify-between  ">
            <p className="text-xl font-black font-p2p text-white">DevToolbox</p>
            
            <div className=" flex justify-center items-center gap-3  border p-3 border-gray-500 text-gray-300 bg-stone-800 rounded-2xl">
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