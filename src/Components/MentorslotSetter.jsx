import React, { useState } from 'react';

const SlotAdder = ({ onRemove, onDayChange, day }) => {
  return (
    <>
      <select
        name="day"
        id="day"
        value={day} // Bind the value to the `day` prop
        onChange={(e) => onDayChange(e.target.value)}
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
      <button onClick={onRemove} className="bg-red-500 text-white p-2 ml-2">
        Remove Slot
      </button>
    </>
  );
};

const MentorslotSetter = () => {
  const [slots, setSlots] = useState([]);

  const addSlot = () => {
    const newSlot = { id: Date.now(), day: 'Select' }; // Default day is 'Select'
    setSlots([...slots, newSlot]);
  };

  const handleDeleteSlot = (id) => {
    setSlots(slots.filter(slot => slot.id !== id));
  };

  const handleDayChange = (id, day) => {
    setSlots(slots.map(slot =>
      slot.id === id ? { ...slot, day } : slot
    ));
  };

  const slotSubmit = () => {
    console.log(slots); // Log the slots array to the console
  };

  const removeAllSlots = () => {
    setSlots([]); // Remove all slots
  };

  const resetAllSlots = () => {
    const updatedSlots = slots.map(slot => ({ ...slot, day: 'Select' }));
    console.log(updatedSlots); // Log the updated slots
    setSlots(updatedSlots); // Reset the day for all slots
  };

  return (
    <div className='bg-red-500 h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <div className='h-[150px] sm:h-[300px] w-screen bg-blue-600 flex gap-2 sm:gap-10'>
        <div className='sm:w-[20%] sm:h-full flex self-center bg-pink-700'>
          <img src="" alt="" className='w-[100px] h-[100px] self-center sm:w-[200px] sm:h-[200px] bg-black rounded-full' />
        </div>
        <div className='flex flex-col gap-5 self-center'>
          <p>name</p>
          <p>rating</p>
          <p>id</p>
          <p>mail</p>
        </div>
      </div>
      <div className='bg-gray-700 min-h-[50px] w-full my-5'>
        <h1>Previous slots</h1>
      </div>
      <div className='w-screen min-h-[150px] bg-green-600 my-10 '>
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-10   '>
          <button onClick={addSlot} className='bg-[#51b8e1] hover:bg-[#1e85ae] w-[100px] p-[8px] rounded-2xl my-10 sm:ml-10 '>
            Slot Adder
          </button>
          <button onClick={slotSubmit} className='bg-[#32e793] hover:bg-[#1d5a3b] w-[100px] p-[8px] rounded-2xl my-10 '>
            Submit New Slots
          </button>
          <button onClick={removeAllSlots} className='bg-[#51b8e1] hover:bg-[#1e85ae] w-[100px] p-[8px] rounded-2xl my-10 '>
            Remove all slots
          </button>
          <button onClick={resetAllSlots} className='bg-[#51b8e1] hover:bg-[#1e85ae] w-[100px] p-[8px] rounded-2xl my-10 '>
            Reset all slots
          </button>
        </div>
        <div>
          {slots.map((slot, index) => (
            <div key={slot.id} className={`p-3 ${index % 2 === 0 ? 'bg-gray-600' : 'bg-white'} my-2`}>
              <SlotAdder
                onRemove={() => handleDeleteSlot(slot.id)}
                onDayChange={(day) => handleDayChange(slot.id, day)}
                day={slot.day} // Pass the `day` value to the SlotAdder component
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorslotSetter;