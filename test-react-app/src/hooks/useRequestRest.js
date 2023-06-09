import { useState, useEffect } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  Loading: "loading",
  Success: "Success",
  Failed: "failed",
};
const restUrl = "api/speakers";

function useRequestRest() {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.Loading);

  const [error, setError] = useState("");

  const delay = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  useEffect(() => {
    async function delayFunc() {
      try {
        const result = await axios.get(restUrl);
        setRequestStatus(REQUEST_STATUS.Success);
        setData(result.data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.Failed);
        setError(error);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    const originalRecords = [...data];

    const newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.put(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    const originalRecords = [...data];

    const newRecords = [record, ...data];

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.post(`${restUrl}/99999`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    const originalRecords = [...data];

    const newRecords = data.filter((rec) => {
      return rec.id != record.id;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.delete(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
}

export default useRequestRest;
