import { httpClient } from "../services.config";

export const faqService = {
  getFaqList: () => httpClient.get("/faqs?populate=*").then(({ data }) => data),
};
