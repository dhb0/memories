import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/index";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deleteEvent = (_id) => {
    dispatch(deletePost(_id));
  };
  const likeEvent = (_id) => {
    dispatch(likePost(_id));
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          Tags
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            likeEvent(post._id);
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          LIKE {post.likeCount}
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            deleteEvent(post._id);
          }}
        >
          <DeleteIcon fontSize="small" />
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
