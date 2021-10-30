import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";


let authTokenRequest = null;

const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" }
});

function requestNewToken() {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refreshToken");

  return axios.post(`http://localhost:8080/auth/token/`, { refreshToken: refreshToken })
    .then((res: AxiosResponse<{ accessToken: string; refreshToken: string }>) => {
      const { data } = res;

      cookies.set("accessToken", data.accessToken, { path: "/" });
      cookies.set("refreshToken", data.refreshToken, { path: "/" });
    })
    .catch(() => window.location.href = "/login");
}

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = requestNewToken();
    authTokenRequest.finally(resetAuthTokenRequest);
  }

  return authTokenRequest;
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}

client.interceptors.response.use(r => r, error => {
  if (!error.response) return Promise.reject(error);

  const originalRequest = error.config;

  // Dont't try to renew while login in
  if (error.response.status === 401 && originalRequest.url) {
    if (originalRequest.url === "/auth/") return Promise.reject(error.response ? error.response : error);
  }

  if (error.response.status === 401 && !originalRequest.__isRetryRequest) {
    originalRequest.__isRetryRequest = true;

    return getAuthToken().then(() => {
      const cookies = new Cookies();

      const accessToken = cookies.get("accessToken");
      originalRequest.headers.Authorization = `JWT ${accessToken}`;

      return client(originalRequest);
    }).catch(() => Promise.reject(Error("Failed to obtain renew token")));
  }

  return Promise.reject(error.response ? error.response : error);
});


const request = function(options) {
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  const onSuccess = function(response) {
    return response.data;
  };
  const onError = function(error) {
    return Promise.reject(error);
  };

  if (accessToken) {
    if (!options.headers) options.headers = {};
    options.headers.Authorization = `JWT ${accessToken}`;
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
