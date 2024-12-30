import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import FriendListWidget from "../../scenes/widgets/FriendListWidget";
import MyPostWidget from "../../scenes/widgets/MyPostWidget";
import PostsWidget from "../../scenes/widgets/PostsWidget";
import UserWidget from "../../scenes/widgets/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery(" (min-width:1000px)");
  const mode = useSelector( (state) => state.mode)

  const getUser = async () => {
    const res = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`}
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;
  

  return (
    <main className="  " >
      <Navbar />

      <section
        className={
          isNonMobileScreens
            ? "flex w-full py-8 px-[6%] gap-8 center "
            : "w-full py-8 px-[6%] gap-8"
        }
      >
        <div className={isNonMobileScreens ? "basis-[26%]" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <FriendListWidget  userId={userId} />
        </div>

        <div className={isNonMobileScreens ? "basis-[42%]" : undefined}>
          
          <PostsWidget userId={userId} isProfile />
        </div>

        
      </section>
    </main>
  );
};

export default ProfilePage;
