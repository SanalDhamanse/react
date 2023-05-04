import { useEffect, useRef, useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url,  inputMount = false) {
  const isMounted = useRef(inputMount);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    isMounted.current = true;
    async function init() {
      try {
        let response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (error) {
        if (isMounted.current) setError(error);
      } finally {
        // add setLoading false in finally because if any error occurred we need to set
        if (isMounted.current) setLoading(false);
      }
    }

    init();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, error, loading };
}
