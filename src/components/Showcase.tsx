import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

//TODO: CHANGE API URL
interface Coin {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function Showcase() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";
  useEffect(() => {
    //GET
    axios
      .get<Coin[]>(URL)
      .then((response) => {
        setCoins(response.data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin w-20 h-20" />
        </div>
      ) : (
        <div className="container px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {coins.map((coin) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
              >
                <Card
                  key={coin.id}
                  className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-700"
                >
                  <CardHeader>
                    <CardTitle className="text-white">{coin.name}</CardTitle>
                    <CardDescription className="text-base">
                      {coin.price_change_percentage_24h}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-white">
                    <p className="text-4xl font-bold">6900</p>
                  </CardContent>
                  {/* <CardFooter className="text-muted-foreground"> */}
                  {/* <p>Card Footer</p> */}
                  {/* </CardFooter> */}
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
