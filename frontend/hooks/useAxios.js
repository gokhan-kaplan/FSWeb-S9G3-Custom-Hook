import axios from "axios";
import { useState } from "react";

export const useAxios = (type, url, params) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios[type](url, params)
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  return [data, error, loading, getData];
};

export default useAxios;
