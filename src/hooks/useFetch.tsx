import { useEffect, useState } from 'react';

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch;
