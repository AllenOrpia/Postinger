import React from "react";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Icon, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  
  const isFriend = friends.find((friend) => friend._id === friendId);
  const mode = useSelector((state) => state.mode);
  

  const patchFriend = async () => {
    try {
        const response = await fetch(
          `http://localhost:3001/users/${_id}/${friendId}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    } catch(err) {
      console.log(err.message)
    }
  };

  return (
    <div className="flexBetween">
      <div className="flexBetween gap-4">
        <UserImage image={userPicturePath} size="60px" />
        <div
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography>
            {name}
          </Typography>
          <Typography>
            {subtitle}
          </Typography>
        </div>
      </div>

      <IconButton
        onClick={() => patchFriend()}
        sx={{ p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined  />
        ) : (
          <PersonAddOutlined />
        )}
      </IconButton>
    </div>
  );
};

export default Friend;
