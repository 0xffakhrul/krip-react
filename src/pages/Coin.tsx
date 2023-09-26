import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import DOMPurify from "dompurify";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  market_data: {
    price_change_24h: number;
    current_price: {
      usd: number;
    };
  };
  description: {
    en: string;
  };
  image: {
    large: string;
  };
  coingecko_rank: number;
}

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  const [coin, setUser] = useState<Coin | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Coin>(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [coinId]);

  return (
    // <div className="max-lg:h-[130vh] pt-[3.5rem] md:pt-[7.5rem] xl:pt-[11rem] 2xl:pt-[13.5rem] flex flex-col items-center">
    <div className="flex items-center justify-center min-h-screen md:px-6">
      <div className="max-w-7xl mx-auto ">
        {coin ? (
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
            <div className="w-[30%] text-2xl border-b pb-6 md:border-r md:border-b-0 flex flex-col gap-y-4 items-center justify-center">
              <img src={coin.image.large} alt="image" />
              <h2>{coin.name}</h2>
              <p>Rank: #{coin.coingecko_rank}</p>
            </div>
            <div className="w-[70%]  text-xl">
              <div className="flex flex-wrap justify-center gap-3 md:justify-between pb-8">
                <div>
                  <p>
                    24h Change:
                    <span
                      className={
                        coin.market_data.price_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {" "}
                      {coin.market_data.price_change_24h}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    Price:{" "}
                    <span className="text-green-500">
                      {coin.market_data.current_price.usd}
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    Symbol:{" "}
                    <span className="text-yellow-500">{coin.symbol}</span>
                  </p>
                </div>
              </div>
              <p
                className="h-80 overflow-y-auto"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coin.description.en),
                }}
              ></p>
            </div>
          </div>
        ) : (
          <Loader2 className="animate-spin w-16 h-16" />
        )}
      </div>
    </div>
  );
}
