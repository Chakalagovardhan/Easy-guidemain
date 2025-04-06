import React, { useState } from 'react';
import NavBar from './NavBar';

const SlotAdder = ({ onRemove, onDayChange, day }) => {
  return (
    <>
    <div className='flex justify-between'>
      <select
        name="day"
        id="day"
        value={day} 
        onChange={(e) => onDayChange(e.target.value)}
        className='border-2 border-black rounded-md'
      >
        <option value="Select">Select</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>

      </select>
      <select>
        <option value="1">1:00</option>
        <option value="2">2:00</option>
        <option value="3">3:00</option>
        <option value="4">4:00</option>
        <option value="5">5:00</option>
        <option value="6">6:00</option>
        <option value="7">7:00</option>
        <option value="8">8:00</option>
        <option value="9">9:00</option>
        <option value="10">10</option>
        <option value="11"></option>
        <option value="12"></option>
        <option value="13"></option>
        <option value="14"></option>
        <option value="15"></option>
        <option value="16"></option>
        <option value="17"></option>
        <option value="18"></option>
        <option value="19"></option>
        <option value="20"></option>
        <option value="21"></option>
        <option value="22"></option>
        <option value="23"></option>
        <option value="24"></option>
      </select>
      <button onClick={onRemove} className="bg-red-500 text-white p-2 ml-2 rounded-md">
        Remove Slot
      </button>
      </div>
    </>
  );
};

const MentorslotSetter = () => {
  const [slots, setSlots] = useState([]);

  const addSlot = () => {
    const newSlot = { id: Date.now(), day: 'Select' };
    setSlots([...slots, newSlot]);
  };

  const handleDeleteSlot = (id) => {
    setSlots(slots.filter(slot => slot.id !== id));
  };

  const handleDayChange = (id, day) => {
    setSlots(slots.map(slot => (slot.id === id ? { ...slot, day } : slot)));
  };

  const slotSubmit = () => {
    console.log(slots);
  };

  const removeAllSlots = () => {
    setSlots([]);
  };

  const resetAllSlots = () => {
    const updatedSlots = slots.map(slot => ({ ...slot, day: 'Select' }));
    setSlots(updatedSlots);
  };

  return (
    <>
    
    <NavBar />
      {/* Make the whole window scrollable */}
      <div className=" min-h-screen w-screen overflow-x-hidden overflow-y-auto p-10">
        {/* Mentor Info Section */}
        <div className="h-[150px] sm:h-[300px] w-full bg-gray-400 flex gap-2 sm:gap-10 rounded-md overflow-hidden">
          <div className="sm:w-[20%] sm:h-full flex  justify-center bg-gray-400">
            <img src="" alt="" className="w-[100px] h-[100px] self-center sm:w-[200px] sm:h-[200px] bg-black rounded-full" />
          </div>
          <div className="flex flex-col gap-5 self-center">
            <p>name</p>
            <p>rating</p>
            <p>id</p>
            <p>mail</p>
          </div>
        </div>

        {/* Previous Slots Section */}
        <div className="bg-gray-400 min-h-[50px] w-full my-5 rounded-md overflow-hidden">
          <h1>Previous slots</h1>
        </div>

        {/* Slot Management Section */}
        <div className="w-full min-h-[150px] bg-gray-400 my-10 p-5 rounded-md">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
            <button onClick={addSlot} className="bg-[#51b8e1] hover:bg-[#1e85ae] w-auto p-[8px] rounded-2xl">
              Slot Adder
            </button>
            <button onClick={slotSubmit} className="bg-[#32e793] hover:bg-[#1d5a3b] w-auto p-[8px] rounded-2xl">
              Submit New Slots
            </button>
            <button onClick={removeAllSlots} className="bg-[#51b8e1] hover:bg-[#1e85ae] w-auto p-[8px] rounded-2xl">
              Remove all slots
            </button>
            <button onClick={resetAllSlots} className="bg-[#51b8e1] hover:bg-[#1e85ae] w-auto p-[8px] rounded-2xl">
              Reset all slots
            </button>
          </div>

          {/* Slot List */}
          <div className="mt-5 w-full  sm:w-[50%] mr-auto  ">
            {slots.map((slot, index) => (
              <div key={slot.id} className={`p-3 ${index % 2 === 0 ? 'bg-gray-600' : 'bg-white'} my-2 m-3 rounded-md shadow-md shadow-black`}>
                <SlotAdder
                  onRemove={() => handleDeleteSlot(slot.id)}
                  onDayChange={(day) => handleDayChange(slot.id, day)}
                  day={slot.day}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorslotSetter;
