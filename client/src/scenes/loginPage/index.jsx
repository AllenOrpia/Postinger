
import { Typography, useMediaQuery
} from '@mui/material';


import Navbar from '../navbar'
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const mode = useSelector( (state) => state.mode);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
  return (
    <main>
      <div className={`${mode} w-full p-4 text-center`}>
        <Typography>
          Postinger
        </Typography>
      </div>
      <div className={isNonMobileScreens ? "w-[50%] p-8 mx-8 my-auto bg-white" : "w-[90%] p-8 mx-8 my-auto bg-white" }>
          <Typography>
            Welcome to Postinger!
          </Typography>
      </div>



    </main>
    
  )
}

export default LoginPage