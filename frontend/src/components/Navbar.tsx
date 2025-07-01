import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

function Navbar(){

  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between font-medium bg-black">
      <img
        src={assets.logo}
        className="w-43 m-2 ml-4"
        alt="Logo"
      />
      <div className="flex items-center gap-10">
        <ul className=" hidden sm:flex gap-5 text-sm text-white">
          <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/login' className="flex flex-col items-center gap-1">
            <p>Login</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
        </ul>
        
        <div className="flex items-center gap-5 mr-5">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
          <Link to='/cart' className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">7</p>
          </Link>
          <div className="group relative">
            <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col w-36 bg-black text-white rounded">
                <p className="cursor-pointer px-3 py-1 border-b hover:bg-slate-500">My Profile</p>
                <p className="cursor-pointer px-3 py-1 border-b hover:bg-slate-500">Orders</p>
                <p className="cursor-pointer px-3 py-1 pb-2 hover:bg-slate-500">LogOut</p>
              </div>
            </div>
          </div>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${visible ? 'w-50' : 'w-0'}`}>
          <div className="flex flex-col text-white">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-b" to='/'>
              Home
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-b" to='/about'>
              About
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-b" to='/collection'>
              Collection
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border-b" to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;