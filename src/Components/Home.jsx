import React, { useRef} from "react";

import "../index.css";
import Herocarousel, {
  ConatctUs,
  Footer,
  ProgrameRecomnd,
  ReviewsSection,
  TopMentors,
  FrequentlyAsked,
} from "./HomeParts";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { SmallNavBar } from "./NavBar";
import Chatbot from "./chatBot";

const HeroSection = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  function CountdownTimer() {
    const THREE_HOURS_IN_SECONDS = 3 * 60 * 60;
    const [timeLeft, setTimeLeft] = useState(THREE_HOURS_IN_SECONDS);
  
    useEffect(() => {
      if (timeLeft <= 0) return;
  
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer); // cleanup
    }, [timeLeft]);
  
    // Convert seconds to HH:MM:SS
    const formatTime = (seconds) => {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      return `${hrs}:${mins}:${secs}`;
    };
  
    return (
      <div className="text-3xl font-bold text-center">
        {formatTime(timeLeft)}
      </div>
    );
  }
  return (
    <div>
      <div class="h-[calc(100vh-7rem)] bg-[#7c6cd9] flex flex-col items-center   rounded-br-[25%] ">
      <Herocarousel contactRef={contactRef} />
        
        <div className="text-center text-white  text-lg sm:text-5xl font-bold mt-10">Your Journey, Our Guidance</div>
        <div className="text-2xl font-semibold mt-4">Book your first<b className="text-2xl"> Free</b>  guide right now instantlly </div>
        <div className="my-2">{CountdownTimer()}</div>
        <button className="border-2 m-5 p-3 rounded-xl bg-white shadow-lg shadow-black font-semibold animate-bounce"  onClick={scrollToContact}>click Here to book</button>
      </div>
      <div className="text-center mt-10 font-bold text-2xl ">Upcoming Events</div>
      <div class="w-full h-[650px] sm:h-[300px] flex flex-col sm:flex-row gap-3 justify-center overflow-hidden ">
       
        <div class="h-[165px] sm:h-full w-[300px] relative">
          <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">
              There are upcoming live events are coming up ...
            </p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2" onClick={()=>alert("No live events available right now")}>
              Readmore
            </button>
          </div>
          <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img
              src="src/Images/events.png"
              alt="Hello"
              class=" h-[45px] w-[45px] "
            />
          </div>
        </div>

        <div class="h-[165px] sm:h-full w-[300px] relative">
          <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">
              There are upcoming live events are coming up ...
            </p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2  " onClick={()=>alert("No live events available right now")}>
              Readmore
            </button>
          </div>
          <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img
              src="src/Images/events.png"
              alt="Hello"
              class=" h-[45px] w-[45px] "
            />
          </div>
        </div>

        <div class="h-[165px] sm:h-full w-[300px] relative">
          <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">
              There are upcoming live events are coming up ...
            </p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2  " onClick={()=>alert("No live events available right now")}>
              Readmore
            </button>
          </div>
          <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img
              src="src/Images/events.png"
              alt="Hello"
              class=" h-[45px] w-[45px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {isMobile ? <SmallNavBar /> : <NavBar />}
      <HeroSection contactRef={contactRef} />
      <ProgrameRecomnd />
      <div className="text-center font-bold text-2xl mb-4">Top Mentors of the Week</div>
      <TopMentors />
      <div ref={contactRef}>
      <ConatctUs />
      </div>
      <div className="text-center font-bold text-2xl">Reviews Section</div>
      <ReviewsSection />
      <div className="text-center font-bold text-2xl">Frequently asked questions</div>
      <FrequentlyAsked />
      <Footer />
      <Chatbot />
    </div>
  );
};


export default Home;
