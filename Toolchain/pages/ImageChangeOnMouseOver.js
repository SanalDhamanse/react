import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";
import { useState } from "react";

const ImageChangeOnMouseOver = () => {
 

  return (
    <div>
      <ImageToggleOnMouseOver
        primary="/static/speakers/bw/Speaker-1124.jpg"
        secondary="/static/speakers/Speaker-1124.jpg"
        alt=""
      ></ImageToggleOnMouseOver>
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primary="/static/speakers/bw/Speaker-187.jpg"
        secondary="/static/speakers/Speaker-187.jpg"
        alt=""
      ></ImageToggleOnMouseOver>
    </div>
  );
};

export default ImageChangeOnMouseOver;
