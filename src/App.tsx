import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import Login from './pages/client/auth/Login'
import SignupForm from './pages/client/auth/Sign'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/route.config'
import AppRouter from './routers/app-router'

function App() {

  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <AppRouter />

    </>
  )
}

export default App
