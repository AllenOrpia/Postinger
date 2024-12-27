/* eslint-disable react/prop-types */
import React from "react";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import UserImage from "../../components/UserImage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const mode = useSelector((state) => state.mode);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <div className={`widgetWrapper ${mode}`}>
      {/* FIRST ROW */}
      <div
        className="gap-2 pb-4 flex justify-between items-center "
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <div className="flex gap-4 content-center items-center">
          <UserImage image={picturePath} />
          <div>
            <h3 className={`font-medium hover:cursor-pointer `}>
              {firstName} {lastName}
            </h3>
            <span>{friends.length} friends</span>
          </div>
        </div>
        <ManageAccountsOutlined className="hover:cursor-pointer" />
      </div>

      <Divider className="bg-white" />

      {/* SECOND ROW */}
      <div className="py-4 px-0">
        <div className="flex items-center gap-4 mb-2">
          <LocationOnOutlined className=" text-lg" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <WorkOutlineOutlined className=" text-lg" />
          <span>{occupation}</span>
        </div>
      </div>

      <Divider className="bg-white" />
      {/* THIRD ROW */}
      <div className="py-4 flex flex-col ">
        <div className="mb-2 gap-4 flex justify-between items-center ">
          <span>Who viewed your profile</span>
          <span className="font-medium">{viewedProfile}</span>
        </div>
        <div className="mb-2 gap-4 flex justify-between items-center">
          <span>Impressions of your posts</span>
          <span className="font-medium">{impressions}</span>
        </div>
      </div>

      <Divider className="bg-white" />

      {/* FOURTH ROW */}
      <div className="py-4 p-0">
        <span className=" text-base mb-4 font-medium">Social Profiles</span>

        <div className="gap-4 mb-2 flex flex-col justify-between ">
          <div className="flex content-center justify-between w-full items-center ">
            <div className="flex gap-4">
              <img src="../assets/twitter.png" alt="twitter" />
              <div className="flex flex-col ">
                <span className="font-medium">X</span>
                <span>Social Network</span>
              </div>
            </div>
            <EditOutlined />
          </div>

          <div className="flex content-center justify-between  w-full items-center">
            <div className="flex gap-4">
              <img src="../assets/linkedin.png" alt="linkedin" />
              <div className="flex flex-col ">
                <span className="font-medium">Linkedin</span>
                <span>Network Platform</span>
              </div>
            </div>
            <EditOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
