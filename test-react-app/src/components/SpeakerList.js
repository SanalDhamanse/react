import Speaker from "../../src/components/Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestRest";
import { data } from "../../SpeakerData";
import { useContext } from "react";
import { SpeakerFilterContext } from "../Contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

function SpeakerList() {
  const {
    data: speakerData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const { eventYear, searchQuery } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.Failed) {
    return (
      <div className="text-danger">
        Error:<b>Loading Speaker Data failed</b>
      </div>
    );
  }

  // if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.Success}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {speakerData
            .filter(function (speaker) {
              return (
                speaker.first.toLowerCase().includes(searchQuery) ||
                speaker.last.toLowerCase().includes(searchQuery)
              );
            })
            .filter(function (speaker) {
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map(renderSpeaker)}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakerList;
