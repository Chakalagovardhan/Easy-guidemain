import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../index.css';





const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Example: Check login from localStorage or a token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);  // If token exists, user is logged in
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/userlogin');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="h-[100px]">
      <div className="bg-[#7c6cd9] w-full flex justify-between border-b-2 border-b-white rounded-b-lg z-10">
        {/* Left side: logo and brand */}
        <div>
          <ul className="flex justify-start">
            <li className="text-white w-[60px] m-5 hover:bg-zinc-700 overflow-hidden font-bold">
              <Link to="/" onClick={() => console.log("clicked the image")}>
                <img src="src/Images/easyguidelogo.png" alt="Logo" className="rounded-lg h-full" />
              </Link>
            </li>
            <li className="text-white h-1/2 p-2 m-5 hover:bg-zinc-700 rounded font-bold">
              <NavLink to="/communities"  className={({isActive})=>isActive?"active-link" : ""}>communities</NavLink>
            </li>
          </ul>
        </div>

        {/* Right side: links */}
        <div className="relative">
          <ul className="flex justify-end">
            <li className="text-white p-2 m-5 hover:bg-zinc-700 rounded font-bold">
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            </li>
            <li className="text-white p-2 m-5 hover:bg-zinc-700 rounded font-bold">
              <NavLink to="/resource" className={({ isActive }) => isActive ? "active-link" : ""}>Resource</NavLink>
            </li>
            <li className="text-white p-2 m-5 hover:bg-zinc-700 rounded font-bold">
              <NavLink to="/mentorbook" className={({ isActive }) => isActive ? "active-link" : ""}>Mentoring</NavLink>
            </li>
           {
            isLoggedIn && (
               <li className="text-white p-2 m-5 hover:bg-zinc-700 rounded font-bold">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>My Learning</NavLink>
            </li>
            )
           }

            {/* LOGIN / ACCOUNT DROPDOWN */}
            <li className="text-white p-2 m-5 hover:bg-zinc-700 rounded font-bold relative">
              {isLoggedIn ? (
                
                <button onClick={toggleDropdown}>My Account</button>
              ) : (
                <NavLink to="/userlogin" className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink>
              )}

              {isLoggedIn && showDropdown && (
                <div className="absolute right-0 top-[60px] bg-white text-black w-[150px] shadow-lg rounded z-50">
                  <ul className="flex flex-col p-2 text-left">
                    <li className="hover:bg-gray-200 p-2 cursor-pointer">My Profile</li>
                    <li className="hover:bg-gray-200 p-2 cursor-pointer">Settings</li>
                    <li className="hover:bg-gray-200 p-2 cursor-pointer" onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


const SmallNavBar =()=>{
  return(
    <>
    <div className='flex justify-between h-[50px] bg-gray-700 '>
      <button>
      <img src="src/Images/minNavbar.png" alt="" className='h-[30px] w-[40px] my-auto mx-3' />
      </button>
      <a href="" className='w-[40px] my-auto '>
      <img src="src/Images/easyguidelogo.png" alt=""  />
      </a>
      
      
    </div>
    </>
  );
}

export default NavBar
export 
{
  SmallNavBar
};
