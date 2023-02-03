import axios from "axios";

export const getData = (search, setResponse, setError) => {
 if (search) {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCLo5h5jNdZQXuWlqMu36KKaJe5d2WZyuo`;
  axios.get(url).then((res) => setResponse(res)).catch((err) => setError(err))
  return null;
 }
 let url = 'https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCLo5h5jNdZQXuWlqMu36KKaJe5d2WZyuo' + '&maxResults=40';
 axios.get(url).then((res) => setResponse(res)).catch((err) => setError(err))
}
