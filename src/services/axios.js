import axios from "axios";

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

function getUrl(config) {
  if (config.baseURL) {
    return config.url?.replace(config.baseURL, '');
  }
  return config.url;
}

const objectToQueryString = (params) => {
  const queryString = Object.keys(params)
    .map((key) => {
      if (
        params[key] !== null &&
        params[key] !== undefined &&
        params[key] !== ""
      ) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      }
    })
    .join('&');
  return queryString;
};

instance.interceptors.response.use(
  (response) => {
    console.log(
      `%c ${response.status} - ${getUrl(response.config)}:`,
      'color: #008000; font-weight: bold',
      response
    );
    return response;
  },
  (error) => {
    console.log(error);
    console.log(
      `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
      'color: #a71d5d; font-weight: bold',
      error.response
    );
    return Promise.reject(error.response);
  }
);

export { instance, objectToQueryString };
