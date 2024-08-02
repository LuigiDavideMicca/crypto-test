import { type CryptoData } from "@/models/crypto";
import { makeApiCall } from "@/utils";

const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"


export const getCryptoInfo = async () => {
    try {
        const data = await makeApiCall<{ data: CryptoData[] }>(url);
        return data;
    } catch (error) {
        console.error('API call failed:', error);
    }
};