/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Icon,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setMode, setLogout } from "../../state";
import { Input } from "postcss";

const Navbar = () => {
  const [IsMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const mode = useSelector((state) => state.mode);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const fullName = `${user.firstName} ${user.lastName}`
  // const fullName = "Allon";

  return (
    <div className={`flexBetween p-4 border-b-2`}>
      <div className="flexBetween gap-8 ">
        <Typography onClick={() => navigate("/home")}>
          <span className="font-bold sm:text-xl md:text-4xl lg:text-5xl hover:translate-y-2 hover:cursor-pointer text-pink-600">
            POSTINGER
          </span>
        </Typography>
        {isNonMobileScreens && (
          <div className={`p-2 border-2 rounded-full ${mode}`}>
            <InputBase
              placeholder="Search...."
              className={` px-2`}
              sx={mode == "dark" ? { color: "white" } : { color: "black" }}
            />
            <IconButton>
              <Search className={`${mode}`} />
            </IconButton>
          </div>
        )}
      </div>

      {/* DESKTOP NAV */}

      {isNonMobileScreens ? (
        <div className="gap-8 flexBetween">
          {/* DARKMODE/LIGHTMODE ICON */}
          <IconButton onClick={() => dispatch(setMode())}>
            <DarkMode sx={{ fontSize: "25px" }} className={`${mode}`} />
          </IconButton>
          <IconButton>
            <Message sx={{ fontSize: "25px" }} className={`${mode}`} />
          </IconButton>
          <IconButton>
            <Notifications sx={{ fontSize: "25px" }} className={`${mode}`} />
          </IconButton>
          <IconButton>
            <Help sx={{ fontSize: "25px" }} className={`${mode}`} />
          </IconButton>

          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              input={
                <InputBase
                  sx={mode == "dark" ? { color: "white" } : { color: "black" }}
                />
              }
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </div>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!IsMobileMenuToggled)}
        >
          <Menu className={`${mode}`} />
        </IconButton>
      )}

      {/* MOBILE NAVBAR */}
      {!isNonMobileScreens && IsMobileMenuToggled && (
        <div className="fixed right-0 bottom-0 h-[100%] z-10 max-w-[500px] min-w-[300px] p-4">
          {/* CLOSE ICON */}
          <div className="flex justify-end ">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!IsMobileMenuToggled)}
            >
              <Close className={`${mode}`} />
            </IconButton>
          </div>

          {/* MENU ITEMS */}
          <div className=" flex gap-12 justify-between flex-col items-center content-center ">
            {/* DARKMODE/LIGHTMODE ICON */}
            <IconButton onClick={() => dispatch(setMode())}>
              <LightMode className={`${mode}`} />
            </IconButton>
            <IconButton>
              <Message sx={{ fontSize: "25px" }} className={`${mode}`} />
            </IconButton>
            <IconButton>
              <Notifications sx={{ fontSize: "25px" }} className={`${mode}`} />
            </IconButton>
            <IconButton>
              <Help sx={{ fontSize: "25px" }} className={`${mode}`} />
            </IconButton>

            <FormControl variant="standard" value={fullName}>
              <Select
                sx={mode == "dark" ? { color: "white" } : { color: "black" }}
                value={fullName}
                input={
                  <InputBase
                    sx={
                      mode == "dark" ? { color: "white" } : { color: "black" }
                    }
                  />
                }
              >
                <MenuItem value={fullName}>
                  <span>{fullName}</span>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  <span>Log Out</span>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
