import { useRef } from "react";

const ImageToggleOnMouseOver = ({ primary, secondary }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondary;
      }}
      onMouseOut={() => {
        imageRef.current.src = primary;
      }}
      src={primary}
      alt=""
      ref={imageRef}
    ></img>
  );
};

export default ImageToggleOnMouseOver;
