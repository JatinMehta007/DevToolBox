import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-stone-900 px-20  h-24 flex items-center justify-between  ">
            <p className="text-xl font-black font-p2p text-white">DevToolbox</p>
            
            <div className=" flex justify-center items-center gap-3  border p-3 border-gray-500 text-gray-300 bg-stone-800 rounded-2xl">
            <Link to="/" className="hover:bg-white p-2 rounded-lg  hover:text-gray-700">Home</Link>
            <Link to="/ui" className="hover:bg-white p-2 rounded-lg  hover:text-gray-700" >UI</Link>
            <Link to="/icons" className=" p-2 rounded-lg hover:bg-white hover:text-gray-700">Icons</Link>
            <Link to="/fonts" className="p-2 rounded-lg hover:bg-white hover:text-gray-700">Fonts</Link>
            <Link to="/colors" className=" p-2 rounded-lg hover:bg-white hover:text-gray-700">Colors</Link> 
            <Link to="/tools" className=" p-2 rounded-lg hover:bg-white hover:text-gray-700">Tools</Link>
            <Link to="/logos" className=" p-2 rounded-lg hover:bg-white hover:text-gray-700">Logos</Link>
            {/* <Link to="/logos" className=" p-2 rounded-lg hover:bg-white hover:text-gray-700">Command</Link> */}
            </div>
            </div>
        
    )
}