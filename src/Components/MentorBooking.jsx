import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../configurations/AxiosInstance";

import defaultImage from "/src/Images/deafultImage.png";

import instagramIcon from "/src/Images/instagram.png";
import GithubIcon from "/src/Images/Github.png";
import emialIcon from "/src/Images/Email.png";
import linkedinIcon from "/src/Images/Linkedin.png";
import referalIcon from "/src/Images/Referal.png";
import videoCallIcon from "/src/Images/VideoCall.png";
import resumeIcon from "/src/Images/Resume.png";
import interviewIcon from "/src/Images/interview.png";


const MentorBooking = () => {
  const { userId } = useParams();
  const [mentor, setMentor] = useState(null);
  const [slots, setSlots] = useState(null);

  const navigate = useNavigate();
  const skills=[
    "Java,python,C++",
    "Devops",
    "AI/ML"
  ];
  useEffect(() => {
    const fetchMentor = async () => {
      const url = `http://localhost:8080/user/getmentor/${userId}`;

      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        setMentor(response.data);
      } catch (error) {
        console.log("Error in fetching in mentor");
      }
    };
    if (userId) fetchMentor();
  }, [userId]);

  const bookMentor = async () => {
    const url2 = `/user/get_mentor_slots/${userId}`;
    try {
      const mentorTimings = await axiosInstance.get(url2, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const avaialbeSlots = mentorTimings.data?.slots.filter(
        (slot) => slot.bookingStatus === false
      );
      if (avaialbeSlots && avaialbeSlots.length > 0) {
        setSlots(avaialbeSlots);
        console.log(avaialbeSlots);
        navigate(`/mentorprofileview/${userId}/book`, {
          state: { slots: avaialbeSlots, mentorId: userId },
        });
        window.scrollTo({
          top: 5000,
          behavior: "smooth",
        });
      } else {
        alert("This mentor doesn't support mentoring right now");
      }
    } catch (error) {
      console.log(error);
      alert("Error fetching mentor data");
    }
  };

  if (!mentor)
    return <div className="text-center">Loading mentor details...</div>;

  return (
    <div className=" min-h-screen py-4 overflow-auto flex justify-center">
      <div className="w-[95%] sm:w-[80%] sm:min-h-[80%] bg-[#f1f0fe] mx-auto rounded-md grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 shadow-2xl shadow-gray-400">
        {/* Image Section */}
        <div className="w-full max-h-[500px] bg-[#E5D9F2]  flex flex-col items-center  p-1 m-2 sm:row-span-2 justify-evenly rounded-md ">
          <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]  my-2 rounded-full overflow-hidden">
            <img src={defaultImage} alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="place-self-start">
              <b>Mentor Name : </b> {mentor.userName}
            </p>
            <p>
              <b>Mentor Id :</b> {userId}
            </p>
            <p>
              <b>Rating : </b>
              {mentor.ratting}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-evenly h-auto w-full py-4 ">
            <img
              src={instagramIcon}
              alt="insta"
              className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
            />
            <img
              src={GithubIcon}
              alt="no"
              className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
            />
            <img
              src={linkedinIcon}
              alt="no"
              className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
            />
            <img
              src={emialIcon}
              alt="no"
              className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2 sm:col-span-2 rounded-md">
          <p><b>About Me</b></p>
          {mentor.about}
        </div>

        {/* Skills Section */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2 rounded-md"><b>skills</b>
        {
          skills.map((skill,index)=>(
            <p><b>. </b>{skill}</p>
          ))
        }
        </div>

        {/* Video Mentoring */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2  flex gap-2 rounded-md">
          <img
            src={videoCallIcon}
            alt=""
            className=" w-[90px] h-[90px] rounded-full my-auto "
          />
          <div className=" w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p><b>Video call</b></p>
            <p className="w-full text-wrap">
              Video call Doubt clarification from all your doubts and mentorship
              for all things in one pack
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out"
              onClick={bookMentor}
            >
              book now
            </button>
          </div>
        </div>

        {/* Resume Guide or carrer guide */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          <img
            src={resumeIcon}
            alt=""
            className=" w-[90px] h-[90px] rounded-full my-auto "
          />
          <div className="w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p><b>Resume Guide</b></p>
            <p className="w-full text-wrap">
              Get your Resume tailed form the mentor to make stand out from the
              crowd while selection in the interviews
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out"
              onClick={bookMentor}
            >
              book now
            </button>
          </div>
        </div>

        {/* Referral */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          <img
            src={referalIcon}
            alt=""
            className=" w-[90px] h-[90px] rounded-full my-auto "
          />
          <div className=" w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p><b>Referral</b></p>
            <p className="w-full text-wrap">
              Get Referal from the mentor from the current working company or
              worked as a Employee in past companies
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out"
              onClick={bookMentor}
            >
              book now
            </button>
          </div>
        </div>

        {/* Mock interview */}
        <div className="w-full bg-[#E5D9F2] p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          <img
            src={interviewIcon}
            alt=""
            className=" w-[90px] h-[90px] rounded-full my-auto "
          />
          <div className="w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p><b>Mock Interview</b></p>
            <p className="w-full text-wrap">
              Get one to one mock interview With the mentor and clear all your
              doubts
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out"
              onClick={bookMentor}
            >
              book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingSlots = () => {
  const location = useLocation();
  const [dates, setDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const scrollRef = useRef();

  // Get slots passed from previous component
  const slots = location.state?.slots || [];
  const mentorId = location.state?.mentorId || "";

  useEffect(() => {
    // Generate next 7 days from today
    const today = new Date();
    const next7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return {
        day: date
          .toLocaleDateString("en-US", { weekday: "short" })
          .toUpperCase(),
        date: date.getDate(),
        fullDate: date.toISOString().split("T")[0],
        weekday: date
          .toLocaleDateString("en-US", { weekday: "long" })
          .toUpperCase(),
      };
    });

    setDates(next7Days);
    setSelectedDate(next7Days[0].fullDate);
  }, []);

  useEffect(() => {
    if (!selectedDate || slots.length === 0) return;

    // Find the selected date object
    const selectedDateObj = dates.find((d) => d.fullDate === selectedDate);
    if (!selectedDateObj) return;

    // Filter slots for the selected weekday (e.g., "TUESDAY")
    const daySlots = slots.filter(
      (slot) => slot.weekday === selectedDateObj.weekday && !slot.bookingStatus
    );

    setAvailableSlots(daySlots);
    setSelectedSlot(null); // Reset selected slot when date changes
  }, [selectedDate, slots, dates]);

  const handleBooking = async () => {
    if (!selectedSlot) return;

    // Here you would typically make an API call to book the slot
    console.log("Booking slot:", {
      start_time: selectedSlot.startTime,
      day: selectedSlot.weekday,
      Id: mentorId,
    });
    try {
      const slotbookUrl = `/user/book-mentor?id=${mentorId}&day=${selectedSlot.weekday}&start_time=${selectedSlot.startTime}`;
      const response = await axiosInstance.post(slotbookUrl);
      console.log("Booking successful:", response.data);
    } catch (error) {
      console.error("Booking failed:", error);
    }
    alert(`Booking confirmed for ${selectedDate} at ${selectedSlot.startTime}`);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto" ref={scrollRef}>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Available Booking Slots
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Select a Date</h3>
        <div className="flex flex-wrap gap-2">
          {dates.map((d) => (
            <button
              key={d.fullDate}
              className={`p-3 rounded-lg w-20 text-center transition-colors ${
                selectedDate === d.fullDate
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedDate(d.fullDate)}
            >
              <span className="block font-bold">{d.day}</span>
              <span className="block">{d.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Available Time Slots</h3>
        {availableSlots.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {availableSlots.map((slot) => (
              <button
                key={`${slot.weekday}-${slot.startTime}`}
                className={`p-3 rounded-lg text-center transition-colors ${
                  selectedSlot?.startTime === slot.startTime
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No available slots for this day</p>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={handleBooking}
          disabled={!selectedSlot}
          className={`px-6 py-3 rounded-lg text-white transition-colors ${
            selectedSlot
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

const RattingSection = () => {
  const reviews = [
    {
      review:"This mentor is close and clear all doubts properly",
      userName:"Sita",
      ratting:4
    },
    {
      review:"He has so much knowledge in the sense of tech and also gives so good pro tips.",
      userName:"Rajesh",
      ratting:3
    },
    {
      review:"He clears all the doubts with patience and provides good approach alternatively.",
      userName:"Revanth",
      ratting:5
    },
    
    
  ];

  return (
    <div className="w-full h-auto p-3">
      <div className="flex flex-row flex-wrap gap-4 md:gap-6 lg:gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="shadow-md shadow-black border-2 border-[#E5D9F2] w-full md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-24px)] p-4 rounded-lg min-h-[200px]"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{review.userName}</span>
              <span>{"⭐".repeat(review.ratting)}</span>
            </div>

            <p className="text-justify text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MentorBooking;

export { BookingSlots, RattingSection };
