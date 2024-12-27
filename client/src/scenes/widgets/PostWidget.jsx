import React from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Divider, Icon, IconButton, Typography } from "@mui/material";
import Friend from "../../components/Friend";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const mode = useSelector((state) => state.mode);
  
  

  const patchLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: loggedInUserId }),
        }
      );
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="widgetWrapper my-8 mx-0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography>{description}</Typography>
      {picturePath && (
        <img
          className="w-full h-auto rounded-['0.75rem'] mt-3"
          alt="post"
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <div className="flexBetween mt-1">
        <div className="flexBetween gap-4">
          <div className="flexBetween gap-1">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined className="text-red-500" />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </div>

          <div className="flexBetween gap-1">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </div>
        </div>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </div>
      {isComments && (
        <div className="mt-2">
          {comments.map((comment, i) => {
            <div key={`${name}-${i}`} className="h-[100px]">
              <Divider />
              <Typography sx={{ m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </div>;
          })}
          <Divider />
        </div>
      )}
    </div>
  );
};

export default PostWidget;
