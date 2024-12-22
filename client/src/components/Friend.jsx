import React from 'react';
import {
    PersonAddOutlined, PersonRemoveOutlined,

} from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from 'state';
import UserImage from './UserImage';

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const mode = useSelector( (state) => state.mode);
    const { _id } = useSelector((state) => state.user);
    const token = useSelector( (state) => state.token);
    const friends = useSelector( (state) => state.user.friends);
    

  return (
    <div>Friend</div>
  )
}

export default Friend