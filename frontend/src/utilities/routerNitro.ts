import axios from "axios";
export const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api"

export interface QuoteParams {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: number;
  fromTokenChainId: number;
  toTokenChainId: number;
}


export const getQuote = async (params: QuoteParams) => {
  const endpoint = "v2/quote"
  const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`

  console.log(quoteUrl)

  try {
    const res = await axios.get(quoteUrl, { params })
    return res.data;
  } catch (e) {
    console.error(`Fetching quote data from pathfinder: ${e}`)
  }
}