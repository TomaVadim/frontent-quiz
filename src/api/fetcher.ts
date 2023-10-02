import axios from "axios";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

import TokenService from "@/shared/services/token-service";

const BASE_URL: string = "https:/example.com";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

fetcher.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = TokenService.getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

fetcher.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = TokenService.getRefreshToken();

      if (refreshToken) {
        try {
          const refreshedToken = await refreshTokenAPI(refreshToken);
          TokenService.setAccessToken(refreshedToken);
          return fetcher(error.config);
        } catch (refreshError) {
          TokenService.removeTokens();
          console.error("Token refresh failed:", refreshError);
        }
      } else {
        TokenService.removeTokens();
      }
    }
    return Promise.reject(error);
  },
);

async function refreshTokenAPI(refreshToken: string) {
  const response = await axios.post(`${BASE_URL}/refresh-token`, {
    refresh_token: refreshToken,
  });
  return response.data.access_token;
}
