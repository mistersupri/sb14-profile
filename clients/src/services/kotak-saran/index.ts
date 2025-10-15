import { httpClient } from "../services.config";

type TTujuanKotakSaran = "Guru" | "Staf Tata Usaha" | "Caraka" | "Sekolah";

export type TCreateKotakSaranParams = {
  nama?: string;
  tujuan: TTujuanKotakSaran;
  saran: string;
};

export const kotakSaranService = {
  createKotakSaran: (data: TCreateKotakSaranParams) =>
    httpClient.post("/kotak-sarans", { data: data }).then(({ data }) => data),
};
