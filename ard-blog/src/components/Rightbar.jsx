import { Box, Stack } from "@mui/material";
import React from "react";
import { MediaControlCard } from "./MediaControlCard";
import { Bloginfo } from "./Bloginfo";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ alignItems: "center" }}
        position="fixed"
      >
        <MediaControlCard />
        <Bloginfo />
      </Stack>
    </Box>
  );
};

export default Rightbar;
