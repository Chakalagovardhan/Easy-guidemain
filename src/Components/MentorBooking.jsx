import axios from "axios";
import React from "react";
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MentorBooking = () => {

const {userId} = useParams();
const [mentor ,setMentor] = useState(null);

useEffect(()=>{

const fetchMentor = async ()=>{
  const url=`http://localhost:8080/user/getmentor/${userId}`;
  try {

    const response= await axios.get(url,{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    });
    setMentor(response.data);
  } catch (error) {

    console.log("Error in fetching in mentor");
    
  }
}
if(userId)
  fetchMentor();

},[userId]);


if(!mentor)
  return <div className="text-center">Loading mentor details...</div>;


  return (
    <div className=" min-h-screen py-4 overflow-auto flex justify-center">
      <div className="w-[95%] sm:w-[80%] sm:min-h-[80%] bg-[#f1f0fe] mx-auto rounded-md grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 shadow-2xl shadow-black">
        {/* Image Section */}
        <div className="w-full max-h-[500px] bg-gray-600  flex flex-col items-center  p-1 m-2 sm:row-span-2 justify-evenly rounded-md ">
          
          <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] bg-black my-2 rounded-full"></div>
          <div className="flex flex-col ">
          <p className="place-self-start">name:{mentor.userName}</p>
          <p>rating:{mentor.ratting}

          </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-evenly h-auto w-full py-4 ">
          <img
                src="src/Images/instagram.png"
                alt="no"
                className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
              />
               <img
                src="src/Images/Github.png"
                alt="no"
                className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
              />
               <img
                src="src/Images/Linkedin.png"
                alt="no"
                className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
              />
               <img
                src="src/Images/Email.png"
                alt="no"
                className="w-4 h-4 sm:w-8 sm:h-8 rounded-md"
              />
          </div>
        </div>

        {/* About Section */}
        <div className="w-full bg-gray-600 p-4 m-2 sm:col-span-2 rounded-md">
          {mentor.about}
        </div>

        {/* Skills Section */}
        <div className="w-full bg-gray-600 p-4 m-2 rounded-md">skills</div>

        {/* Video Mentoring */}
        <div className="w-full bg-gray-600 p-4 m-2  flex gap-2 rounded-md">
          
          <img src="src/Images/VideoCall.png" alt="" className=" w-[90px] h-[90px] rounded-full my-auto "/>
          <div className=" w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out">book now</button>
          </div>
          </div>

        {/* Resume Guide or carrer guide */}
        <div className="w-full bg-gray-600 p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          
        <img src="src/Images/Resume.png" alt="" className=" w-[90px] h-[90px] rounded-full my-auto "/>
        <div className="w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out">book now</button>
          </div>
          </div>

        {/* Referral */}
        <div className="w-full bg-gray-600 p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          
        <img src="src/Images/Referal.png" alt="" className=" w-[90px] h-[90px] rounded-full my-auto "/>
        <div className=" w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out">book now</button>
          </div>
          </div>

        {/* Mock interview */}
        <div className="w-full bg-gray-600 p-4 m-2 md:h-[250px] flex gap-2 rounded-md">
          
        <img src="src/Images/message.png" alt="" className=" w-[90px] h-[90px] rounded-full my-auto "/>
          <div className="w-[70%]  py-2 flex flex-col justify-between mx-auto rounded-md">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto rounded-xl hover:scale-110  transition duration-700 ease-in-out">book now</button>
          </div>
          </div>
      </div>
    </div>
  );
};



const BookingSlots = () => {
  const [dates, setDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  useEffect(() => {
    // Generate next 7 days from today
    const today = new Date();
    const weekDates = Array.from({ length: 7 }, (_, i) => {
      let date = new Date();
      date.setDate(today.getDate() + i);
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
        date: date.getDate(),
        fullDate: date.toISOString().split("T")[0],
      };
    });
    setDates(weekDates);
    setSelectedDate(weekDates[0].fullDate);
    
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetch(`/admin/getpreviousSlots/${id}`)
        .then((res) => res.json())
        .then((data) => setTimeSlots(data));
    }
  }, []);

  const handleBooking = () => {
    if (!selectedTime) return;
    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
  };
  
  

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Booking slots</h2>
      <div className="flex space-x-2 mb-4">
        {dates.map((d) => (
          <button 
            key={d.fullDate}
            className={`p-4 rounded-full w-16 h-16 text-center text-sm font-bold ${
              selectedDate === d.fullDate ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={() => setSelectedDate(d.fullDate)}
            
          >
            {d.day} <br /> {d.date}
          </button>
        ))}
      </div>
      <div className="flex space-x-2 mb-4">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            className={`px-4 py-2 rounded-full text-sm ${
              slot.booked
                ? "bg-red-400 text-white cursor-not-allowed"
                : selectedTime === slot.time
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
            disabled={slot.booked}
            onClick={() => setSelectedTime(slot.time)}
          >
            {slot.time}
          </button>
        ))}
      </div>
      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-6 py-2 rounded-full "
        disabled={!selectedTime}
      >
        Book an appointment
      </button>
    </div>
  );
};

const RattingSection = () => {
  const cards=[1,2,3];
  return (
    <div className="w-full  h-auto p-3 ">
      <div className="flex flex-row flex-wrap gap-4 md:gap-6 lg:gap-8">
        {/* Rating Card 1 */}
        {
          cards.map((card,index)=>(
            <div className="shadow-md shadow-black border-2 border-green-500 w-full md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-24px)] p-4 rounded-lg min-h-[200px]" key={index}>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Name: user</span>
            <span>{"⭐".repeat(4)}</span>
          </div>

          <p className="text-justify text-sm">
            fjbjwebfjewjfn wrjwejprjo wefbwef wefmwef wefnvl vvfnweifhewwif fwjf j ijnijninbbnjubjb kjbjbji jibijnkjkjbnkj ijbjibkjbkjb j kj kjb  ijj  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa.
          </p>
        </div>
          ))
        }
        
      </div>
    </div>
  );
};



export default MentorBooking;

export  {
  BookingSlots,RattingSection
};
