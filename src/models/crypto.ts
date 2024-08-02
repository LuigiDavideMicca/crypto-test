export interface QuoteUSD {
    price: number;
    last_updated: string;
}

export interface CryptoData {
    id: number;
    name: string;
    symbol: string;
    circulating_supply: number;
    last_updated: string;
    quote: {
        USD: QuoteUSD;
    };
}