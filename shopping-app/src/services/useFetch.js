import { useEffect, useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        let response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (error) {
        setError(error);
      } finally {
        // add setLoading false in finally because if any error occurred we need to set
        setLoading(false);
      }
    }

    init();
  }, [url]);

  return { data, error, loading };
}
