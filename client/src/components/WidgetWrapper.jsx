

import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const WidgetWrapper = () => {
    const mode = useSelector( (state) => state.mode)
  return (
    <div className={`px-6 pt-6 pb-3 ${mode} rounded-xl`}>WidgetWrapper</div>
  )
}

// const WidgetWrapper = styled(Box)({
//   padding: "1.5rem 1.5rem 0.75rem 1.5rem",
//   borderRadius: "0.75rem",
// });

export default WidgetWrapper