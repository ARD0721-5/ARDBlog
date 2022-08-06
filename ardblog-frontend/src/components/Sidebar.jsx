import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import avatar_sample from "../test_picture/Avatar.jpg";

export const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={3}
      sx={{
        display: { xs: "none", sm: "block" },
        ml: 10,
        mt: 3,
        width: 50,
        alignContent: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{ alignItems: "center" }}
        position="fixed"
      >
        <Avatar
          sx={{
            width: 150,
            height: 150,
            borderRadius: 5,
            boxShadow: 3,
          }}
          variant="square"
          src={avatar_sample}
          alt="avatar"
        ></Avatar>
        <Typography variant="h5" sx={{ fontStyle: "italic" }}>
          Rain Wu
        </Typography>
        <Stack direction="row" spacing={2}>
          <GitHub />
          <Email />
          <LinkedIn />
        </Stack>
        <Button variant="text" sx={{ fontStyle: "italic" }}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
