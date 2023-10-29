import React from "react";
import "./../RecommendedVideos.css";

const SuggestionRow = (props) => {
  return (
    <div className="SuggestionRow">
      <p>{props.title}</p>
    </div>
  );
};

export default SuggestionRow;
