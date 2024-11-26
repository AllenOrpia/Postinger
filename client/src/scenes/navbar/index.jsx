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
import FlexBetween from "../../components/FlexBetween";
import { setMode, setLogout } from "../../state";
import { Input } from "postcss";

const Navbar = () => {
  const [IsMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // const fullName = `${user.firstName} ${user.lastName}`
  const fullName = "Allon";

  return (
    <FlexBetween className="p-4">
      <FlexBetween>
        <Typography
          className=" font-bold sm:text-base md:text-4xl lg:text-txl hover:translate-y-2"
          onClick={() => navigate("/home")}
        >
          Postinger
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween>
            <InputBase placeholder="Search...." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}

      {isNonMobileScreens ? (
        <FlexBetween className=" gap-8">
          {/* DARKMODE/LIGHTMODE ICON */}
          <IconButton onClick={() => dispatch(setMode())}></IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select value={fullName} input={<InputBase />}>
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!IsMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAVBAR */}
      {!isNonMobileScreens && IsMobileMenuToggled && (
        <Box className="fixed right-0 bottom-0 h-[100%] z-10 max-w-[500px] min-w-[300px] ">
          {/* CLOSE ICON */}
          <Box className="flex justify-end ">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!IsMobileMenuToggled)}
            >
              <Close className="text-white" />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <div className=" flex gap-12 justify-between flex-col items-center content-center bg-black text-white">
            {/* DARKMODE/LIGHTMODE ICON */}
            <IconButton onClick={() => dispatch(setMode())}></IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select value={fullName} input={<InputBase />}>
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
