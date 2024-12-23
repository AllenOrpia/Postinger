/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar";
import { useMediaQuery, Box } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";
import UserImage from "../../components/UserImage";
import MyPostWidget from "../../scenes/widgets/MyPostWidget"

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <main>
      <Navbar />

      <div
        className={
          isNonMobileScreens
            ? "flex w-full py-8 px-[6%] gap-2 justify-between "
            : "w-full py-8 px-[6%] gap-2"
        }
      >
        <div className="">
          <UserWidget userId={_id} picturePath={picturePath} />
        </div>
        <div className={isNonMobileScreens ? "basis-[42%]" : undefined}>
          <MyPostWidget picturePath={picturePath} />
        </div>
        {isNonMobileScreens && <div className="basis-[25%]"></div>}
      </div>
    </main>
  );
};

export default HomePage;
