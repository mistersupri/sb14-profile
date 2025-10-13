import { httpClient } from "../services.config";

export const portalService = {
  getPortalList: () =>
    httpClient.get("/portals?populate=*").then(({ data }) => data),
};
