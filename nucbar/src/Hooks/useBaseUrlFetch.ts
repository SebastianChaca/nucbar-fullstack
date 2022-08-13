import React, { useState } from 'react';
import axiosConfig from '../Axios/axiosConfig';
const useBaseUrlFetch = () => {
  const [response, setresponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getData = async (params: {} = {}) => {
    const queryStrings = new URLSearchParams(params).toString();

    setLoading(true);
    try {
      const { data } = await axiosConfig.get(`/products?${queryStrings}`);
      setresponse(data.data.products);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { getData, loading, error, response };
};

export default useBaseUrlFetch;
