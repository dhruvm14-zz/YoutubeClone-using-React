import React from "react";
import "./css/VideoCard.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function VideoCard(props) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail" src={props.imgURL} />

      <div className="videocard__content">
        <Avatar
          className="videocard__avatar"
          alt={props.channel}
          src={props.channelURL}
        />

        <div className="videocard__text">
          <h4>{props.title.substring(0,50)}</h4>
          <p>{props.channel}  <CheckCircleIcon className="videocard__tick" /></p>
          <p>
              {props.views} • {props.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
