/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ApiResponse } from "@/models";
import { type CryptoData } from "@/models/crypto";
import { formatDate } from "@/utils";
import { useEffect, useState, type FC } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const CryptoTab: FC = () => {

    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("/api/crypto");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const res: ApiResponse = await response.json();
                setCryptoData(res.data);
            } catch (err) {
                setError(`Failed to fetch data: ${JSON.stringify(err)}`);
            } finally {
                setLoading(false);
            }
        };

        void fetchData();
    }, []);


    return (
        <div className="overflow-x-auto">
            {loading && <Spinner />}
            {error && <ErrorMessage error={error} />}
            {!loading && !error &&
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className='uppercase bg-black text-white'>
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Nome Criptovaluta</th>
                            <th className="py-2 px-4 border-b">Simbolo</th>
                            <th className="py-2 px-4 border-b">Prezzo</th>
                            <th className="py-2 px-4 border-b">Circulating Supply</th>
                            <th className="py-2 px-4 border-b">Ultimo Aggiornamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData?.map((crypto, index) => (
                            <tr key={crypto?.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                <td className="py-2 px-4 border-b font-semibold">{crypto.name}</td>
                                <td className="py-2 px-4 border-b text-center">{crypto.symbol}</td>
                                <td className="py-2 px-4 border-b text-right">${crypto.quote.USD.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b text-right">{crypto.circulating_supply.toLocaleString()}</td>
                                <td className="py-2 px-4 border-b text-center">{formatDate(crypto.quote.USD.last_updated)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default CryptoTab;
