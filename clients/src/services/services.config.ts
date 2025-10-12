import { getEnv } from "@/config/env.config";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: `${getEnv().BASE_API_URL}/api`,
});
