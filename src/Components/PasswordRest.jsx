import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    agreed: false,
    token: ''
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [image, setImage] = useState("src/Images/closeeye.png");

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Step 1: Verify Email
  const verifyEmail = async (e) => {
    e.preventDefault();
    setVerifyingEmail(true);
    try {
      const response = await axios.post(`http://localhost:8080/user/forgotPassword/${formData.userEmail}`);
      console.log("Backend response:", response.data);
      setEmailVerified(true);
    } catch (err) {
      alert("Failed to verify email. Try again.");
      console.error(err);
    } finally {
      setVerifyingEmail(false);
    }
  };

  // Step 2: Submit New Password
  const onSubmit = async (e) => {
    e.preventDefault();

  if (formData.userPassword !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  setSubmitting(true);
  try {
    const response = await axios.post(
      `http://localhost:8080/user/verify-forgot-password`,
      {
        userEmail: formData.userEmail,
        userPassword: formData.userPassword,
        token: formData.token
      }
    );
    

    console.log("Password reset success:", response.data);
    alert("Password reset successfully!");

    setFormData({
      userPassword: '',
      confirmPassword: '',
      agreed: false,
      token: ''
    });

  } catch (err) {
    alert("Failed to reset password");
    console.error(err);
  } finally {
    setSubmitting(false);
  }
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setImage(passwordVisible ? "src/Images/openeye.png" : "src/Images/closeeye.png");
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className='text-2xl text-center'>Easy Guide</p>
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center mt-2">Create new password</h2>

        <form onSubmit={emailVerified ? onSubmit : verifyEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="user Email"
              readOnly={emailVerified}
              required
            />
            {!emailVerified && (
              <div className='flex justify-end'>
                <button
                  className={`w-[150px] h-[30px] bg-blue-600 hover:bg-blue-700 border rounded-md text-white px-5 mt-2 ${verifyingEmail ? 'opacity-50 cursor-not-allowed' : ''}`}
                  type="submit"
                  disabled={verifyingEmail}
                >
                  {verifyingEmail ? "Verifying..." : "Verify Email"}
                </button>
              </div>
            )}
          </div>

          {emailVerified && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">New Password</label>
                <div className="flex items-center">
                  <input
                    type={passwordVisible ? "password" : "text"}
                    name="userPassword"
                    value={formData.userPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="New Password"
                    required
                  />
                  <img
                    src={image}
                    alt="toggle visibility"
                    className="w-[30px] h-[30px] ml-2 cursor-pointer"
                    onClick={togglePassword}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Re-enter new Password"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Token</label>
                <input
                  type='text'
                  name="token"
                  value={formData.token}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Token"
                  required
                />
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  required
                />
                <label className="ml-2 text-gray-700">
                  I agree to Flowbite's Terms of Use and Privacy Policy.
                </label>
              </div>

              <hr className="mb-6 border-gray-300" />

              <button
                type="submit"
                disabled={formSubmit || submitting}
                className={`w-full py-2 px-4 rounded-md text-white ${
                  formSubmit || submitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {submitting ? "Submitting..." : "Reset Password"}
              </button>
            </>
          )}
        </form>

        <p className="mt-6 text-center text-gray-600">
          If you still need help, contact Flowbite support.
        </p>
      </div>
    </div>
  );
};

export default PasswordReset;
