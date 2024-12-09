/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div
        className={
          isNonMobileScreens
            ? "flex w-full py-8 px-[6%] gap-2 justify-between"
            : "w-full py-8 px-[6%] gap-2"
        }

      >
        <div className={
          isNonMobileScreens ? "basis-[25%]" : undefined
        }>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
