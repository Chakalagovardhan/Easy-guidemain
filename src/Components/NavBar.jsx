import React from 'react'
import '../index.css';
import { NavLink ,Link} from 'react-router-dom'




const NavBar = () => {
  return (
    <div className="h-[100px] " >
        <div className=" bg-[#7c6cd9] w-full flex   justify-between border-b-2 border-b-white rounded-b-lg z-10">
        <div >
          <ul className=" flex justify-start ">
            <li className="text-white w-[60px]  m-5 hover:bg-zinc-700 overflow-hidden  font-bold">
            <Link to="/" onClick={()=>console.log("clickde the image")}>
  <img src="src/Images/easyguidelogo.png" alt="Logo" className="rounded-lg h-full"/>
</Link>

              </li>
            <li className="text-white h-1/2  p-2 m-5 hover:bg-zinc-700  rounded font-bold">Mummy</li>
          </ul> 
        </div>

        <div>
            <ul className=" flex justify-end">
                <li className="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/" className={({isActive})=>isActive ?"active-link":""}>Home</NavLink></li>
                <li className="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/about" className={({isActive})=>isActive ?"active-link":""}>About</NavLink></li>
                <li className="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/mentorbook" className={({isActive})=>isActive ?"active-link":""}>Mentoring</NavLink></li>
                <li className="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/contact" className={({isActive})=>isActive ?"active-link":""}>My Learning</NavLink></li>
                <li className="text-white  p-2 m-5 hover:bg-zinc-700  rounded font-bold"><NavLink to="/userlogin" className={({isActive})=>isActive ?"active-link":""}>Login</NavLink></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

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
