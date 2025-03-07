import React from "react";

const MentorBooking = () => {
  return (
    <div className="bg-black min-h-screen py-4 overflow-auto flex justify-center">
      <div className="w-[80%] sm:min-h-[80%] bg-yellow-600 mx-auto rounded-md grid grid-cols-1 sm:grid-cols-3 gap-2 p-3">
        {/* Image Section */}
        <div className="w-full max-h-[500px] bg-pink-500 flex flex-col items-center  p-1 m-2 sm:row-span-2 justify-evenly">
          
          <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] bg-black my-2 rounded-full"></div>
          <div className="flex flex-col ">
          <p className="place-self-start">name:</p>
          <p>rating

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
        <div className="w-full bg-pink-500 p-4 m-2 sm:col-span-2">
          About section
        </div>

        {/* Skills Section */}
        <div className="w-full bg-pink-500 p-4 m-2">Skills of mentor</div>

        {/* Video Mentoring */}
        <div className="w-full bg-pink-500 p-4 m-2  flex gap-2">
          
          <div className="bg-purple-600 w-[48%] "></div>
          <div className="bg-green-500 w-[48%]  py-2 flex flex-col justify-between">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto">book now</button>
          </div>
          </div>

        {/* Resume Guide or carrer guide */}
        <div className="w-full bg-pink-500 p-4 m-2 md:h-[250px] flex gap-2">
          
          <div className="bg-purple-600 w-[48%] "></div>
          <div className="bg-green-500 w-[48%]  py-2 flex flex-col justify-between">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto">book now</button>
          </div>
          </div>

        {/* Referral */}
        <div className="w-full bg-pink-500 p-4 m-2 md:h-[250px] flex gap-2">
          
          <div className="bg-purple-600 w-[48%] "></div>
          <div className="bg-green-500 w-[48%]  py-2 flex flex-col justify-between">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto">book now</button>
          </div>
          </div>

        {/* Chat Mentoring */}
        <div className="w-full bg-pink-500 p-4 m-2 md:h-[250px] flex gap-2">
          
          <div className="bg-purple-600 w-[48%] "></div>
          <div className="bg-green-500 w-[48%]  py-2 flex flex-col justify-between">
            <p className="w-full text-wrap">bookREsumeguide gfhjfjhjhvhjvhjvhjhkv bkjkjbkjbjkb kjbkj bkjbk jbkjbkjbkjbkjbkjbkjbk</p>
            <button className="bg-blue-600 text-white p-2 w-[80%] mx-auto">book now</button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default MentorBooking;
