import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import MainPage from './pages/MainPage'

const AppRoutes = () => {

    const ProtectedRoute = ({ element }) => {
        const isAuthenticated = !!localStorage.getItem("authToken");
        return isAuthenticated ? element : <Navigate to="/" />;
      };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<ProtectedRoute element={<MainPage />} />} />
    </Routes>
  )
}

export default AppRoutes
