import axios from "axios";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

import { TokenService } from "@/shared/services/token-service";
import { authRequest } from "@/api/requests/auth.requests";

const { getAccessToken, getRefreshToken, setAccessToken, removeTokens } =
  new TokenService();

export const BASE_URL: string = "https:/example.com";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

fetcher.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();

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
      const refreshToken = getRefreshToken();

      if (refreshToken && typeof refreshToken === "string") {
        try {
          const refreshedToken = await authRequest(refreshToken);
          setAccessToken(refreshedToken);
          return fetcher(error.config);
        } catch (refreshError) {
          removeTokens();
          console.error("Token refresh failed:", refreshError);
        }
      } else {
        removeTokens();
      }
    }

    return Promise.reject(error);
  },
);
