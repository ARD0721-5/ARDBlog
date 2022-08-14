import { Card, CardMedia } from "@mui/material";
import React from "react";
import background_sample from "../test_picture/Background.jpg";

export const Topbar = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        margin={"auto"}
        image={background_sample}
        alt="Paella dish"
      />
    </Card>
  );
};

export default Topbar;
