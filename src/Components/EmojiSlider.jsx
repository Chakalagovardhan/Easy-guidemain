import React, { useEffect, useState } from "react";


const EmojiSlider = () => {
    const totalDots = 5;
    const [selected, setSelected] = useState(1);

    useEffect(()=>{
      console.log(selected);
    },[selected]);
  
    return (

        
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-bold">How confident are you in Arrays?</h3>
  
        <div className="flex items-center w-full max-w-md justify-between relative">
          {Array.from({ length: totalDots }, (_, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-full text-2xl 
                z-10 transition-transform duration-300 p-1
                ${i <= selected ? "bg-green-400 scale-110" : "bg-gray-300"}
              `}
            >
              {i <= selected ? <img src="src/Images/coloredBrain.png" /> : <img src="src/Images/grayBrain.png" className="object-cover" />}
            </div>
          ))}
  
          {/* Track Line Behind the Circles */}
          <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-gray-300 rounded-full z-0">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-300 "
              style={{ width: `${(selected / (totalDots - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

       
      </div>
    );
};
export default EmojiSlider;
