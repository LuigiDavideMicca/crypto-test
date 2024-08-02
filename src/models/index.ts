import { type CryptoData } from "./crypto";

export interface IHome {
    bitcoinValue: string | undefined,
    cryptoCurr: string | undefined,
    cryptoVal: string | undefined,
}

export interface FetchConfig {
    headers?: Record<string, string>;
    method?: string;
    body?: string;
};


export interface ApiResponse {
    data: CryptoData[];
}
