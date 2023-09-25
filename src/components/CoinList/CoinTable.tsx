import React, { useEffect, useState } from "react";
import { Coin, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";

function CoinTable() {
  const [data, setData] = useState<Coin[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<Coin[]>(
          "https://jsonplaceholder.org/users"
        );
        const slicedData = res.data.slice(0, 20);
        setData(slicedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // The empty array [] ensures this effect runs once after initial render

  return (
    <div className="container px-0">
      <h1 className="text-white font-bold text-4xl text-center py-12">
        Market Update
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default CoinTable;
