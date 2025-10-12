import { httpClient } from "../services.config";

export const portalService = {
  getPortalList: () => httpClient.get("/galleries?populate=*"),
};
