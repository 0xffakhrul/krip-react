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

//TODO: CHANGE API URL
interface Coin {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export default function Showcase() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://jsonplaceholder.org/users";
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
              <Card
                key={coin.id}
                className="bg-zinc-900 border border-zinc-700"
              >
                <CardHeader>
                  <CardTitle className="text-white">{coin.firstname}</CardTitle>
                  <CardDescription>{coin.firstname}</CardDescription>
                </CardHeader>
                <CardContent className="text-white">
                  <p>
                    {coin.address.city} {coin.address.street}{" "}
                    {coin.address.suite}
                  </p>
                </CardContent>
                <CardFooter className="text-muted-foreground">
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
