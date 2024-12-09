/* eslint-disable react/prop-types */
import React from 'react'

const UserImage = ({ image, size="60px"
}) => {
  return (
    <div className="" width={size} height={size}>
        <img src={`http://localhost:3001/assets/${image}`} alt="User image" className=' object-cover rounded-full' width={size} height={size}/>
    </div>
  )
}

export default UserImage