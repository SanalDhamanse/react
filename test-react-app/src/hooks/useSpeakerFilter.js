import { useState } from "react";

function useSpeakerFilter(staringShowSession, startingYear) {
  const [showSessions, setShowSessions] = useState(staringShowSession);
  const [eventYear, setEventYear] = useState(startingYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2008",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];
  
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  };
}

export default useSpeakerFilter;
