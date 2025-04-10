import React, { useState } from 'react';

const PasswordReset = () => {

    const[formData,setFormdata] = useState(
      {
        userEmail:"",
        userPassword:"",
        confirmPassword:"",
        agreed:false,
      }
    );

    const handleChange = (e) => {
      const { name, type, value, checked } = e.target;
    
      setFormdata((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
    

    const onSubmit =(e)=>{
      e.preventDefault();
      const{userPassword,confirmPassword,agreed}=formData;
      if(userPassword !==confirmPassword)
      {
        alert("Password and the confirm passwrod miss match");
        return;
      }
      if(!agreed)
      {
        alert("Please agree the term and the conditions");
        return;
      }
      console.log("form data:",formData);
    };

    const[passwordShow, setpasswordShow]=useState(true); 
    const[image,setImage]=useState("src/Images/closeeye.png");

    const eyeclick = () => {
        setpasswordShow(!passwordShow); // Toggle password visibility
        setImage(passwordShow ? "src/Images/openeye.png" : "src/Images/closeeye.png"); // Update image based on visibility
      };

  return (
    <div className=' flex items-center my-auto min-h-screen'>

    
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <p className=' text-2xl text-center'>Easy Guide</p>
      
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center mt-2">Create new password</h2>
      
      
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="user Email"
            value={formData.userEmail}
            required
            onChange={handleChange}
            name='userEmail'
            autoComplete='off'
          />
        </div>
        
        <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">New Password</label>
      <div className="flex items-center">
        <input
          type={passwordShow ? "password" : "text"}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="New Password"
          value={formData.userPassword}
          required
          onChange={handleChange}
          name='userPassword'
        />
        <img
          src={image}
          alt="toggle visibility"
          className="w-[30px] h-[30px] ml-2 cursor-pointer"
          onClick={eyeclick}
          onChange={handleChange}
        />
      </div>
    </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm password</label>
          <input 
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Re-enter new Password"
            required
            onChange={handleChange}
            value={formData.confirmPassword}
            name='confirmPassword'
          />
        </div>
        
        <div className="mb-6 flex items-center">
          <input 
            type="checkbox" 
            id="terms"
            name='agreed'
            value={formData.agreed}
            required
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-gray-700">
            I agree to Flowbite's Terms of Use and Privacy Policy.
          </label>
        </div>
        
        <hr className="mb-6 border-gray-300" />
        
        <button
          type="submit"
          onSubmit={onSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Reset password
        </button>
      </form>
      
      <p className="mt-6 text-center text-gray-600">
        If you still need help, contact Flowbite support.
      </p>
    </div>
    </div>
  );
};

export default PasswordReset;