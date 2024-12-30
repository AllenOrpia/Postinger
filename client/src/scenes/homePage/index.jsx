/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar";
import { useMediaQuery, Box } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";
import UserImage from "../../components/UserImage";
import MyPostWidget from "../../scenes/widgets/MyPostWidget"
import PostsWidget from "../../scenes/widgets/PostsWidget";
import AdvertWidget from "../../scenes/widgets/AdvertWidget";
import FriendListWidget from "../../scenes/widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const mode = useSelector( (state) => state.mode)

  return (
    <main className="">
      <Navbar />

      <div
        className={
          isNonMobileScreens
            ? "flex w-full py-8 px-[6%] gap-8 justify-between "
            : "w-full py-8 px-[6%]  "
        }
      >

        <div className={isNonMobileScreens ? "basis-[25%]" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </div>

        <div className={isNonMobileScreens ? "basis-[50%]" : "my-4"}>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </div>
        
        {isNonMobileScreens && <div className="basis-[25%]">
          <AdvertWidget />
          <div className="my-8 mx-0"></div>
          <FriendListWidget userId={_id} />
  
          </div>}
      </div>
      
    </main>
  );
};

export default HomePage;
