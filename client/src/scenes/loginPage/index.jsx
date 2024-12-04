/* eslint-disable no-unused-vars */
import {
  Box, Typography, useMediaQuery
} from '@mui/material';

import Navbar from '../navbar'

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("min-width: 1000px")
  return (
    
    <div className="text-3xl text-center"> 
      <Navbar />
      
    Login Page</div>
  )
}

export default LoginPage