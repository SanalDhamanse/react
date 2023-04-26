import SpeakersToolbar from "./SpeakerToolbar";
import SpeakerList from "./SpeakerList";
import { SpeakerFilterProvider } from "../Contexts/SpeakerFilterContext";

function Speakers() {
  return (
    <SpeakerFilterProvider staringShowSession={false}>
      <SpeakersToolbar />
      <SpeakerList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
