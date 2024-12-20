import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  MicOutlined,
  MoreHorizOutlined,
  ImageOutlined,
} from "@mui/icons-material";
import {
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const mode = useSelector((state) => state.mode);
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);

    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const res = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await res.json();
    dispatch(setPosts({ posts }));

    // RESET THE VALUES ONCE OR AFTER WE MAKE THE API CALL
    setImage(null);
    setPost("");
  };

  return (
    <div className="widgetWrapper">
      <div className="flexBetween gap-6 my-4">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind?"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          className={`w-full ${mode} rounded-3xl py-4 px-8` }
          sx={
            mode == "dark" ? { color: "white" } : { color: "black" }
          }
        />
      </div>
      {isImage && (
        <div className={` ${mode} rounded-md border-2 mt-4 p-4`}>
          <Dropzone
            acceptedFiles=".jpg, .jpeg, .png"
            multiple={false}
            onDrop={(acceptedFiles) => {
              setImage(acceptedFiles[0]);
            }}
            
          >
            {({ getRootProps, getInputProps }) => (
              <div className="flexBetween ">
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed p-4 hover:cursor-pointer w-full"
                >
                  <input {...getInputProps()} />

                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <div className="flexBetween">
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </div>
                  )}
                </div>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    className="w-[15%]"
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      )}

      <Divider className=" bg-white" />
      <div className="flexBetween my-4">
        <div className="flexBetween gap-2" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined />
          <Typography>Image</Typography>
        </div>

        {isNonMobileScreens ? (
          <>
            <div className="flexBetween gap-1">
              <GifBoxOutlined />
              <Typography>Clip</Typography>
            </div>
            <div className="flexBetween gap-1">
              <AttachFileOutlined />
              <Typography>Attachment</Typography>
            </div>
            <div className="flexBetween gap-1">
              <MicOutlined />
              <Typography>Audio</Typography>
            </div>
          </>
        ) : (
          <div className="gap-1">
            <MoreHorizOutlined />
          </div>
        )}

        <Button 
          disabled={!post}
          onClick={handlePost}
          className="rounded-[3rem]"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default MyPostWidget;
