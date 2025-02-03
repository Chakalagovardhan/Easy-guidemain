import React from "react";
import "../index.css";
import "./NavBar";
import NavBar from "./NavBar";
import "./mentoring.css";
import { useState } from 'react';



const ProfileCard = () => {
  return (
    <div class="w-[250px] h-[300px] border-2  m-5 flex flex-col  bigger-main rounded-lg overflow-hidden">
        <div class="flex flex-col items-center justify-center bg-green-600 flex-1"> 
            <img src="./Images/IMG_20221023_200105_167.jpg" alt="" class="bg-black w-[80px] h-[80px] rounded-full object-cover overflow-hidden" />
            <span class="m-1 font-semibold">Govardhan sai</span>
        </div>
        <div class="bg-yellow-600 w-full h-full flex-1 flex flex-col gap-2 p-2">

           <p class="w-full truncate bg-pink-600  ">techiniacl lead efnwkn</p>
           <div class="w-[50px] bg-pink-600 p-1">Rating</div>
           <p class="">DOJ:- 10-2-2005</p>
           <div class="flex-grow"></div>

        {/* <!-- Button aligned to the bottom right --> */}
        <div class="flex justify-end bigger ml-2">
            <a href="" class="bg-blue-600 text-white px-3 py-1 rounded-lg">View details</a>
        </div>
        
    </div>
    </div>
  );
};

const MentorsPortal = () => {
  const filtertoggle = () => {
    const overlay = document.getElementById("overlay");
    const smallFilter = document.getElementById("small-filter");
    const isHidden =
      smallFilter.style.display === "none" || smallFilter.style.display === "";

    if (isHidden) {
      overlay.style.display = "block"; // Show overlay
      smallFilter.style.display = "flex"; // Show filter
    } else {
      overlay.style.display = "none"; // Hide overlay
      smallFilter.style.display = "none"; // Hide filter
    }
  };

  const [selectedValue, setSelectedValue] = useState(0);
  const [mentors, setMentors] = useState([]);

  const handleSizeUsersChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);

    // Generate an array of mentor cards based on selection
    const newMentors = Array.from({ length: value }, (_, index) => ({
      id: index,
      name: `Mentor ${index + 1}`,
      role: "Technical Lead",
      doj: "10-2-2005",
      image: "/default-profile.jpg",
    }));

    setMentors(newMentors);
  };

  React.useEffect(() => {
    const sizeUsersLarge = document.getElementById("sizeusers-large");
    const sizeUsersSmall = document.getElementById("sizeusers-small");

    sizeUsersLarge.addEventListener("change", handleSizeUsersChange);
    sizeUsersSmall.addEventListener("change", handleSizeUsersChange);

    return () => {
      sizeUsersLarge.removeEventListener("change", handleSizeUsersChange);
      sizeUsersSmall.removeEventListener("change", handleSizeUsersChange);
    };
  }, []);

  return (
    <div className="overflow-x-clip">
      <nav className="bg-yellow-600 flex justify-between h-12 w-screen">
        {/* Left side */}
        <div className="w-50px h-full bg-sky-600 mx-5">
          <img src="./easyguidelogo.png" alt="logo" className="w-full h-full" />
        </div>
        {/* Right side */}
        <div className="w-[320px] h-full">
          <ul className="flex justify-evenly items-center h-full">
            <li className="flex-1 text-center">HOME</li>
            <li className="flex-1 text-center">Logo</li>
            <li className="flex-1 text-center">Profile</li>
          </ul>
        </div>
      </nav>

      {/* Filter Button for Small Screens */}
      <button
        id="filter-button"
        onClick={filtertoggle}
        className="flex sm:hidden items-center gap-2 border-2 border-blue-400 rounded-full px-4 py-2 mt-5"
      >
        <img src="./filter.png" alt="" className="w-[15px] h-[15px]" />
        <p className="text-lg font-semibold">Filter</p>
      </button>

      <main>
        <div className="h-auto mx-auto md:w-[950px] mt-10 flex py-5 sm:px-10 border-2 border-slate-800 rounded-lg shadow-xl">
          {/* Large Filter */}
          <div
            className="border border-slate-600 shadow-lg w-[30%] h-[500px] flex flex-col justify-evenly filter-main"
            id="large-filter"
          >
            {/* Filter form */}
            <form action="" className="flex flex-col gap-2 p-2">
              <button
                type="submit"
                className="flex flex-row justify-center items-center gap-2 ml-5 rounded-full mt-5 border-2 border-blue-400 px-4"
              >
                <img src="./filter.png" alt="" className="w-[15px] h-[15px]" />
                <p className="inline text-lg font-semibold">Filter</p>
              </button>
              <label htmlFor="companyName">Company</label>
              <input
                type="text"
                id="companyName"
                className=" border border-gray-300 rounded-md w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="experience">Experience</label>
              <select name="" id="experience" className="w-[50%] rounded">
                <option value="NA" selected>
                  NA
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3</option>
              </select>
              <label htmlFor="experience-range">Experience Range</label>
              <div className="flex flex-col w-[150px]">
                <input
                  type="range"
                  min="1"
                  max="5"
                  id="experience-range"
                  className="rounded w-[150px]"
                  defaultValue="1"
                />
                <ul className="flex justify-between">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
              <label htmlFor="role">Company Role</label>
              <input
                type="text"
                name=""
                id="role"
                className=" border border-gray-300 rounded-md w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="reset"
                className="border-black rounded border w-[60px] px-3"
              >
                Reset
              </button>
            </form>
            <div className="flex flex-col items-center">
              <label htmlFor="sizeusers-large">Number of mentors:</label>
              <select
                id="sizeusers-large"
                className="w-[80px] border border-gray-300 rounded-md"
                value={selectedValue}
                onChange={handleSizeUsersChange}
              >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          {/* Background Overlay */}
          <div id="overlay"></div>

          {/* Small Filter */}
          <section id="small-filter">
            <button
              onClick={filtertoggle}
              className="bg-red-500 text-white rounded-lg px-4 py-2"
            >
              Close
            </button>
            <div className="border border-slate-600 shadow-lg w-[200px] h-[500px] flex flex-col justify-evenly">
              <form action="" className="flex flex-col gap-2 p-2">
                <button
                  type="submit"
                  className="flex flex-row justify-center items-center gap-2 ml-5 rounded-full mt-5 border-2 border-blue-400 px-4"
                >
                  <img
                    src="./filter.png"
                    alt=""
                    className="w-[15px] h-[15px]"
                  />
                  <p className="inline text-lg font-semibold">Filter</p>
                </button>
                <label htmlFor="companyNameSmall">Company</label>
                <input
                  type="text"
                  id="companyNameSmall"
                  className=" border border-gray-300 rounded-md w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="experienceSmall">Experience</label>
                <select
                  name=""
                  id="experienceSmall"
                  className="w-[50%] rounded"
                >
                  <option value="NA" selected>
                    NA
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3</option>
                </select>
                <label htmlFor="roleSmall">Company Role</label>
                <input
                  type="text"
                  name=""
                  id="roleSmall"
                  className=" border border-gray-300 rounded-md w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="reset"
                  className="border-black rounded border w-[60px] px-3"
                >
                  Reset
                </button>
              </form>
              <div className="flex flex-col items-center">
          <label htmlFor="sizeusers-small">Number of mentors:</label>
          <select
            id="sizeusers-small"
            className="w-[80px] border border-gray-300 rounded-md"
            value={selectedValue}
            onChange={handleSizeUsersChange}
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="w-[80%] min-h-[250px] h-auto  profle-box  ">
          <div
              className="w-[98%] mx-auto border-2 border-slate-600 shadow-lg h-auto min-h-[250px] flex flex-row gap-3 p-3 flex-wrap rounded justify-center"
              id="main-body"
            >

              {/* Add your cards here */}
              <div className="flex  flex-wrap gap-2" id="main-body">
            {mentors.map((mentor) => (
              <ProfileCard
                key={mentor.id}
                name={mentor.name}
                role={mentor.role}
                doj={mentor.doj}
                image={mentor.image}
              />
            ))}
          </div>
          </div>
              
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorsPortal;
