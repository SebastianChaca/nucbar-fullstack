import axios from 'axios';
// Next we make an 'instance' of it
const api = axios.create({
  // .. where we make our configurations
  baseURL: 'http://localhost:4000',
});

export function makeRequest<T>(url: string, options?: {}): Promise<T> {
  return api(url, options)
    .then(res => {
      return res.data.data;
    })
    .catch(error => Promise.reject(error.response?.data?.message ?? 'Error'));
}
