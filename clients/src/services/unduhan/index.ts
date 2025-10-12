import { httpClient } from "../services.config";

export const unduhanService = {
  getUnduhanList: () => httpClient.get("/unduhans?populate=*"),
  getUnduhanWithLabel: (value: string) =>
    httpClient.get(
      `/unduhans?filters[label_unduhan][nama][$eq]=${value}}&populate=*`
    ),
  getUnduhanWithKeyword: (value: string) =>
    httpClient.get(`/unduhans?filters[title][$contains]=${value}}&populate=*`),
};
