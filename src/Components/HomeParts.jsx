import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../index.css";
import ExamPortal from "./ExamPortal";
import { NavLink,Link } from "react-router-dom";
import axios from "axios";

const Herocarousel = () => {
  var settings = {
    dots: false,
    // infinite: true,
    speed: 1500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[80%] sm:w-1/3 mt-10">
        <div className="mr-2">
          <Slider {...settings}>
            <div className="w-full h-[300px] bg-green-600  p-3 mx-2">
              <h3>1</h3>
            </div>
            <div className="w-full h-[300px] bg-green-600 mx-2">
              <h3>2</h3>
            </div>
            <div className="w-full h-[300px] bg-green-600">
              <h3>3</h3>
            </div>
            <div className="w-full h-[300px] bg-green-600">
              <h3>4</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};


const ConatctUs = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmission = async (e) => {
    const url = 'http://localhost:8080/user/saveCutomerCare'; // Add your backend URL here
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
      console.log(response.data);
      setSubmitStatus('success');
      setFormData({ userEmail: '', userNumber: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <div className="absolute w-[calc(100vw-50vw)] h-[300px] bg-[#f1f0fe] rounded-tr-full rounded-br-full top-[40px]"></div>
      <div className="absolute flex flex-row h-[250px] w-[70vw] top-[59px] left-[8vw]">
        <div className="flex-1 flex flex-col p-4 space-y-4">
          <h5 className="text-lg font-bold text-black">Contact Us</h5>
          <h1 className="text-md font-semibold text-black break-words">
            Feel free to contact us
          </h1>
          <p className="text-xs text-black break-words w-[250px]">
            Hello, my name is Chakala Govardhan Sai. I am feeling so great to
            hear about this.
          </p>
          <button className="bg-white text-black text-xs h-[50px] w-[200px] rounded-md overflow-hidden relative self-center hover:bg-black hover:text-white">
            <div className="bg-gray-600 rounded-full absolute h-[40px] w-[40px] top-1 -left-3"></div>
            50% off <br /> Special discount
            <div className="bg-gray-600 rounded-full absolute h-[30px] w-[30px] top-3 right-3 flex justify-center items-center"></div>
          </button>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmission}
            autoComplete="on"
            className="p-6 shadow-lg bg-[#7c6cd9] rounded-md w-80 space-y-2 m-1"
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="userEmail"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="mobileNumber" className="text-gray-700 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="userNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer disabled:bg-blue-300"
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-700 text-center mt-2">Form submitted successfully!</p> 
            )}
            {submitStatus === 'error' && (
              <p className="text-red-700 text-center mt-2">Error submitting form. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div class="flex bg-black place-content-evenly">
        <div class="flex flex-col">
          <ul class="text-white">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <ul class="text-white">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <ul class="text-white">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const ProgrameRecomnd = () => {
  return (
    <>
      <div className="min-h-[500px]  my-10 rounded-lg   p-1 flex flex-col sm:flex-row gap-10 mx-6 ">
        <div className="min-w-1/3 w-1/3">
          <img
            src="src/Images/LadyTeaching.png"
            alt=""
            className="object-fill mt-10 mx-10"
          />
        </div>
        <div className="flex flex-col gap-10 bg-[#f1f0fe] mx-5 items-end basis-full rounded-l-full overflow-hidden ">
          <p className="w-2/3 break-words  mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
            tempora atque reprehenderit dolorem explicabo accusantium autem,
            quibusdam, eum deserunt earum ullam sint ipsa dolore provident at
            necessitatibus itaque facilis.
          </p>

          <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5">
              What is this test?
            </summary>
            <p className="w-full bg-slate-700 rounded-md p-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          <div className=" w-full h-auto">
            <center>
              <button className="border border-gray-800 rounded-lg px-3 py-2 font-semibold" >
                <NavLink to='/examportal'>Take Assignment</NavLink>
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

const TopMentors = () => {
  return (
    <>
      <div className="w-[90%] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly  mx-auto items-center bg-black h-[500px]">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </>
  );
};

const ReviewsSection = () => {
  const[elementno,setElementno] = useState(1);

  useEffect(()=>{

    const handelSizeChange =()=>{
      if (window.innerWidth >= 768) {
        setElementno(3);
      }else{
        setElementno(1);
      }
    }
    handelSizeChange();

    window.addEventListener("resize",handelSizeChange);
    return()=>window.removeEventListener("resize",handelSizeChange);
  },[]);


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: elementno,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="w-full h-96 my-10  overflow-hidden">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="w-full sm:w-[300px]  h-[300px] bg-green-600  p-3 mx-2">
              <h3>1</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>2</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>3</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>4</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>5</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>6</h3>
            </div>
            <div className="w-full sm:w-[300px] h-[300px] bg-green-600  p-3 mx-2">
              <h3>7</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

const FrequentlyAsked = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between ">
        <div className="w-full min-h-[350px] h-auto flex flex-col bg-black  sm:my-5 justify-evenly ">
          <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5 text-wrap">
              What is this test?
            </summary>
            <p className=" bg-slate-700 rounded-md p-2 w-4/5 mx-5  text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.fdsfsdfdsfdsfsdvcxv
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          
        </div>
        <div className="w-full min-h-[350px] h-auto flex flex-col bg-black mb-4 sm:my-5 justify-evenly ">
          <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5">
              What is this test?
            </summary>
            <p className=" bg-slate-700 rounded-md p-2 w-1/3 mx-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
            
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded w-[200px] p-2">
              What is this test?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, modi.
            </p>
          </details>
          
        </div>
      </div>
    </>
  );
};

export default Herocarousel;
export {
  ConatctUs,
  Footer,
  ProgrameRecomnd,
  TopMentors,
  ReviewsSection,
  FrequentlyAsked,
};
