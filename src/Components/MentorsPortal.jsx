import React, { useEffect, useState } from "react";
import "../index.css";
import "./NavBar";
import NavBar from "./NavBar";
import "./mentoring.css";
import axios from "axios";

//profile card
const ProfileCard = ({ mentor }) => {
  return (
    <div className="w-[250px] h-[300px] border-2 m-5 flex flex-col bigger-main rounded-lg overflow-hidden">
      <div className="flex flex-col items-center justify-center bg-green-600 flex-1">
        <img src={mentor.imageUrl || profileImage} alt="" className="w-[80px] h-[80px] rounded-full object-cover" />
        <span className="m-1 font-semibold">{mentor.name}</span>
      </div>
      <div className="bg-yellow-600 w-full h-full flex-1 flex flex-col gap-2 p-2">
        <p className="w-full truncate bg-pink-600">{mentor.role}</p>
        <div className="w-[50px] bg-pink-600 p-1">{mentor.rating}</div>
        <p>DOJ: {mentor.doj}</p>
        <div className="flex-grow"></div>
        <div className="flex justify-end bigger ml-2">
          <a href="#" className="bg-blue-600 text-white px-3 py-1 rounded-lg">View details</a>
        </div>
      </div>
    </div>
  );
};

// filter button functionality for small screens
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

//filter form component
const FilterComponent = ({ filters, setFilters, selectedValue, setSelectedValue,setMentors }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((previousdata) => ({
      ...previousdata,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Modify the data (e.g., capitalize the first letter of the company name)
    const modifiedFilters = {
      ...filters,
      company: filters.Working_company
        ? filters.Working_company.charAt(0).toUpperCase() + filters.Working_company.slice(1)
        : "",
        profession: filters.working_role,
        rating: filters.user_rating,
        experience: filters.domain_experience

    };

    try {
      // Send the modified data to the backend
      const response = await axios.get(
        "http://localhost:8080/user/get-user", // Replace with your backend endpoint
        modifiedFilters, // Send the modified data as the request body
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          withCredentials: true, // Include credentials if needed
        }
      );
      console.log("API Response:", response); 
      if(response.data && response.status !==204)
        setMentors( response.data);
      else
        setMentors([]);
      
    } catch (error) {
      console.error("Error sending data to backend:", error);
      alert("Failed to send data. Please try again.");
    }
  };


  return (
    <>
      <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="flex flex-row justify-center items-center gap-2 ml-5 rounded-full mt-5 border-2 border-blue-400 px-4"
        >
          <img src="./filter.png" alt="" className="w-[15px] h-[15px]" />
          <p className="inline text-lg font-semibold">Filter</p>
        </button>

        <label htmlFor="Working_company">Company</label>
        <input
          type="text"
          id="Working_company"
          name="Working_company"
          value={filters.Working_company}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="domain_experience">Experience</label>
        <select
          name="domain_experience"
          id="domain_experience"
          value={filters.domain_experience}
          onChange={handleFilterChange}
          className="w-[50%] rounded"
        >
          <option value="NA">NA</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value=">3">3</option>
        </select>

        <label htmlFor="user_rating">Experience Range</label>
        <div className="flex flex-col w-[150px]">
          <input
            type="range"
            id="user_rating"
            name="user_rating"
            value={filters.user_rating}
            min="1"
            max="5"
            onChange={handleFilterChange}
            className="rounded w-[150px]"
          />
          <ul className="flex justify-between">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>

        <label htmlFor="working_role">Company Role</label>
        <select
          name="working_role"
          id="working_role"
          value={filters.working_role}
          onChange={handleFilterChange}
        >
          <option value="Software engineer">Software engineer</option>
          <option value="Backend developer">Backend developer</option>
          <option value="Web developer">Web developer</option>
          <option value="AI/ML Engineer">AI/ML Engineer</option>
          <option value="Devops Engineer">Devops Engineer</option>
          <option value="Blockchain engineer">Blockchain engineer</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Java developer">Java developer</option>
          <option value="Python developer">Python developer</option>
          <option value="H.R">H.R</option>
          <option value="Non-IT">Non-IT</option>
          <option value="Others">Others</option>
        </select>

        <button
          type="reset"
          className="border-black rounded border w-[60px] px-3"
          onClick={() => setFilters({
            Working_company: "",
            domain_experience: "NA",
            user_rating: "",
            userCount: 0,
            working_role: "",
          })}
        >
          Reset
        </button>

        <div className="flex flex-col items-center">
          <label htmlFor="usersCount">Number of mentors:</label>
          <select
            id="usersCount"
            name="usersCount"
            className="w-[80px] border border-gray-300 rounded-md"
            value={selectedValue}
            onChange={(e) => setSelectedValue(parseInt(e.target.value, 10))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </form>
    </>
  );
};

//main ui
const MentorsPortal = () => {
  const [filters, setFilters] = useState({
    Working_company: "",
    domain_experience: "NA",
    user_rating: "",
    userCount: 10,
    working_role: "",
  });
  const [selectedValue, setSelectedValue] = useState(0);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    if (selectedValue === 0) return;

    const url = "http://localhost:8080/user/get-user";
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        if (response.data == 0) {
          setMentors([]);
        } else {
          setMentors(response.data);
        }
      })
      .catch((error) => console.error("CORS Error:", error));
  }, [filters, selectedValue]);

 

  return (
    <div className="overflow-x-clip">
      <NavBar />

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
            id="large-filter"
            className="border border-slate-600 shadow-lg w-[30%] h-[500px] flex flex-col justify-evenly filter-main"
          >
            {/* Filter form */}
            <FilterComponent
              filters={filters}
              setFilters={setFilters}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              setMentors={setMentors}
            />
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
              <FilterComponent
                filters={filters}
                setFilters={setFilters}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
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
                {mentors.length == 0 ? (
                  <p>NO data matched</p>
                ) : (
                  mentors.map((mentor) => (
                    <ProfileCard
                      key={mentor.userId}
                      mentor={mentor}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorsPortal;