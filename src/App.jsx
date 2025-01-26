import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage'
import Login from './Components/Login'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <NavBar /> 
        <HeroSection />
      </div>
    },
    {
      path:'/userlogin',
      element:<div>
        <Login />
      </div>
    },
    
    {
      path:'*',
      element:<div>
        <NavBar />
        <ErrorPage />
      </div>
    },{}
  ]

);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
