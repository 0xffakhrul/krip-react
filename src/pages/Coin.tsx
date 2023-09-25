import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

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

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  const [coin, setUser] = useState<Coin | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Coin>(
          `https://jsonplaceholder.org/users/${coinId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [coinId]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {coin ? (
        <div>
          <h2>Name: {coin.firstname}</h2>
          <p>Email: {coin.email}</p>
          <h3>Address:</h3>
          <p>Street: {coin.address.street}</p>
          <p>Suite: {coin.address.suite}</p>
          <p>City: {coin.address.city}</p>
          <p>Zipcode: {coin.address.zipcode}</p>
        </div>
      ) : (
        <Loader2 className="animate-spin w-16 h-16" />
      )}
    </div>
  );
}
