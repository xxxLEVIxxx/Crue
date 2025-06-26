import { useState } from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Homepage from './features/Landing/Homepage'
import LandingLayout from './features/Landing/Layout'
import NotFoundPage from './features/404/NotFoundPage'
import Login from './features/Authorization/Login'
import Signup from './features/Authorization/Signup'
import ThemeProvider from './shared/theme/ThemeContext'
import About from './features/Landing/About'


function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout  />,
      errorElement: <NotFoundPage />,
      children:[
        {
          index:true,
          element: <Homepage />,
        }
        ,
        {
          path:"/about",
          element: <About />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },  
    {
      path: "/signup",
      element: <Signup />
    }
  ]);   
  return (
    <ThemeProvider>
      <RouterProvider router= {router} />
    </ThemeProvider>
  )
}

export default App
