import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles.js";
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
