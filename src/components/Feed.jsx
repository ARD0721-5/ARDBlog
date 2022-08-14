import { Box, Stack } from "@mui/material";
import React from "react";
import { Post } from "./Post";
import background_sample from "../test_picture/Background.jpg";
import avatar_sample from "../test_picture/Avatar.jpg";

export const Feed = () => {
  const data = [
    {
      id: 1,
      title: "First post",
      time: "1998-10-23",
      subtitle: "First subtitle",
      image: "Background",
      text: "This is the first post text.",
    },
    {
      id: 2,
      title: "Second post",
      time: "2015-10-23",
      subtitle: "Second subtitle",
      image: "Avatar",
      text: "This is the second post text.",
    },
  ];

  const cardLists = data.map((data) => <Post key={data.id} value={data} />);
  return (
    <Stack flex={4} p={2}>
      {cardLists}
    </Stack>
  );
};
export default Feed;
