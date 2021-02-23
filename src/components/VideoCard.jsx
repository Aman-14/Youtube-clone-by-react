import React from "react";

function VideoCard({
  imgSrc,
  videoTitle,
  channelName,
  Icon,
  views,
  timestamp,
}) {
  return (
    <div className="recommended__videoCard">
      <img className="videocard__img" src={imgSrc} alt="thumbnail" />
      <p className="videocard__title">{videoTitle}</p>
      <div className="videocard__info">
        <p>
          {channelName}
          <Icon className="videocard__icon" />
        </p>

        <p>
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
