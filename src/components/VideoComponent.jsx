import React from "react";

const VideoComponent = (props) => {
  return (
    <div className="VideoComponent">
      <img className="videoThumbnail" src={props.videoThumbnail} alt="" />
      <div className="VideoComponent__desc_part">
        <div className="VideoComponent__left">
          <props.Avatar className="Avatar" src={props.src} />
        </div>
        <div className="VideoComponent__right">
          <h2 className="videoTitle">{props.videoTitle}</h2>
          <p className="channelTitle">{props.channelName}</p>
          <p>
            {props.noOfViews}
            <span className="timeStamp">{props.timeStamp}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
