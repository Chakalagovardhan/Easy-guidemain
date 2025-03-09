import React from 'react'
import '../index.css';
import Herocarousel, { ConatctUs, Footer, ProgrameRecomnd, ReviewsSection, TopMentors,FrequentlyAsked } from './HomeParts';
import NavBar from './NavBar';
import { useState,useEffect } from 'react';
import { SmallNavBar } from './NavBar';

const HeroSection = () => {
  return (
    <div>
      <div class="h-[calc(100vh-7rem)] bg-[#7c6cd9] flex flex-col items-center   rounded-br-[25%] ">
        <Herocarousel />
        <div className='w-1/2 h-[1px] bg-white mt-10'></div>
        
        
       </div>
       
       
       <div class="w-full h-[650px] sm:h-[300px] flex flex-col sm:flex-row gap-3 justify-center overflow-hidden ">
    <div class="h-[165px] sm:h-full w-[300px] relative">
        <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">There are upcoming live events are coming up ...</p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2">Readmore</button>
        </div>
        <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img src="src/Images/events.png" alt="Hello" class=" h-[45px] w-[45px] " />
        </div>
    </div>
    
    <div class="h-[165px] sm:h-full w-[300px] relative">
        <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">There are upcoming live events are coming up ...</p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2  ">Readmore</button>
        </div>
        <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img src="src/Images/events.png" alt="Hello" class=" h-[45px] w-[45px] " />
        </div>
    </div>
    
    
    <div class="h-[165px] sm:h-full w-[300px] relative">
        <div class="h-[150px] sm:h-[180px] w-[180px]  bg-[#7a6ad7] rounded-lg absolute top-[55px] left-[55px] flex flex-col justify-center items-center p-4 overflow-hidden gap-1">
            <h4 class="text-white">Events</h4>
            <p class="text-white text-pretty text-xs ">There are upcoming live events are coming up ...</p>
            <button class=" bg-[#7c6cd9] p-2 rounded-lg text-xs text-black hover:bg-slate-200 border border-white m-2  ">Readmore</button>
        </div>
        <div class="h-[60px]  bg-[#f1f0fe] w-[60px] rounded-full absolute top-[40px] right-[40px] flex justify-center items-center">
            <img src="src/Images/events.png" alt="Hello" class=" h-[45px] w-[45px] " />
        </div>
    </div>
</div>
    </div>
  )
}


const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <>
        {isMobile ? <SmallNavBar />:<NavBar />}
        <HeroSection />
        <ProgrameRecomnd />
        <TopMentors />
        <ConatctUs />
        <ReviewsSection />
        <FrequentlyAsked />
        <Footer />
      </>
    );
  };

export default Home;
