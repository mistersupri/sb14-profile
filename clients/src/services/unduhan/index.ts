import { httpClient } from "../services.config";

export const unduhanService = {
  getUnduhanList: () =>
    httpClient.get("/unduhans?populate=*").then(({ data }) => data),
  getUnduhanWithLabel: (value: string) =>
    httpClient
      .get(`/unduhans?filters[label_unduhan][nama][$eq]=${value}}&populate=*`)
      .then(({ data }) => data),
  getUnduhanWithKeyword: (value: string) =>
    httpClient
      .get(`/unduhans?filters[title][$contains]=${value}}&populate=*`)
      .then(({ data }) => data),
};
