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
  const URL = "https://jsonplaceholder.org/users";
  useEffect(() => {
    //GET
    axios
      .get<Coin[]>(URL)
      .then((response) => {
        setCoins(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {coins.map((coin) => (
        <Card key={coin.id} className="bg-zinc-900 border border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">{coin.firstname}</CardTitle>
            <CardDescription>{coin.firstname}</CardDescription>
          </CardHeader>
          <CardContent className="text-white">
            <p>
              {coin.address.city} {coin.address.street} {coin.address.suite}
            </p>
          </CardContent>
          <CardFooter className="text-muted-foreground">
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
