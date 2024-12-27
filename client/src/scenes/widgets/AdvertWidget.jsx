import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const AdvertWidget = () => {
  const mode = useSelector((state) => state.mode);
  return (
    <section className="widgetWrapper">
      <div className="flexBetween">
        <Typography className="">Sponsored</Typography>
        <Typography>Create Ad</Typography>
      </div>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        className="rounded-[0.75rem] mt-3 mx-0"
      />
      <div className="flexBetween">
            <Typography>
                Cosmetics
            </Typography>
            <Typography>
                cosmetics.com
            </Typography>
      </div>
      <Typography className="my-2 mx-0">
            Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining light
      </Typography>
    </section>
  );
};

export default AdvertWidget;
