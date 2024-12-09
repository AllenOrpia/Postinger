import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center"
})


// const FlexBetween = () => {
//   return (
//     <div className='flex justify-between items-center'>FlexBetween</div>
//   )
// }

export default FlexBetween