import React from 'react'
import '../index.css';
import { NavLink } from 'react-router-dom'




const NavBar = () => {
  return (
    <div>
        <div class=" bg-[#7c6cd9] flex sticky top-0 justify-between border-b-2 border-b-white rounded-b-lg z-10">
        <div >
          <ul class=" flex justify-start mx-3">
            <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold">Hello</li>
            <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold">Mummy</li>
          </ul> 
        </div>

        <div>
            <ul class=" flex justify-end">
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li class="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/userlogin" className={({isActive})=>isActive ?"active-link":""}>Login</NavLink></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default NavBar
