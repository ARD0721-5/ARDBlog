import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export const Bloginfo = () => {
  return (
    <Box m={3}>
      <Typography>Blog Info</Typography>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        m={3}
      >
        <Typography>Posts Number: 5</Typography>
        <Typography>Comments Number: 100</Typography>
        <Typography>Like Number: 5</Typography>
        <Typography>Total Views: 10000</Typography>
        <Typography>Operating Days: 130d</Typography>
      </Stack>
    </Box>
  );
};

export default Bloginfo;
