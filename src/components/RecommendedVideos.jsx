import React from "react";
import "./../RecommendedVideos.css";
import VideoComponent from "./VideoComponent";
// import SuggestionRow from "./SuggestionRow";
import { Avatar } from "@mui/material";

const RecommendedVideos = (props) => {
  return (
    <>
      <div className="RecommendedVideos" onClick={props.hideSidebar}>
        {/* <div className="Suggestions__slider">
          <SuggestionRow title="Javascript" />
          <SuggestionRow title="html" />
          <SuggestionRow title="code with harry" />
          <SuggestionRow title="web development" />
          <SuggestionRow title="react" />
          <SuggestionRow title="cwc23" />
          <SuggestionRow title="fifa23" />
          <SuggestionRow title="asian games" />
        </div> */}
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          src="	https://yt3.ggpht.com/ytc/APkrFKbhERyBcWb6WzB4HI_mG2R7gQYgIxq08jIalKrWvw=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="सैराटनंतर खरा स्ट्रगल सुरू झाला | His Story ft..."
          channelName="ABP news"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="How to Make Learning as Addictive as Social Media | Luis Von Ahn | TED"
          channelName="Zee Music Company"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/dHbAzd9jI1o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBmT5CVAvjD9H3auQwf48AklWQrwQ"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="India idol s14 | what a performance..."
          channelName="SET India"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/6ph4WPZIrbM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4pc6KrtThNUDfIxhWBs26qOSQ0g"
          Avatar={Avatar}
          src=""
          videoTitle="India idol s14 | what a performance..."
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/1KPG3LiE4jU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBo-rn8YZq8rP_3VjW4FGZjzL2GMw"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="The Ultimate AI next.js 13 crash course for..."
          channelName="Sony Sangha"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/xxdqbvygODw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOZ664KWzEUsHL23mvtXvrIr0feA"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/8d6ERqjLo_XCYH-0DWBd9L4tNKEHgZNSGBlZsxpCPRi6BgdcJmGfwmidRBwS7J5gAmE8JWFx=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/6ph4WPZIrbM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4pc6KrtThNUDfIxhWBs26qOSQ0g"
          Avatar={Avatar}
          src=""
          videoTitle="India idol s14 | what a performance..."
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/1KPG3LiE4jU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBo-rn8YZq8rP_3VjW4FGZjzL2GMw"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="The Ultimate AI next.js 13 crash course for..."
          channelName="Sony Sangha"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/xxdqbvygODw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOZ664KWzEUsHL23mvtXvrIr0feA"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/8d6ERqjLo_XCYH-0DWBd9L4tNKEHgZNSGBlZsxpCPRi6BgdcJmGfwmidRBwS7J5gAmE8JWFx=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/6ph4WPZIrbM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4pc6KrtThNUDfIxhWBs26qOSQ0g"
          Avatar={Avatar}
          src=""
          videoTitle="India idol s14 | what a performance..."
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/1KPG3LiE4jU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBo-rn8YZq8rP_3VjW4FGZjzL2GMw"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="The Ultimate AI next.js 13 crash course for..."
          channelName="Sony Sangha"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/xxdqbvygODw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOZ664KWzEUsHL23mvtXvrIr0feA"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/8d6ERqjLo_XCYH-0DWBd9L4tNKEHgZNSGBlZsxpCPRi6BgdcJmGfwmidRBwS7J5gAmE8JWFx=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/6ph4WPZIrbM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4pc6KrtThNUDfIxhWBs26qOSQ0g"
          Avatar={Avatar}
          src=""
          videoTitle="India idol s14 | what a performance..."
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/1KPG3LiE4jU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBo-rn8YZq8rP_3VjW4FGZjzL2GMw"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="The Ultimate AI next.js 13 crash course for..."
          channelName="Sony Sangha"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="https://i.ytimg.com/vi/cBwWM1o3524/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDSALTUI30Q27vPfFqUqmWp58bxUQ"
          Avatar={Avatar}
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
        <VideoComponent
          videoThumbnail="	https://i.ytimg.com/vi/xxdqbvygODw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOZ664KWzEUsHL23mvtXvrIr0feA"
          Avatar={Avatar}
          src="https://yt3.ggpht.com/8d6ERqjLo_XCYH-0DWBd9L4tNKEHgZNSGBlZsxpCPRi6BgdcJmGfwmidRBwS7J5gAmE8JWFx=s68-c-k-c0x00ffffff-no-rj"
          videoTitle="welcome to my new coding video"
          channelName="codingmania"
          noOfViews="3M views"
          timeStamp="1 year ago"
        />
      </div>
    </>
  );
};

export default RecommendedVideos;
