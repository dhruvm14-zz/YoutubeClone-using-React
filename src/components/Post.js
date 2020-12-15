import React from "react";
import "./css/Post.css";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Post(props) {
  return (
    <div className="post">
      <div className="post__heading">
        <Avatar
          className="post__avatar"
          src={props.channelImg}
        />
        <p>{props.title} • {props.timestamp}</p>
      </div>
      <div className="post__content">{props.content.substring(0,150)}</div>
      
        <div className="post__likes">
          <ThumbUpAltIcon />
          <p>{props.likes}</p>
          <ThumbDownAltIcon />
        </div>
        <div className="post__comments">
          <CommentIcon  className="post__comIcom"/>
          <p>{props.comments}</p>
          <MoreVertIcon />
        </div>
    </div>
  );
}

export default Post;
