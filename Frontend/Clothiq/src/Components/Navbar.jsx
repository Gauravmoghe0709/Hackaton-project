import { NavLink } from "react-router-dom"
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <h1 className="text-2xl font-bold text-blue-600">Clothiq</h1>

        <button  onClick={() => setOpen(!open)} className="md:hidden text-2xl text-white">
          ☰
           </button>

        <div className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block font-mono`}>
          <NavLink to="/" className="block py-1 text-gray-100 hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="block py-1 text-gray-100 hover:text-blue-600">About</NavLink>
          <NavLink to="/login" className="block py-1 text-gray-100 hover:text-blue-600">Login</NavLink>
          
          
          
        </div>
      </div>
 
    </>
  )
}

export default Navbar



