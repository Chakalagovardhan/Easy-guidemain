import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import MentorsPortal from './Components/MentorsPortal';
import Home from './Components/Home';

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
        <div>
        <MentorsPortal />
        </div>

      </Suspense>
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
