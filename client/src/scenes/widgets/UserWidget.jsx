/* eslint-disable react/prop-types */
import React from "react";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full">
      {/* FIRST ROW */}
      <FlexBetween
        className="gap-2 pb-4"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween className="gap-4 ">
          <UserImage image={picturePath} />
          <div>
            <h3 className={`${mode} font-medium hover:cursor-pointer `}>
              {firstName} {lastName}
            </h3>
            {/* <span>{friends.length} friends</span> */}
            <ManageAccountsOutlined />
          </div>

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

          {/* THIRD ROW */}
          <div className="py-4 p-0">
            <FlexBetween className="mb-2">
              <span>Who viewed your profile</span>
              <span className="font-medium">{viewedProfile}</span>
            </FlexBetween>
            <FlexBetween className="mb-2">
              <span>Impressions of your posts</span>
              <span className="font-medium">{impressions}</span>
            </FlexBetween>
          </div>

          {/* FOURTH ROW */}
          <div className="py-4 p-0">
            <span className=" text-base mb-4 font-medium">Social Profiles</span>
            <FlexBetween className="gap-4 mb-2 ">
              <FlexBetween className="gap-4">
                <img src="../assets/twitter.png" alt="twitter" />
                <div>
                  <span className="font-medium">X</span>
                  <span>Social Network</span>
                  <EditOutlined />
                </div>
              </FlexBetween>

              <FlexBetween className="gap-4">
                <img src="../assets/linkedin.png" alt="linkedin" />
                <div>
                  <span className="font-medium">Linkedin</span>
                  <span>Network Platform</span>
                  <EditOutlined />
                </div>
              </FlexBetween>
            </FlexBetween>
          </div>
        </FlexBetween>
      </FlexBetween>
    </div>
  );
};

export default UserWidget;
