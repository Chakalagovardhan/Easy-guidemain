import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import closeEye from '../Images/closeeye.png';
import openEye from '../Images/openeye.png';
import axiosInstance from '../configurations/AxiosInstance';

const UserRegistration = () => {
  const [image, setImage] = useState(closeEye);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    dtoUsername: '',
    dtoUseremail: '',
    dtoUserPassword: ''
  });

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setImage(passwordVisible ? openEye : closeEye);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    try {
      // const response = await axios.post(
      //   "http://localhost:8080/user/user-signup",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   }
      // );

      const response = await axiosInstance.post(
        "/user/user-signup",
        formData

      );

      // Success case - backend returns 201 CREATED
      if (response.status === 201) {
        alert("You have registered successfully");
        navigate('/userlogin');
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response) {
        // The request was made and the server responded with a status code
        const errorMessage = error.response.data;
        
        if (errorMessage.includes("User exist with user mail")) {
          setFormData(prev => ({
            ...prev,
            dtoUseremail: ""
          }));
          setErrorMessage("Email already registered");
        } else if (errorMessage.includes("User exist with user name")) {
          setFormData(prev => ({
            ...prev,
            dtoUsername: ""
          }));
          setErrorMessage("Username already exists");
        } else {
          setErrorMessage("Registration failed. Please try again.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage("No response from server. Please try again.");
      } else {
        // Something happened in setting up the request
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="max-w-md sm:w-[400px] mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {errorMessage}
          </div>
        )}

        {/* Rest of your form JSX remains exactly the same */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="dtoUsername" className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              id="dtoUsername"
              name="dtoUsername"
              value={formData.dtoUsername}
              onChange={handleChange}
              placeholder='User Name'
              autoComplete='off'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="dtoUseremail" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="dtoUseremail"
              name="dtoUseremail"
              value={formData.dtoUseremail}
              onChange={handleChange}
              placeholder='Email'
              autoComplete='off'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center">
              <input
                type={passwordVisible ? "password" : "text"}
                id='dtoUserPassword'
                name="dtoUserPassword"
                value={formData.dtoUserPassword}
                onChange={handleChange}
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
                minLength={8}
                required
                title="Password must contain at least 8 characters, one uppercase letter, one number, and one special character."
              />
              <img
                src={image}
                alt="toggle visibility"
                className="w-[30px] h-[30px] ml-2 cursor-pointer"
                onClick={togglePassword}
              />
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="flex-1 flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub"
                className="h-5 w-5 mr-2"
              />
              GitHub
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;