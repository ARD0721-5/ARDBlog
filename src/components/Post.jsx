import React from "react";
import { Favorite, FavoriteBorder, AddComment } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

export const Post = (props) => {
  const subtitle = (
    <Typography>
      {props.value.time} <br></br>
      {props.value.subtitle}
    </Typography>
  );
  return (
    <Card sx={{ margin: 3, boxShadow: 3 }}>
      <CardHeader title={props.value.title} subheader={subtitle}></CardHeader>
      <CardMedia
        component="img"
        height="500"
        margin={"auto"}
        src={require("../test_picture/" + props.value.image + ".jpg")}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.value.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          ></Checkbox>
        </IconButton>
        <IconButton aria-label="add comment">
          <AddComment />
        </IconButton>
      </CardActions>
    </Card>
  );
};
