import { httpClient } from "../services.config";

export const unduhanService = {
  getUnduhanList: async (params?: {
    label?: string | null;
    keyword?: string | null;
  }) => {
    const filterLabel = params?.label
      ? `&filters[label_unduhan][nama][$eq]=${params?.label}`
      : "";
    const filterKeyword = params?.keyword
      ? `&filters[nama][$contains]=${params?.keyword}`
      : "";
    return await httpClient
      .get(`/unduhans?populate=*${filterLabel}${filterKeyword}`)
      .then(({ data }) => data);
  },
  getLabelUnduhanList: () =>
    httpClient.get("/label-unduhans?populate=*").then(({ data }) => data),
};
