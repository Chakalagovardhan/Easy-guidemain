import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import MentorsPortal from './Components/MentorsPortal';
import Home from './Components/Home';
import MentorBooking, { BookingSlots, RattingSection } from './Components/MentorBooking';
import MentorslotSetter from './Components/MentorslotSetter';
import ExamPortal from './Components/ExamPortal';

// Lazy-loaded components
const NavBar = lazy(() => import('./Components/NavBar'));
const HeroSection = lazy(() => import('./Components/Home'));
const ErrorPage = lazy(() => import('./Components/ErrorPage'));
const Login = lazy(() => import('./Components/Login'));

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Home />
        </div>
      </Suspense>
    ),
  },
  {
    path: '/userlogin',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Login />
        </div>
      </Suspense>
    ),
  },
  {
    path:'/mentorbook',
    element:(
      <Suspense fallback={<div>Laoding...</div>}>
        
        <MentorsPortal />
      

      </Suspense>
    ),  
  },

  {
    path:'/mentorprofileview/:userId',
    element:(
    <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <MentorBooking />
        <RattingSection />
        <Outlet />
        
     
    </Suspense>
  ),
  children:[
    {
      path:'book',
      element:<BookingSlots />
    }
  ]
  },

  {
    path:'mentorslotsetter',
    element:(
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <MentorslotSetter />
        </div>
      </Suspense>
    ),
  },
  {

    path:'/examportal',
    element:(
      <ExamPortal />
    )
  },
  {
    path:'/mentorprofileview',
    element:(
      <MentorBooking />
    )
  },
  
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <NavBar />
          <ErrorPage />
        </div>
      </Suspense>
    ),
  },
]);

// Main App Component
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
