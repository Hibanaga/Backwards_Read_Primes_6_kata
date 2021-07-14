import axios from "axios";

const API_KEY = `22420681-313330a10c6fb67bf32b92a1a`;

function pixabayApi(query, pageNum = 1, cancelToken) {
  return axios(
    `https://pixabay.com/api/?q=${query}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    cancelToken
  ).then((data) => data.data);
}

export default pixabayApi;
