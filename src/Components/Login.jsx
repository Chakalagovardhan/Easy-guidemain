import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    userName: "",
    userPassword: "",
  });
  const [submit, setsubmiting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    const controller = new AbortController();
    e.preventDefault();
    setsubmiting(true);
    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);
    const url = "http://localhost:8080/user/login";
    try {
      const response = await axios.post(url, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        withCredentials: true, // 🚨 This is critical to include cookies!
      });
      
      clearTimeout(timeout);

      
      
      if (response.status === 200) {
        console.log("login sucess");
        document.cookie = `JWT_TOKEN=${response.data.JWT_TOKEN}; Path=/; SameSite=Lax; Secure`;
      document.cookie = `REFRESH_TOKEN=${response.data.REFRESH_TOKEN}; Path=/; SameSite=Lax; Secure`;
        console.log("Jwt token", response.data.JWT_TOKEN);
        console.log("Refresh token",response.data.REFRESH_TOKEN);
        navigate("/");
      } else {
        alert("Invalid credentials, please login again");
        // Only reset password field for security, keep username for convenience
        setFormData(prev => ({
          ...prev,
          userPassword: ""
        }));
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Backend was taking so long");
      } else if (error.message === "Network Error") {
        console.log("Backend is not in reposne");
      } else {
        console.error("Login failed:");
      }
    } finally {
      setsubmiting(false);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-center">{/* logo */}</div>
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={formSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="off"
                placeholder="user name"
                required
                onChange={handleChange}
                value={formdata.userName}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
             
              <input
                id="userPassword"
                name="userPassword"
                type="password"
                autoComplete="off"
                required
                placeholder="user password"
                value={formdata.userPassword}
                onChange={handleChange}
                className="?:mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <NavLink to={"/forgotPassword"} className="font-medium text-indigo-600 hover:text-indigo-500">Forgot Password</NavLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`${
                submit
                  ? "group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-600 focus:outline-none cursor-not-allowed"
                  : "group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              }`}
              disabled={submit}
            >
              {submit ? "submitting..." : "SUBMIT"}
            </button>
          </div>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

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
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          <NavLink to="/newregistration"  className="font-medium text-indigo-600 hover:text-indigo-500">New Singup</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
