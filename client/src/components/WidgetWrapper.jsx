

import React from 'react'
import { useSelector } from 'react-redux'

const WidgetWrapper = () => {
    const mode = useSelector( (state) => state.mode)
  return (
    <div className={`px-6 pt-6 pb-3 ${mode} rounded-xl`}>WidgetWrapper</div>
  )
}

export default WidgetWrapper