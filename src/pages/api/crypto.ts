/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type  ApiResponse } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const API_KEY = "c3f841e7-0fff-4d8e-985f-248d29747571";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data: ApiResponse = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ data: [] }); // In caso di errore, restituisci un array vuoto
    }
  }