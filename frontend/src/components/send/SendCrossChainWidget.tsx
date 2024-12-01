import SystemMesage from "@/components/SystemMessage";


import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { AssetBox } from "@/components/jupiter/AssetBox";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { QuoteParams } from "@/utilities/routerNitro";


const formatToAddress = (address: string) => {
  const n = 6;
  const formattedAddress =
    address.substring(0, n) +
    "..." +
    address.substring(address.length - n, address.length);
  return formattedAddress;
};



export function SendCrossChainWidget(quoteParams: QuoteParams) {
  const [tx, setTx] = useState(null)

  const handleSend = () => {
    console.log("send")
  } 

  return (
    <SystemMesage title="Send" onConfirm={handleSend}>
      <div className="flex flex-col items-center justify-center gap-3">
        {/* <AssetBox name={fromAsset.name} amount={amountIn} img={fromAsset.img} /> */}
        <ArrowDownIcon className="h-4 w-4" />
        <div className="info-box flex space-x-1">
          <div className="text-white font-bold">Address: </div>
          <div className="text-gray-300 font-bold">
            {formatToAddress(quoteParams.toTokenAddress)}
          </div>
        </div>
      </div>

      {tx && <div className="mt-4 bg-green-100 border border-green-400 rounded-lg p-4 w-full">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-700">Transaction successful!</span>
            </div>
            {tx && (
              <a 
                href={`https://explorer.devnet.soo.network/tx/${tx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-800 underline mt-2 block"
              >
                View on explorer
              </a>
            )}
          </div>}
    </SystemMesage>
  );
}
