import React, { useState } from 'react';

const SlotAdder = ({ onRemove }) => {
  return (
    <>
      <select name="day" id="day">
        <option value="Select" selected>Select</option>
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
    // Create a new slot with a unique id
    const newSlot = { id: Date.now() }; // Using timestamp as a simple unique id
    setSlots([...slots, newSlot]);
  };

  const handleDeleteSlot = (id) => {
    // Filter out the slot with the given id
    setSlots(slots.filter(slot => slot.id !== id));
  };

  return (
    <div className='bg-red-500 h-screen w-screen'>
      <div className='h-[300px] w-screen bg-blue-600'></div>
      <div className='w-screen min-h-[150px] bg-green-600 my-10'>
        <button onClick={addSlot} className='bg-[#51b8e1] hover:bg-[#1e85ae] w-[100px] p-[8px] rounded-2xl'>
          Slot Adder
        </button>
        <div>
          {slots.map((slot, index) => (
            <div key={slot.id} className={`p-3 ${index % 2 === 0 ? 'bg-gray-600' : 'bg-white'} my-2`}>
              <SlotAdder onRemove={() => handleDeleteSlot(slot.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorslotSetter;