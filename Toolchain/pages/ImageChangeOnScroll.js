import { useEffect, useState } from "react";
import ImageToggleOnScrolls from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [speakerIdCounter, setSpeakerIdCounter] = useState(0);
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);

  useEffect(() => {
    window.document.title = `Speaker Id ${currentSpeakerId}`;
    console.log(` UseEffect SpeakerId: ${currentSpeakerId}`);
  }, [currentSpeakerId]);

  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setSpeakerIdCounter(speakerIdCounter + 1);

              console.log(`onMouseOver: ${speakerIdCounter}`);
            }}
          >
            <ImageToggleOnScrolls
              primary={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondary={`/static/speakers/Speaker-${speakerId}.jpg`}
            ></ImageToggleOnScrolls>
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
