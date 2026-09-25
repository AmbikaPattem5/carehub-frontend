import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Context/AuthProvider'
function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Toaster />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
