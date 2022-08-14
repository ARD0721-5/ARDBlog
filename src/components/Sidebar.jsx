import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { Profiler } from "react";
import avatar_sample from "../test_picture/Avatar.jpg";

let data = {
  id: 1,
  username: "First post",
  image: "Avatar",
  github: "https://github.com/Rain981012",
  email: "siyuan9@ualberta.ca",
  linkedIn: "https://www.linkedin.com/in/rain-wu-7a44ab18a/",
};

class Sidebar extends React.Component {
  state = {
    login: false,
  };

  handleLinkClick = (url) => {
    console.log("url is", url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  handleLogin = () => {
    this.setState({
      login: (this.state.login = true),
    });
    console.log("whether login", this.state.login);
  };

  render() {
    return (
      <Box
        flex={1}
        p={3}
        sx={{
          display: { xs: "none", sm: "block" },
          m: 3,
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
            <IconButton
              aria-label="github"
              onClick={() => this.handleLinkClick(data.github)}
            >
              <GitHub />
            </IconButton>
            <IconButton aria-label="email" href={"mailto:" + data.email}>
              <Email />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              onClick={() => this.handleLinkClick(data.linkedIn)}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
          <Button
            variant="text"
            sx={{ fontStyle: "italic" }}
            onClick={this.handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Box>
    );
  }
}

export default Sidebar;
