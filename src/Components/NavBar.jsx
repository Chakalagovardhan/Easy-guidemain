import React from 'react'
import '../index.css';
import { NavLink } from 'react-router-dom'




const NavBar = () => {
  return (
    <div>
        <div class=" bg-[#7c6cd9] flex sticky top-0 justify-between border-b-2 border-b-white rounded-b-lg z-10">
        <div >
          <ul class=" flex justify-start ">
            <li class="text-white w-[60px]  m-5 hover:bg-zinc-700 overflow-hidden  font-bold">
              <img src="src/Images/easyguidelogo.png" alt="" className=' rounded-lg h-full'/>
              </li>
            <li class="text-white h-1/2  p-2 m-5 hover:bg-zinc-700  rounded font-bold">Mummy</li>
          </ul> 
        </div>

        <div>
            <ul class=" flex justify-end">
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/about" className={({isActive})=>isActive ?"active-link":""}>About</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/mentorbook" className={({isActive})=>isActive ?"active-link":""}>Mentoring</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/contact" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/userlogin" className={({isActive})=>isActive ?"active-link":""}>Login</NavLink></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default NavBar
