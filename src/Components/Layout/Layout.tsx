import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import menuItems from './SideBarContent';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from "react";

type LayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  let token: any =localStorage.getItem('user')
  token=JSON.parse(token)?.accessToken?.token
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const handleClick = (path: string) => {
   if(path === 'logout'){
    localStorage.removeItem('user')
    navigate("/login")
   }else{
    console.log("===== lasjdfz",path);
    
     // Navigate to the specified path
     navigate(path);
   }
  }
  useEffect(()=>{
    if(!token){
      return navigate("/login")
    }
  },[token])
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="bg-primeBGColor w-64 p-4 overflow-y-auto" style={{ boxShadow: 'rgba(12, 21, 59, 0.2) 2px 0px 0px 1px' }}>
        <nav>
          <div style={{marginLeft:'30%'}}>
        <button 
        className="bg-white text-primeColor hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
            <CgProfile size={20} className="mr-2" /> Profile
          </button>
          </div>

          <ul className="flex flex-col p-4 text-gray-800 box-shadow">
         
            {menuItems.map(({ icon, text, path }, index) => (
              <li key={index} className="py-4" style={{ boxShadow: '2px 2px 0px 0px rgba(31, 7, 87, 0.1)' }}>
                <div className="text-xl text-primeTextColor flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-primeColor hover:bg-white hover:w-[70%] hover:w-70 shadow-right-prime" onClick={() => handleClick(path)}>
                  {icon} {text}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">

        {/* Navbar */}
        <div className="flex justify-between items-center p-4 pb-6 shadow-sm z-20 relative top-[0px] bg-primeColor opacity-90" style={{ boxShadow: '0px 2px 2px 1px rgba(31, 7, 87, 0.2)' }}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white">
            Gaming <span className="font-bold text-white">Arena</span>
          </h1>

          {/* Search Input */}
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25} />
            <input
              className="bg-transparent p-2 w-full focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* Cart button */}
          <button 
        onClick={toggleProfileDropdown}
          className="bg-white text-primeColor hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
            <CgProfile size={20} className="mr-2" /> Profile
          </button>
          {showProfileDropdown && 

              <div className="absolute text-white right-1 pt-3 pb-3 bg-primeBGColor w-48 rounded-lg shadow-lg" style={{marginTop:'13.5rem'}}>
              {/* Profile dropdown content */}
              {/* This could contain user info, settings, etc. */}
              <ul>
              <li className="p-1 flex justify-center cursor-pointer" onClick={() => handleClick("/profile")}>Profile</li>
              <li className="p-1 flex justify-center cursor-pointer" onClick={() => handleClick("/settings")}>Settings</li>
              <li className="p-1 flex justify-center cursor-pointer" onClick={() => handleClick("logout")}>Logout</li>
              {/* Add more items as needed */}
              </ul>
              </div>

              }
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          {children}
        </div>

      </div>
    </div>
  );
}
