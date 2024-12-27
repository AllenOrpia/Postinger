import React from "react";
import Friend from "../../components/Friend";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "../../state";
import { Typography } from "@mui/material";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const mode = useSelector((state) => state.mode);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); 


  return (
    <section className="widgetWrapper">
      <Typography>Friend List</Typography>
      <div className="flex flex-col gap-6">
      {friends.map((friend, i) => (
          <Friend
            key={`${friend._id}-${i}`}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </div>
    </section>
  );
};

export default FriendListWidget;
