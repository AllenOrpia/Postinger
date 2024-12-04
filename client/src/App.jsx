/* eslint-disable no-unused-vars */
import { useState, useMemo } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';





function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <div className={`app h-[100vh] w-[100vw] ${mode}`} >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
