import axios from "axios";
import { BASE_URL } from "@/api/fetcher";

export const authRequest = async (refreshToken: string) => {
  const response = await axios.get(`${BASE_URL}/refresh-token`, {
    params: {
      refresh_token: refreshToken,
    },
  });
  return response.data.access_token;
};
