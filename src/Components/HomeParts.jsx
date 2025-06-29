import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { axiosInstanceDsaSageFrontend } from "../configurations/AxiosInstance";

const Herocarousel = () => {
  var settings = {
    dots: false,
    speed: 1500,
    fade: true,             
    cssEase: "linear",      
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  

  return (
    <>
      <div className="w-[80%] sm:w-1/3 mt-10">
        <div className="mr-2">
          <Slider {...settings}>
            <div className="w-full h-[300px]  mx-2 rounded-md">
              <img
                src="src/Images/1.png"
                alt="Mentor"
                className="rounded-md"
              />
            </div>
            <div className="w-full h-[300px] ">
            <img
                src="src/Images/2.png"
                alt="Mentor"
                
              />
            </div>
            <div className="w-full h-[300px] ">
            <img
                src="src/Images/3.png"
                alt="Mentor"
                
              />
            </div>
            <div className="w-full h-[300px] ">
            <img
                src="src/Images/4.png"
                alt="Mentor"
                
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

const ConatctUs = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = async (e) => {
    const url = "http://localhost:8080/user/saveCutomerCare"; // Add your backend URL here
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setSubmitStatus("success");
      setFormData({ userEmail: "", userNumber: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
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
            Hey, Flok please fill the details here to get you in touch by our
            mentors.
            <br />
            <p className="mt-3">
              If you need any subscriptions click the button bellow
            </p>
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
              <label
                htmlFor="mobileNumber"
                className="text-gray-700 font-medium"
              >
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
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </div>

            {submitStatus === "success" && (
              <p className="text-green-700 text-center mt-2">
                Form submitted successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-700 text-center mt-2">
                Error submitting form. Please try again.
              </p>
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
      <div className="flex flex-col bg-[#5946c7] min-h-[250px] justify-between">
        <div class="flex  place-content-evenly mt-5">
         
          <div class="flex flex-col">
            <ul class="text-white">
              <a href="https://docs.google.com/forms/d/17REomaLNHm4nYumkNrYEonDgx5sI3DEwMFZ53ecLJrg"><li>contact-us</li></a>
              <li>Investor</li>
              <li>Report</li>
              <li>Bugs</li>
              <li>About-us</li>
            </ul>
          </div>
          <div class="flex flex-col">
            <ul class="text-white">
              <li>saigovardhan52@gmail.com</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Home</li>
            </ul>
          </div>
        </div>
        <div className="font-semibold text-lg">
          All rights Reserved to Easy guide &#169;
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
            This is the section where students can make there DSA study planner accordingly to there level
            where the user need to provide response to few common questions according to there repsonse a well 
            curated dsa daily sheet is beign genarted according to there time by <b>AI</b>.
          </p>

           <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5 text-wrap  font-bold">
              What is this test?
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap font-bold">
              This is the specalized dsa test where using your response a spcalized ai genarted dsa sheet is beign created for you.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5 text-wrap font-bold">
             Is this exam free of cost
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap  font-bold">
              Yes the exam is free of cost and the reponse to get is free for the first time and from the next time you are beign charged accordingly.
            </p>
          </details>
          <details>
            <summary className="bg-[#7c6cd9] rounded-l-2xl w-[200px] p-2 mr-5 text-wrap font-bold">
             How long will it take to make planner
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap  font-bold">
             It will take nearly 1 day from the time you send your response and the sheet is beign send to your mail id.
            </p>
          </details>
          
          <div className=" w-full h-auto">
            <a href={axiosInstanceDsaSageFrontend} target="_blank" >
              <center>
              <button className="border border-gray-800 rounded-lg px-3 py-2 font-semibold">
                Take Assignment
              </button>
            </center>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const mentors = [
  {
    id: 1,
    name: "Easwanth",
    image: "src/Images/boy-avator-1.jpg",
    company:"Caelius consulting "
  },
  {
    id: 2,
    name: "Pavan Sai",
    image:"src/Images/boy-avator-1.jpg",
    company:"KPIT technologies"
  },
  {
    id: 3,
    name: "Sasank",
    image:"src/Images/boy-avator-2.jpg",
    company:"TCS"
  },
];

const TopMentors = () => {
  return (
    <div className="w-[90%] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly mx-auto items-center bg-[#f1f0fe] h-[500px] rounded-xl shadow-md shadow-slate-500">
      {mentors.map((mentor) => (
        <div className="box relative " key={mentor.id}>
          <div className="circle-img">
            <img src={mentor.image} alt={mentor.name} />
          </div>
          <p className="absolute top-24 left-10 font-bold ">{mentor.name}</p>
          <p className="absolute top-32 left-10 font-bold ">{mentor.company}</p>
        </div>
      ))}
    </div>
  );
};



const ReviewsSection = () => {
  const [elementno, setElementno] = useState(1);
  const images = [
    "src/Images/boy-avator-1.jpg",
    "src/Images/boy-avator-2.jpg",
    "src/Images/girl-avator-2.jpg",
    "src/Images/girt-avatar-1.jpg",
  ];
  const reviews = [
    {
      name: "Govardhan Sai",
      title: "Amazing Experience",
      body: "I had an amazing experience with the product. Highly recommend!",
      image: "src/Images/boy-avator-1.jpg",
    },
    {
      name: "Anjali Sharma",
      title: "Excellent Support",
      body: "Customer support was responsive and helpful throughout.",
      image: "src/Images/girt-avatar-1.jpg",
    },
    {
      name: "Rahul Mehta",
      title: "Great Value",
      body: "Very affordable and delivers exactly what it promises.",
      image: "src/Images/boy-avator-2.jpg",
    },
    {
      name: "Sneha Patel",
      title: "User Friendly",
      body: "The UI is clean and easy to navigate.",
      image: "src/Images/girl-avator-2.jpg",
    },
    {
      name: "Vikram Rao",
      title: "Top Quality",
      body: "Unmatched quality and performance!",
      image: "src/Images/boy-avator-1.jpg",
    },
    {
      name: "vineel",
      title: "specalized dsa plane",
      body: "The have taken the specalized dsa plan and it was well customized and soo good. where I have done good to attempt.",
      image: "src/Images/boy-avator-1.jpg",
    },
    {
      name: "Pavan",
      title: "Good Mentors",
      body: "The mentors were very friendly then guided me in the good manner and helped me a lot",
      image: "src/Images/boy-avator-2.jpg",
    },
  ];

  const getimage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
  useEffect(() => {
    const handelSizeChange = () => {
      if (window.innerWidth >= 768) {
        setElementno(3);
      } else {
        setElementno(1);
      }
    };
    handelSizeChange();

    window.addEventListener("resize", handelSizeChange);
    return () => window.removeEventListener("resize", handelSizeChange);
  }, []);

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
            {reviews.map((review, index) => (
              <div
                className="w-full sm:w-[300px]  h-[300px] bg-[#f1f0fe]  p-3 mx-2 rounded-lg"
                key={index}
              >
                <div className="w-[100%] h-[100%] flex flex-col gap-2">
                  <div className="w-full h-[35%]  flex flex-row gap-3 rounded-lg flex-wrap  items-center sm:gap-7 ">
                    <div className="h-[80px] w-[80px]  rounded-full ml-5 ">
                      <img
                        src={review.image}
                        alt="Profile"
                        className="h-[80px] w-[80px] rounded-full  object-cover"
                      />
                    </div>
                    <div className="font-bold  ">{review.name}</div>
                  </div>
                  {/* descreption */}
                  <div className="flex-1 bg-[#8674f2]  rounded-lg text-ellipsis p-3 ">
                    {review.body}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const FrequentlyAsked = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between rounded-lg ">
        <div className="w-full min-h-[350px] h-auto flex flex-col bg-[#f1f0fe] sm:my-5 justify-evenly pl-3 rounded-lg ">
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
              How to book mentor
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
            The book the mentor please go to mentoring section avaliable in the navbar and search for the specific role 
            or the company mentor you need as amentor and book according to desire <b>or else</b> fill your details in the contact form location
            our team will back to you
            </p>
          </details>
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
             Is this exam free of cost
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
              Yes the exam is free of cost and the reponse to get is free for the first time and from the next time you are beign charged accordingly.
            </p>
          </details>
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
             Whom to contact when I was stucked in the website 
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
             You can contact to our customer service team by mailing us through our chanels like mail, or customer care number of our team 
             they will guide you accordingly as per your concerns. 
            </p>
          </details>
          
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
              what are the benifits of subscription
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
              1.You can create your customized dsa sheet 3 times a month 2.Book a free mentor montly once 3.Mock Interview monthly 2-3 times 
              4. Access to our premium materials,videos and documentations. 5.Get easy connect to our top mentors easily 
            </p>
          </details>
        </div>


        <div className="w-full min-h-[350px] h-auto flex flex-col bg-[#f1f0fe] mb-4 sm:my-5 justify-evenly pl-3 rounded-lg ">
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap">
              How to attempt the test 
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
              Just simply please go to Assignments section clicck on the take test it will navigate to the test and attempt the question according
              of your prior knowledge
            </p>
          </details>
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
              Can i customize my dsa sheet again
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
              Yes you can customize but the first customization is free of cost upon that you need to buy subscription.
            </p>
          </details>
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
             what are communities 
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
             Communities are like groups where you engage with your peers and discuss your thoughts and doubts.
            </p>
          </details>
          <details>
            <summary className=" rounded-l-2xl min-w-[200px] p-2 mr-5 text-wrap ">
              what if mentor is not avialble on time
            </summary>
            <p className=" bg-slate-300 rounded-md p-2 w-4/5 mx-5  text-wrap">
              If the mentor is not avialble at the time of appointment please mail to our customer team within 24-hours 
              this will makes us to reschedule the appointment for you
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
