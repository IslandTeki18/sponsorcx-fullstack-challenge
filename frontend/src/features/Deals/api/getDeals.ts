import axios from "axios";
import { Deal } from "../types/Deal";

const API_URL = "http://localhost:3000/api/deals/";

export const getDeals = async (): Promise<Deal[]> => {
  const response = await axios.get<Deal[]>(API_URL);
  return response.data;
};
