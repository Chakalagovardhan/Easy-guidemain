import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg">
      <div class=" w-[600px] h-[300px] rounded-2xl flex  ">
        <div class="basis-1/3  flex flex-col sm:flex-row justify-center items-center">
          <img
            src="src/Images/loginImage.jpg"
            alt="Hello"
            class="border-black"
          />
        </div>

        <div class="basis-2/3 flex items-center justify-center ">
          <form
            action=""
            autocomplete="on"
            class="p-6 bg-white shadow-lg rounded-md w-80 space-y-4"
          >
            <div class="flex flex-col space-y-1">
              <label for="uname" class="text-gray-700 font-medium">
                Username:
              </label>
              <input
                type="text"
                id="uname"
                class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="flex flex-col space-y-1">
              <label for="upass" class="text-gray-700 font-medium">
                Password:
              </label>
              <input
                type="password"
                id="upass"
                class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="flex justify-center">
              <input
                type="submit"
                value="SUBMIT"
                class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
